import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.post('/profile', (req, res) => {
    const dados = req.body
    console.log('Foi feito um POST em profile') 
    res.json({ 
        message: 'Usuário cadastrado com sucesso',
        profile: dados
    })
})

app.get('/profile', (req, res) => {
    console.log('Foi feito um GET em /produto')
    res.json({ message: 'Lista de produtos' })
})

app.put('/profile', (req,res) => {
    const dados = req.body
    console.log('Foi feito um PUT em /produto')
    res.json({ 
        message: 'Usuário editado com sucesso!',
        profile: dados
    })
})

app.delete('/profile', (req, res) => {
    console.log('Foi feito um DELETE em /produto')
    res.json({ message: 'Usuário deletado com sucesso!' })
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})