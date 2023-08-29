const products = [
    {
      "title": "Fishing Rod",
      "image": "rod.jpg",
      "description": "A high-quality fishing rod for all your angling adventures.",
      "price": "$99.99"
    },
    {
      "title": "Tackle Box",
      "image": "tackle-box.jpg",
      "description": "A spacious tackle box to keep your fishing gear organized.",
      "price": "$39.99"
    },

  ]
  

  function createProductItem(product) {
    const productItem = document.createElement("div");
    productItem.className = "product-item";
  
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
  
    const title = document.createElement("div");
    title.className = "product-title";
    title.textContent = product.title;
  
    const description = document.createElement("div");
    description.className = "product-description";
    description.textContent = product.description;
  
    const price = document.createElement("div");
    price.className = "product-price";
    price.textContent = product.price;
  
    productItem.appendChild(image);
    productItem.appendChild(title);
    productItem.appendChild(description);
    productItem.appendChild(price);
  
    return productItem;
  }

  function populateProductList() {
    const productList = document.getElementById("productList");
  
    products.forEach(product => {
      const productItem = createProductItem(product);
      productList.appendChild(productItem);
    });
  }
  

  window.onload = populateProductList;
  
  
