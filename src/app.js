
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const coupleRoute = require('../routes/couple/authCoupleRoute');
// const vendorRoute = require('../routes/vendor/authVendorRoute');
const authCoupleRoute = require('./routes/couple/auth/authCoupleRoute')
const authVendorRoute = require('./routes/vendor/auth/authVendorRoute')

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to I thee wed API!');
});

app.use('/', authCoupleRoute);
app.use('/', authVendorRoute);

app.listen(PORT, () => {
    console.log(`Connected port: ${PORT}`);
    
});

