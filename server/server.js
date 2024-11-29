const express = require("express");
const mongoose = require("mongoose");

const session = require("express-session");
const authRoutes = require("./routes/auth");

require("dotenv").config();
const cors = require("cors");
const User = require('./models/User');


const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "test",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 , // 60 MIN
      sameSite: "lax",
    },
  })
);


console.log(process.env.MONGO_URI);
// MongoDB Connection
mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use(authRoutes);


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

