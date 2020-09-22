const products = []

exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
        pageTitle: "Add Products"
    })
}

exports.postAddProduct = (req, res, next) => {
    products.push({
        title: req.body.title,
    });
    console.log(products);
    res.redirect("/");
}
exports.getProducts = (req, res, next) => {
    res.render("shop", {
        pageTitle: "Shop",
        prods: products,
    });
}