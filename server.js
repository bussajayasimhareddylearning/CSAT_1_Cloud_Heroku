var express = require('express')

var app = express()

const SERVER_PORT = 7777
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//http://localhost:7777/
app.get('/', function (req, res) {
    res.send("<h1>Home Page, Hello Jayasimha Reddy, Bussa</h1>")
})

//http://localhost:7777/profile
app.post('/profile', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

//http://localhost:7777/admin
app.get('/admin', (req, res) => {
  res.send('Admin Homepage')
})

//http://localhost:7777/user/100
app.get("/user/:id", (req, res)=> {
      res.send(`User ID: ${req.params.id}`);
    }
)
  
app.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})