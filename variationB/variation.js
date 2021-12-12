console.log('v2 code executing');
document.addEventListener("DOMContentLoaded", function() {
    tds = document.getElementsByClassName('woocommerce-grouped-product-list-item__label')
    for (i = 0; i < tds.length; i++) {
        accContainer = tds[i];
        accContainer.innerHTML = renderProduct(dataForAccordion.items[i], "card");
    }
});