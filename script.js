function addProduct() {
    const productName = document.getElementById("product-name").value;
    const productPrice = document.getElementById("product-price").value;

    if (productName && productPrice) {
        const productList = document.querySelector(".product-list");
        const newProduct = document.createElement("li");
        newProduct.className = "product";

        const productImage = document.createElement("img");
        productImage.className = "product-image"; // Add the class to the image
        productImage.src = "https://www.independenttradingco.com/cdn/shop/products/IND5000P-ALPG_2048x.jpg?v=1640025923"; 
        productImage.alt = productName;

        const productTitle = document.createElement("h3");
        productTitle.textContent = productName;

        const productPriceElement = document.createElement("p");
        productPriceElement.textContent = "Price: $" + productPrice;

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Delete";
        addToCartButton.onclick = function () {
            productList.removeChild(newProduct);
            removeItemFromList(productName);
                };
        
        newProduct.appendChild(productImage);
        newProduct.appendChild(productTitle);
        newProduct.appendChild(productPriceElement);
        newProduct.appendChild(addToCartButton);

        productList.appendChild(newProduct);
        document.getElementById("product-form").reset();
        }
}
function saveProductToLocalStorage(name, price) {
    const products = JSON.parse(localStorage.getItem("products")) || [];

    products.push({ name, price });

    localStorage.setItem("products", JSON.stringify(products));
}

function removeItemFromList(productName) {
    const buylist = JSON.parse(localStorage.getItem("products")) || [];

    const index = buylist.findIndex(item => item.name === productName);

    if (index !== -1) {
        buylist.splice(index, 1);

        localStorage.setItem("prodict", JSON.stringify(buylist));
        alert(`"${productName}" has been removed from the list.`);
    }
}

function addToBuylist(productName, productPrice) {
    const buylist = JSON.parse(localStorage.getItem("buylist")) || [];

    buylist.push({ name: productName, price: productPrice });

    localStorage.setItem("buylist", JSON.stringify(buylist));
    alert(`"${productName}" has been added to the Buylist.`);
}

document.getElementById("show-buylist-button").addEventListener("click", showBuylist);

function showBuylist() {
    const buylist = JSON.parse(localStorage.getItem("buylist")) || [];
    const buylistContainer = document.getElementById("buylist-container"); 

    if (buylist.length === 0) {
        buylistContainer.innerHTML = "<p>Your Buylist is empty.</p>";
    } else {
        buylistContainer.innerHTML = "<h3>Buylist:</h3>";
        const ul = document.createElement("ul");

        buylist.forEach(product => {
            const li = document.createElement("li");
            li.textContent = `${product.name} - $${product.price}`;
            ul.appendChild(li);
        });

        buylistContainer.appendChild(ul);
    }
}
