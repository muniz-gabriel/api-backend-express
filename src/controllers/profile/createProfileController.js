export const createProfileController = (req, res) => {
    const dados = req.body
    console.log('Foi feito um POST em profile') 
    res.json({ 
        message: 'Usuário cadastrado com sucesso',
        profile: dados
    })
}