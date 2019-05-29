const express =  require('express');
const bodyparser = require('body-parser')
const app = express()


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

require('./Controllers/AuthController')(app)

app.listen(3000,()=>{
    console.log('Escutando porta ');
    
})
