import express from 'express';

const router = express.Router();

// Atualiza um product específico
router.put('/:id', (req,res) => {
    const id = req.params.id
    const dados = req.body
    console.log('Foi feito um PUT em /car')
    res.json({ 
        message: `Mitsubishi TR4 com ID ${id} alterado!`,
        marca: dados.marca,
        modelo: dados.modelo
    })
})

export default router;