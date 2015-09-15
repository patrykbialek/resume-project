module.exports = function(app) {
    var api = '/api/';
    var data = '/../data/';
    var jsonfileservice = require('../utils/jsonfileservice')();
    var four0four = require('../utils/404')();

    app.get(api + 'public', getPublic);

    app.get(api + '*', four0four.notFoundMiddleware);

    function getPublic(req, res, next) {
        var msg = 'public not found. ';
        try {
            var json = jsonfileservice.getJsonFromFile(data + 'public.json');
            if (json) {
                res.send(json);
            } else {
                four0four.send404(req, req, msg);
            }
        }
        catch (ex) {
            four0four.send404(req, res, msg + ex.message);
        }
    }
};
