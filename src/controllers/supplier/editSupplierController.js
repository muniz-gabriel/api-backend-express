import { update } from "../../models/supplierModel.js"

export const editSupplierController = async (req,res) => {
    const id = req.params.id
    const supplier = req.body

    const result = await update(+id, supplier)

    console.log('Foi feito um PUT em /produto')
    res.json({ 
        message: 'Supplier editado com sucesso!',
        supplier: result
    })
}