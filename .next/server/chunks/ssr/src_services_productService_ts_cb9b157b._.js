module.exports = {

"[project]/src/services/productService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "addProduct": ()=>addProduct,
    "fetchProducts": ()=>fetchProducts
});
async function fetchProducts() {
    const res = await fetch('/api/products');
    return res.json();
}
async function addProduct(product) {
    const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    return res.json();
}
}),

};

//# sourceMappingURL=src_services_productService_ts_cb9b157b._.js.map