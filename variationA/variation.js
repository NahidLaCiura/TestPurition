console.log('v1 code executing');

document.addEventListener("DOMContentLoaded", function() {

    tds = document.getElementsByClassName('woocommerce-grouped-product-list-item__label');

    for (i = 0; i < tds.length; i++) {
        accContainer = tds[i];
        accContainer.innerHTML = renderProduct(dataForAccordion.items[i], "accordion");
        // accContainer.setAttribute("class", "accContainer")
        acc = accContainer.children[0]
        acc.addEventListener("click", function(event) {
            event.preventDefault()
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});