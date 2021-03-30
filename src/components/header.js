import React from 'react';
import ReactDOM from 'react-dom';
 

const Header = (props) => {

    return (
      <div class="w-full bg-cover bg-center" style={{height:'25rem',backgroundImage:"url('https://i.pinimg.com/originals/65/4e/3b/654e3b1d74d21065eb0cff7c893d4caf.jpg')"}}>
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-10">
            <div class="text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-400 font-title">{props.header.titulo}</h1>
                <h1 class="text-white text-2xl font-cuerpo md:text-xl mb-8 mx-8">
                {props.header.texto}
                </h1> 
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 mt-10 focus:outline-none hover:bg-gray-200 rounded text-lg font-cuerpo  mt-4 md:mt-0">
                    Ver Productos
                  </button>

            </div>
        </div>
    </div>


                  
    )
  };

export default Header;