/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en",{
        style: "currency",
        currency: "USD",
    }).format(price);

    return newPrice;
};

//  web api
//conectarnos al server
window
.fetch(`${baseUrl}/api/avo`)

// procesar la respuesta y convertirla en json
.then((respuesta) => respuesta.json())
// JSON -> Data -> renderizar info browser
.then((responseJson) => {

    const todosLosItems = []
    
    responseJson.data.forEach(item => {

        //crear imagen
        const imagen = document.createElement('img');
        imagen.src = `${baseUrl}${item.image}`;
        imagen.className = "img";
        
        //crear titulo
        const title = document.createElement('h2');
        title.innerText = item.name;
        title.className = "title";

        //crear precio
        const price = document.createElement('div');
        price.textContent = formatPrice(item.price);
        price.className = "price";

        //Wrap price & title
        const priceAndTitle = document.createElement('div');
        priceAndTitle.append(title, price);

        //Wrap Img and priceAndTitle
        const container = document.createElement('div');
        container.append(imagen, priceAndTitle);
        container.className = "container";

        todosLosItems.push(container);     
    });
    appNode.append(...todosLosItems);
});