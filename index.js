const express =require('express')
const path=require('path')
const exphbs=require('express-handlebars')
const app=express()

const hbs=exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/login', (req,res)=>{
    res.render('login')
})
app.get('/registration', (req,res)=>{
    res.render('registration')
})
app.get('/renting', (req,res)=>{
    res.render('renting')
})
app.get('/account', (req,res)=>{
    res.render('account')
})

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})