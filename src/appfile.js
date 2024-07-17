const express = require('express');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
        try{
            res.status(200).send('Hello World');} 
        catch (error) {
            res.status(500).send('Error contacting server');
        }
    }
);

app.get('/status', (req, res) => {
    try{
        res.status(200).json({ message: 'API is working.' });
    } catch (error) {
        res.status(500).send('Error contacting server');
    }
  });


module.exports = app;

