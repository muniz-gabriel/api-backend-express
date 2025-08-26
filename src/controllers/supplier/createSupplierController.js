export const createSupplierController = (req, res) => {
    const dados = req.body
    console.log('Foi feito um POST em produto') 
    res.json({ 
        message: 'Supplier cadastrado com sucesso',
        supplier: dados
    })
}