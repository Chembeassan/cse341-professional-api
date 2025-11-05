const express = require('express');
const app = express();
const port = 8080;

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());

// Professional data
const professionalData = {
  "professionalName": "Assan Chembe",
  "base64Image": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
  "primaryDescription": "Full Stack Developer & CSE Student",
  "nameLink": {
    "firstName": "Assan",
    "url": "https://github.com/Chembeassan"
  },
  "workDescription1": "Passionate about web development and creating efficient, scalable applications.",
  "workDescription2": "Currently studying Web Services and backend development at BYU-Idaho.",
  "linkTitleText": "Connect with me:",
  "linkedInLink": {
    "text": "LinkedIn Profile",
    "link": "https://linkedin.com/in/aasanchembe"
  },
  "githubLink": {
    "text": "GitHub Portfolio", 
    "link": "https://github.com/Chembeassan"
  }
};

// Routes
app.get('/', (req, res) => {
    res.json({ 
        message: 'Professional API is running!',
        endpoint: 'GET /professional'
    });
});

app.get('/professional', (req, res) => {
    res.json(professionalData);
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Professional API running on http://localhost:${port}`);
});

// Keep the process alive
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down server...');
    process.exit(0);
});