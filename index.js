require('dotenv').config()
const express = require('express');
const cors = require('cors');

const {
    MongoClient
} = require('mongodb');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

const mongoURI = process.env.MONGO_URI;

let db;

MongoClient.connect(mongoURI)
    .then(client => {
        db = client.db("fishing");
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.error('MongoDB Connection Error: ', err);
    });


app.post('/user', async (req, res) => {
    console.log(req.body);
    try {
        const {
            name,
            email,
            message
        } = req.body;

        // Check if name, email, and message are present in the request body
        if (!name || !email || !message) {
            return res.status(400).json({
                error: 'Name, email, and message are required fields.'
            });
        }

        const collection = db.collection('users');
        await collection.insertOne({
            name,
            email,
            message
        });
        res.status(201).json({
            message: "Record inserted."
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
