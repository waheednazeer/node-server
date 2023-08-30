
const buildHomePage = function (req, res){
    res.render("index", {title : "Home"});
};

module.exports = {buildHomePage};