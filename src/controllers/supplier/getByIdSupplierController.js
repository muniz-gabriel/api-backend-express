export const getByIdSupplierController = (req, res) => {
    const id = req.params.id
    res.json({ message: `Supplier com ID ${id} consultado com sucesso!` })
}