const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const coupleRoute = require('./routes/coupleRoute');


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to I thee wed API!');
});

app.use('/', coupleRoute)
app.use('/', coupleRoute)

app.listen(PORT, () => {
    console.log(`Connected port: ${PORT}`);
    
});