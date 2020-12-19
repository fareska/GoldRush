const express = require ('express')
const app = express()
const path = require ('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


const PORT = 3000
app.listen(PORT, function(){
    console.log(`Running server on port ${PORT}`)
})