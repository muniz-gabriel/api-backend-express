export const logger = (req, res, next) => {
    // mostrar data com timezone de São Paulo
    console.log(`${req.method}  ${req.originalUrl}  
        ${new Date().toISOString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`);
    next();
}