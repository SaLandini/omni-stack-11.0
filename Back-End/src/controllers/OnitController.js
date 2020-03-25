const connection = require('../database/connections');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const Onit = await connection('Onit').select('*');
    
        return response.json(Onit);
    },

    async create(request, response) {
    const { name, email, Zap, cidy, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('Onit').insert({
        id,
        name,
        email,
        Zap,
        cidy,
        uf
    })

    return response.json({ id })
    }
};