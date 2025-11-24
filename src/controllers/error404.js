export const error404 = (req, res) => {
    res.status(404).json({
        message: 'Rota não encontrada! Verifique a URL e tente novamente.',
    }) 
}