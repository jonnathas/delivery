import express from 'express';
const app = express();
const port = 80;

//import clientRouter from './src/routes/clientRouter';
//import cashierRouter from './src/routes/cashierRouter';
import managerRouter from './src/routes/managerRouter.js';

//app.use('/',clientRouter)
//app.use('/cashier', cashierRouter)
app.use('/manager', managerRouter)

app.listen(port,() => {
    console.log('servidor iniciado');
});


