const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to I thee wed API!');
});

app.listen(PORT, () => {
    console.log(`Connected port: ${PORT}`);
    
});