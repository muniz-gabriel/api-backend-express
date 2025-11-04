import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getByEmail } from '../../models/profileModel.js';


export const loginController = async (req, res) => {
    // receber o email e a senha
    const { email, password } = req.body;

    // comparar se o email e a senha batem com o que está no banco de dados
    const user = await getByEmail(email)
    if(!user) {
        return res.status(401).json({ message: 'Email ou Senha Inválido' });
    }

    const passOk = await bycrypt.compare(pass, user.pass);
    if(!passOk) {
        return res.status(401).json({ message: 'Email ou Senha Inválido' });
    }

    // se  bater, gerar um token (JWT)
    const token = await jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, { expiresIn: '1d' });


    // enviar o token para o cliente
    if (!token) {
        return res.status(200).json({ message: "Erro ao gerar o token" });
    }

    return res.status(200).json({
        profile: {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
        },
    });

    return
}