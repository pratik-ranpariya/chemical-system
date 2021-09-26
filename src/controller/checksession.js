exports.session = (req, res, next) => {
    if (typeof req.session.email != "undefined") {
        next()
    } else {
        return res.redirect("/admin");
    }
}