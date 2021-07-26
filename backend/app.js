const express = require('express');
const app = express();
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const path = require('path');

const helmet = require('helmet');
const hpp = require("hpp");



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(helmet());
app.use(hpp());

app.use("/images", express.static(path.join(__dirname, "images")));
  
app.use("/api/posts", postRoutes);
app.use("/api/posts/", commentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/profile", profileRoutes);

module.exports = app;