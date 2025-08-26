export const deleteSupplierController = (req, res) => {
    const id = req.params.id
    res.json({ message: `Supplier com ID ${id} deletado com sucesso!` })
}