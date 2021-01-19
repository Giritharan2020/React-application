const { performTransaction, performSelect } = require ('./pgutils')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const cors = require('cors');
const { Pool } = require('pg');

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'giritharan',
    password: 'postgres',
    port: 5432,
    
})


app.get("/",(req,res)=>{
    console.log("hello world!");
    res.send("Hello world!");
});

app.post("/signup", async function(req, res,){
    const { body } = req;
    console.log(req.body)
    const { username, email, phonenumber, password } = body;
    const controller = new sigupservice();
    const result = await controller.signup(username, email, phonenumber, password);
    // console.log('result', result);
    res.send(result);
});

app.post("/login", async function(req, res){
    // const { email, password } = req.body;
    console.log(req.body)
    // const { email, password } = body;
    // const controller = new sigupservice();
    // const result = await controller.login(email, password);
    // console.log('result', result);
    const Data = req.body
    res.send(Data);
})


class sigupservice {
    signup(username, email, phone, password) {
        const stmt = 'select * from insertsign($<username>, $<email>, $<phone>, $<password>)';
        //  const values = res.rows;
        const values = { username, email, phone, password };
        const batch = [{ statement: stmt, values: { username, email, phone, password } }];
        return performTransaction(batch);
    }
    
    login(email, password){
        const stmt = 'select * from isvalidlogin($<email>, $<password>)';
        const values = { email, password };
        // console.log(email);
        return performSelect(stmt, values);
      }
}




app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});

