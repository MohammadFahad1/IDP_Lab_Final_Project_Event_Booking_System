// Import dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

// App setup
const app = express();
app.use(express.json());

// Cors Setup
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mn9baty.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define User schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

const User = mongoose.model("User", userSchema);

// Middleware to verify JWT and roles
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access token required" });

  jwt.verify(token, "secret_key", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

const authorizeRole = (role) => (req, res, next) => {
  if (req.user.role !== role)
    return res.status(403).json({ message: "Access denied" });
  next();
};

// Routes

// 1. Register a user
app.post("/register", async (req, res) => {
  const { fullName, email, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullName,
      email,
      username,
      password: hashedPassword,
      role: "user",
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error registering user", error: err.message });
  }
});

// 2. Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ message: "Email or password didn't matched!" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res
        .status(400)
        .json({ message: "Email or password didn't matched!" });

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        role: user.role,
        email: user.email,
      },
      "secret_key",
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
});

// 3. Protected route (only authenticated users can access)
app.get("/user", authenticateToken, (req, res) => {
  res.status(200).json({
    message: `Welcome, ${req.user.username}, you're logged in as ${req.user.role}!`,
  });
});

// 4. Admin-only route
app.get("/admin", authenticateToken, authorizeRole("admin"), (req, res) => {
  res.status(200).json({ message: "Welcome, Admin!" });
});

// Check if a user is logged in
app.get("/check-auth", authenticateToken, (req, res) => {
  res.status(200).json({ loggedIn: true, user: req.user });
});

app.get("/", (req, res) => {
  res.send("Welcome to Event Booking System, IDP Lab project!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
