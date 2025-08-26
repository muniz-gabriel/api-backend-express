export const editSupplierController = (req,res) => {
    const id = req.params.id
    const dados = req.body
    console.log('Foi feito um PUT em /produto')
    res.json({ 
        message: 'Supplier editado com sucesso!',
        supplier: dados
    })
}