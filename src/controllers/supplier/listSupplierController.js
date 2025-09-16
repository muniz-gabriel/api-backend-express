import { list } from '../../models/supplierModel.js'

export const listSupplierController = async (req, res) => {

    const result = await list()

    res.json({ 
        message: 'Suppliers consultados com sucesso!',
        suppliers: result
    })
}