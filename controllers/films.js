const Film = require('../models/film');

module.exports = {
    create,
    index
};

async function index(req,res) {
    try {
        const films = await Film.find({})
        .sort('-createdAt').populate('addedBy');
        res.json({ films });
    } catch (error) {
        res.status(401).json({err: 'unauthorized'});
    }
}

async function create(req,res) {
    try {
        const film = await Film.create(req.body);
        res.json({ film });
    } catch (error) {
        res.status(401).json({err: 'unothorized'});
    }
}