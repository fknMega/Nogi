const express = require('express');
const app = express();
const requestIp = require('request-ip');
const path = require('path');
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

app.use('/styles/:style', (req, res, next) => {
    const style = req.params.style;
    // Ensure the style name is safe (e.g., only letters, numbers, and certain characters like hyphens or underscores)
    if (!/^[a-zA-Z0-9-_]+\.css$/.test(style)) {
        return res.status(400).send('Invalid style name.');
    }

    // Construct the safe file path
    const safePath = path.join(__dirname, 'styles', style);

    // Send the file
    res.sendFile(safePath, (err) => {
        if (err) {
            next(err);
        }
    });
});

app.use('/scripts/:script', (req, res, next) => {
    const script = req.params.script;
    // Ensure the script name is safe (e.g., only letters, numbers, and certain characters like hyphens or underscores)
    if (!/^[a-zA-Z0-9-_]+\.js$/.test(script)) {
        return res.status(400).send('Invalid script name.');
    }

    // Construct the safe file path
    const safePath = path.join(__dirname, 'scripts', script);

    // Send the file
    res.sendFile(safePath, (err) => {
        if (err) {
            next(err);
        }
    });
});

// Home route
app.get('/', (req, res) => {
    res.render('index');
});

// Response route for "Yes"
app.get('/yes', (req, res) => {
    const clientIp = requestIp.getClientIp(req); // Capture the client's IP address
    // You might use an API here to get more info based on the IP
    res.render('yes', { ip: clientIp });
});

const geoip = require('geoip-lite');

// Response route for "No"
app.get('/no', (req, res) => {
    const clientIp = requestIp.getClientIp(req); // Capture the client's IP address
    const geo = geoip.lookup(clientIp);

    res.render('no', { 
        ip: clientIp, 
        location: geo ? `${geo.city}, ${geo.region}, ${geo.country}` : "an unknown location"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
