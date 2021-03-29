import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Content from './components/content.js';
import Navbar from './components/navbar.js';
import './index.css';


const App = () => {
  //const course = 'Half Stack application development'
  //const part1 = 'Fundamentals of React'
  //const exercises1 = 10
  //const part2 = 'Using props to pass data'
  //const exercises2 = 7
  //const part3 = 'State of a component'
  //const exercises3 = 14
  const course = {

    name: 'Half Stack application development',
  //Creacion del Array
    parts : [
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]
  }

  //Parte 7: Accedemos ahora a las propiedades del objeto y array según se necesita.
  return (

    <div class="bg-gradient-to-r from-blue-200 via-white to-pink-200">
    <Navbar />
		<Header classname="header" course = {course.name} />
    {/* Ahora las propiedades de los componentes será el array parts */}
		<Content parts={course.parts} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
