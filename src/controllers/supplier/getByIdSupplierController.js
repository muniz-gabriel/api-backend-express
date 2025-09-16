import { getById } from '../../models/supplierModel.js'

export const getByIdSupplierController = async (req, res) => {
    const id = req.params.id

    const result = await getById(+id)

    res.json({ message: `Supplier com ID ${id} consultado com sucesso!`,
    supplier: result
    })
}