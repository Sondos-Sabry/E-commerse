const express=require('express');
const mysql =require('mysql');
const cors = require('cors');

const app = express();
app.use(cors);

const db=mysql.createConnection({
  host:"localhost",
  user:"root",
  database:"ecommerce",
});
 
app.post('/signup',(req,res)=>{
    const sql="INSERT INTO users ('name','email','phone','password') VALUES(?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.password
    ];
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("error");
        }
        return res.json(data);
    })
})
app.listen(8081,()=>{
    console.log("listeninnnnng to db")
})