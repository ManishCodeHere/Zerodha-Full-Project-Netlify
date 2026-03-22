require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require('./model/UserModel');
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'], // Frontend and Dashboard
    credentials: true
}));
app.use(bodyParser.json());

// Session configuration
app.use(session({
    secret: 'your-secret-key-change-this', // Change this to a random string
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// Auth routes
app.use('/api/auth', authRoutes);

// Your existing routes
app.get('/allHoldings', async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("Order Saved!");
});

app.listen(PORT, () => {
    console.log("App started on port " + PORT);
    mongoose.connect(uri);
    console.log("DB started");
});