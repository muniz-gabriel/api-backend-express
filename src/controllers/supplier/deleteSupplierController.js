import { remove } from '../../models/supplierModel.js'

export const deleteSupplierController = async (req, res) => {
    const id = req.params.id

    const result = await remove(+id)

    res.json({ message: `Supplier com ID ${id} deletado com sucesso!`,
        supplier: result
    })
}