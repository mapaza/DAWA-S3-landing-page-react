import React from 'react';
import ReactDOM from 'react-dom';
 

const Navbar = (props) => {

    return (
      <header class="text-gray-600 body-font ">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-gradient-to-r from-gray-100 via-white to-gray-100">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
          <img src="https://www.pngkit.com/png/full/24-240954_paw-logo-quiz-cat.png" class="w-12 h-12 text-white p-2 bg-gray-200 rounded-full" viewBox="0 0 24 24"/>
          <span class="ml-3 text-4xl font-abril">Meowy Shop</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center font-cuerpo">
          <a class="mr-5 hover:text-blue-400">Inicio</a>
          <a class="mr-5 hover:text-blue-400">Cuidados</a>
          <a class="mr-5 hover:text-blue-400">Productos</a>
          <a class="mr-5 hover:text-blue-400">Contacto</a>
        </nav>
        <div class="flex justify-center">
        <button class="text-white bg-red-200 border-0 py-2 px-6 focus:outline-none hover:bg-red-300 rounded text-lg font-cuerpo  mt-4 md:mt-0">Regístrate</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg font-cuerpo  mt-4 md:mt-0">Iniciar Sesión</button>
      </div>
        {/* <button class="inline-flex text-white bg-red-200 border-0 py-2 px-6 focus:outline-none hover:bg-red-300 rounded text-lg">
          Inicia Sesión
        </button> */}
      </div>
    </header>
                  
    )
  };

export default Navbar;