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
        {/* <button class="inline-flex text-white bg-red-200 border-0 py-2 px-6 focus:outline-none hover:bg-red-300 rounded text-lg">
          Inicia Sesión
        </button> */}
      </div>
    </header>
                  
    )
  };

export default Navbar;