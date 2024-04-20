const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;


app.use(cors({
    origin: 'http://localhost:3000', // Vue.js client's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Allow cookies to be sent with requests
}));

// Adding routes to our  server
const userManagementRoutes = require('./routes/userManagement'); 
const issueManagementRoutes = require('./routes/issueManagement'); 
const reportsRoutes = require('./routes/reports'); 
const noticesRoutes = require('./routes/notices'); 
const finesRoutes = require('./routes/fines'); 
const loginRoutes = require('./routes/login'); 


app.use(bodyParser.json());
app.use(userManagementRoutes);
app.use(issueManagementRoutes);
app.use(reportsRoutes);
app.use(noticesRoutes);
app.use(finesRoutes);
app.use(loginRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


module.exports = app;