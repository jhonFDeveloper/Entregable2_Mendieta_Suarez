let productsCart = JSON.parse(localStorage.getItem("cart")) || [];


const renderProducts = () => {

  let container = document.querySelector(".contenedor-productos-carrito");
  let contenidoHTML = "";

  productsCart.forEach((producto) => {
    contenidoHTML += `
    <div class="producto">
     <div class="img-producto">
      <img src="${producto.imagen}" alt="${producto.nombre}">
     </div>
     <div class"info-producto">
       <h3>$${producto.precio}</h3>
       <h5>${producto.nombre}</h5>
       <button class="btn-eliminar" onclick="addProduct(${producto.id})">Quitar Producto</button>
     </div>
        </div>        
        `;
  });

  container.innerHTML = contenidoHTML;
};
renderProducts();