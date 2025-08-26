export const editProfileController = (req,res) => {
    const id = req.params.id
    const dados = req.body
    console.log('Foi feito um PUT em /produto')
    res.json({ 
        message: 'Usuário editado com sucesso!',
        profile: dados
    })
}