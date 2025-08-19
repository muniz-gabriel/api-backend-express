import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    const dados = req.body
    console.log('Foi feito um POST em profile') 
    res.json({ 
        message: 'Usuário cadastrado com sucesso',
        profile: dados
    })
})

// Lista todos os profiles
router.get('/', (req, res) => {
    res.json({ message: 'Usuários consultados com sucesso!' })
})

// Consulta um profile específico
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: 'Usuário com ID ${id} consultado com sucesso!' })
})

// Atualiza um profile específico
router.put('/:id', (req,res) => {
    const id = req.params.id
    const dados = req.body
    console.log('Foi feito um PUT em /produto')
    res.json({ 
        message: 'Usuário editado com sucesso!',
        profile: dados
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: 'Usuário com ID ${id} deletado com sucesso!' })
})

export default router;