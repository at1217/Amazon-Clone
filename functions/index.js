const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response } = require('express');
const stripe = require("stripe")('sk_test_51HQYbTCFUg5O07yEtQFExL9KY6QoIlnAPNJEPL8VkIUNDH8NVuHOzhRWQ7blo25km5mKtYih9zrGbfezb8DecKsa00ipqtnnyq');


// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Received!', total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen Command
exports.api = functions.https.onRequest(app);
