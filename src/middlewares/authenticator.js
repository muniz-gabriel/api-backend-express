import jwt from 'jsonwebtoken'

export const authenticator = (req, res, next) => {
    const authHeader = req.headers['authorizator']
    if (!authHeader) {
        return res.status(401).json({ message: 'Acesso negado!'})
    }
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Acesso negado!'})
    }
    try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.userLogged = payload;
    } catch (err) {
        console.error('Erro na autenticação do token:', err);
        return res.status(401).json({ message: 'Acesso negado!'})
    }
    next()
}