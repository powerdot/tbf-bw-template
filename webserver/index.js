module.exports = ({ bot, db, database, components }) => {
    let express = require("express");
    let router = express.Router();
    let path = require("path");

    router.use(express.json());
    router.use(express.urlencoded({
        extended: true
    }));

    router.get('/ping', (req, res) => {
        return res.send('pong');
    });

    router.use(
        express.static(path.resolve(__dirname, './public'))
    );

    return router;
}
