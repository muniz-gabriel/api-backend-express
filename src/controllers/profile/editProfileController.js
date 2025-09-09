import { update } from '../../models/profileModel.js'

export const editProfileController = async (req,res) => {
    const id = req.params.id
    const profile = req.body

    const result = await update(+id, profile)

    console.log('Foi feito um PUT em /profile')
    res.json({ 
        message: 'Usuário editado com sucesso!',
        profile: result
    })
}