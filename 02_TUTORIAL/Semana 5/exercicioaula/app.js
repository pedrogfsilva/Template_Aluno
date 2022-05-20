const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/', (req, res) =>{
    const quantity = req.body.qtd;
    const type = req.body.tipo;
    const payment = req.body.pagamento;

    const typePayment = ['Dinheiro', 'Cartão'];

    const types = ['Alcatra', 'Filé duplo', 'Picanha'];
    const valueUnder5 = [45.90, 24.90, 56.90];
    const valueAbove5 = [42.80, 23.80, 53.80];

    let finalValue = 0;

    if(quantity <= 5){
        finalValue = valueUnder5[type] * quantity;
        
    } else {
        finalValue = valueAbove5[type] * quantity;
    }

    if(typePayment[payment] === 'Dinheiro'){
        finalValue *= 0.95 * finalValue;
    }

    res.write(`A quantidade de carne comprada é ${quantity}KG, de ${types[type]}, no valor de R$${finalValue}`);
    res.send();
});

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});