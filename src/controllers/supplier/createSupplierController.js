import { create } from '../../models/supplierModel.js'

export const createSupplierController = async (req, res) => {
    const supplier = req.body
    const result = await create(supplier)

    res.json({ 
        message: 'Supplier cadastrado com sucesso',
        supplier: result
    })
}