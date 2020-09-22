const products = []

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
        pageTitle: "Add Products",
        path: "/admin/add-product"
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
    res.render("shop/product-list", {
        pageTitle: "Shop",
        prods: products,
        path: "/"
    });
}