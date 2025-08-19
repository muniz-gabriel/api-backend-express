import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    const dados = req.body
    console.log('Foi feito um POST em produto') 
    res.json({ 
        message: 'Produto cadastrado com sucesso',
        produto: dados
    })
})

// Lista todos os products
router.get('/', (req, res) => {
    res.json({ message: 'Produtos consultados com sucesso!' })
})

// Consulta um product específico
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: 'Produto com ID ${id} consultado com sucesso!' })
})

// Atualiza um product específico
router.put('/:id', (req,res) => {
    const id = req.params.id
    const dados = req.body
    console.log('Foi feito um PUT em /produto')
    res.json({ 
        message: 'Produto editado com sucesso!',
        produto: dados
    })
})

// Deleta um product específico
router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: 'Produto com ID ${id} deletado com sucesso!' })
})

export default router;