import React from 'react';
import ReactDOM from 'react-dom';
 

const Productos = (props) => {

    return (
      <section class="text-gray-600 px-8  bg-white py-3 body-font font-cuerpo ">
        <div class="container px-5  mx-auto">
        <div class="flex flex-wrap ">
      <div class="flex flex-wrap w-full mb-20"></div>
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Nuestro Productos</h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        </div>
        </div>     
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
    {props.products.map((prod) =>  
      <ProductoUnico titulo={prod.titulo} precio={prod.precio} image={prod.image} />
     
    )
  }     
    </div>
  </div>

</section>

    )
  };

  const ProductoUnico = (props) => {
    return (
      <div class="lg:w-1/4 md:w-1/2 bg-gray-100 p-3 rounded w-full  px-4 py-6 m-0.4 mb-3 ">
      <a class="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={props.image}></img>
      </a>
      <div class="mt-4 bg-gray-100 p-3 rounded">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">PERRO-GATO</h3>
        <h2 class="text-gray-900 title-font text-lg font-medium font-semibold">{props.titulo}</h2>
        <p class="mt-1">{props.precio}</p>
        <button type="button" class="py-2 px-4 my-2  bg-gradient-to-r from-purple-300 to-blue-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
           Comprar
        </button>

      </div>
    </div>
      )
    };

export default Productos;