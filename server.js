const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Route to handle storing moderator applications
app.post('/storeModeratorApplication', (req, res) => {
    // Handle storing the moderator application data here
    const modApplicationData = req.body;
    console.log('Received mod application:', modApplicationData);

    // Respond with a success message
    res.json({ message: 'Mod application received successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
