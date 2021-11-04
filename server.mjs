import express from 'express';
import cors from 'cors';
import morgan from 'morgan';


const = app = express();
const port = process.env.PORT || 3000

let users = [];
app.use(cors())
app.use(express.json())
app.use(morgan('short'))

app.use((req, res, next) => {
    console.log("A request came", req.body);
    next()
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res)=> {
    if(users[req.params.id]){
    res.send(users[req.params.id])
    }
    else{
        res.send("users not found")
    }
})

app.post('/user', (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.address){
        res.status(400).send("invalid data")
    }
    else{
        users.push({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address
        })

        res.send("Users Created");
    }

})

app.put('/user/:id',(req, res) =>{
    if(users[req.params.id]){
        if(req.body.name){
            users[req.params.id].name = req.body.name
        }
        if(req.body.email){
            users[req.params.id].email = req.body.email
        }
        if(req.body.address){
            users[req.params.id].email = req.body.address
        }
        res.send(users[req.params.id])
    }
    else{
        res.send("user not found");
    }
})

app.delete('/user/:id', (req, res) =>{

    if (users[req.params.id]){
        user[req.params.id] = {};
        res.send("User Deleted")
    }
    else{
        res.send("user not found")
    }
})

app.get('/home',(req, res)=>{
    res.send('Welcome to Sheri home')
})
app.get('/',(req, res)=>{
    res.send('Hello Iam Sheri Server')
})
app.listen(port, ()=>{
    console.log(`Example app listening at  http://localhost:${port}`);

})
