export const editProductController = (req,res) => {
    const id = req.params.id
    const dados = req.body
    console.log('Foi feito um PUT em /produto')
    res.json({ 
        message: 'Produto editado com sucesso!',
        produto: dados
    })
}