import React from 'react';
import ReactDOM from 'react-dom'; 

//Definición de Constantes props
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

//Componente Content
const Content = (props) => {
    //Usamos map() para recorrer los valores del arreglo en parts
    return (
      <div>
			  {props.parts.map((curso) => 
        <Part part={curso.name} exercises={curso.exercises}/>
        )
        }
		  </div>
    )
  };

//Componente Part
  const Part = (props) => {
  return (
    <div >
     	<p>
				{props.part}: {props.exercises}
			</p>
    </div>
  )
};

export default Content;