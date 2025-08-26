export const createProductController = (req, res) => {
    const dados = req.body
    console.log('Foi feito um POST em produto') 
    res.json({ 
        message: 'Produto cadastrado com sucesso',
        produto: dados
    })
}

