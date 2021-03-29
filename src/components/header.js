import React from 'react';
import ReactDOM from 'react-dom';
 

const Header = (props) => {

    return (
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-cuerpo">Bienvenid@ a Meowy Shop!
      </h1>
      <p class="mb-8 leading-relaxed font-cuerpo">
                Compra los mejores accesiorios para tus mascotas y recíbelos en la puerta de tu casa
      </p>
      <div class="flex justify-center">
        <button class="text-white bg-red-200 border-0 py-2 px-6 focus:outline-none hover:bg-red-300 rounded text-lg font-cuerpo">Regístrate</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg font-cuerpo">Iniciar Sesión</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://www.nicepng.com/png/detail/332-3329966_the-woofin-paws-pet-fashion-show-starts-at.png"></img>
    </div>
  </div>
</section>
                  
    )
  };

export default Header;