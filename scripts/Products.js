import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
   (productClickEvent) => {
        const productClicked = productClickEvent.target
        const clickedProductId = productClicked.dataset.id

        if(productClicked.dataset.type === "product"){
            for (const product of products) {
                if(parseInt(clickedProductId) === product.id){
                    let decimalfixed = product.price.toFixed(2)
                   window.alert(`${product.name} costs $${decimalfixed}`) 
                }
            }
        }
   }
)


export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `
        <li
        data-type="product"
        data-price="${product.price}"
        data-name="${product.name}"
        data-id="${product.id}">
        ${product.name}
        </li>`
    }

    html += "</ul>"

    return html
}

