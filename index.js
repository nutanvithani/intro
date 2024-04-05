const uimaker = (item) => {

    document.getElementById("box").innerHTML = "";

    item.map((ele,i) => {


        let title = document.createElement("h2")
        title.innerHTML = ele.title

        let description = document.createElement("p")
        description.innerHTML = ele.description

        let price = document.createElement("p")
        price.innerHTML = ele.price
        
        let discountPercentage = document.createElement("p")
        discountPercentage.innerHTML = ele.discountPercentage

        let rating = document.createElement("p")
        rating.innerHTML = ele.rating

        let stock = document.createElement("p")
        stock.innerHTML = ele.stock

        let brand = document.createElement("p")
        brand.innerHTML = ele.brand
        let category = document.createElement("p")
        category.innerHTML = ele.category
        let images = document.createElement("img")
        images.src = ele.images[0];    
        let div = document.createElement("div")
        div.append(images, title,description, price,discountPercentage,rating,stock,brand, category)
         div.setAttribute("class", "item");
       document.getElementById("box").append(div)

    })
    
}

fetch("https://dummyjson.com/products")
.then(res=>res.json())
.then((item=>uimaker(item.products)))