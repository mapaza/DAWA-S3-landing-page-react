import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Navbar from './components/navbar.js';
import Articulos from './components/articulos.js';
import Productos from './components/productos.js';
import Testimonios from './components/testimonios.js';
import Footer from './components/footer.js';
import './index.css';


const App = () => {
  //const course = 'Half Stack application development'
  //const part1 = 'Fundamentals of React'
  //const exercises1 = 10
  //const part2 = 'Using props to pass data'
  //const exercises2 = 7
  //const part3 = 'State of a component'
  //const exercises3 = 14
  const page = {

    name: 'Meowy Shop',
    secciones:[
      'Inicio','Artículo','Productos','Contacto'
    ],
  //Creacion del Array
    header : 
    {
    titulo: 'Bienvenid@ a Meowy Shop!',
    texto: 'Compra los mejores accesiorios para tus mascotas y recíbelos en la puerta de tu casa'
    },
    articulos : 
    {
    titulo: 'Conoce más acerca de tus mascotas',
    texto: 'Cada dia puedes aprender más sobre tus mascotas, conoce que es lo que te quiere decir y que es lo mejor que puedes hacer por ella'}
  }
 const arts = [
  {
    titulo: 'Lo último en comederos para gatos: encuentra el perfecto para tu felino',
    texto: 'Existen distintos tipos de comedero para gatos, y debes conocer cuáles y cómo son para poder elegir el más adecuado para tu minino. ¡Sigue leyendo y entérate de todo lo necesario para darle lo mejor a tu peludo!',
    image: 'https://www.fanaticosdelasmascotas.cl/wp-content/uploads/2021/02/comedero-gatos-birgl-pixabay-portada.jpg'
  },
  {
    titulo: '6 ideas para regalar a tu perro en Navidad',
    texto: 'Más que los renos, tú sabes que el animal más importante en esta Navidad es tu perro, por eso te proponemos algunas sugerencias para darle el regalo que se merece.',
    image: 'https://www.fanaticosdelasmascotas.cl/wp-content/uploads/2019/12/perros_ideas_regalos_navidad_minnie-zhou-unsplash_portada.jpg'
  },
  {
    titulo: 'Consejos y cuidados para mascotas en Año Nuevo',
    texto: 'Durante las fiestas de fin de año a nuestros amigos peludos les cuesta pasarlo tan bien como a los humanos: ellos tienen una sensibilidad auditiva mucho más alta, hay más gente en la casa, cambian las rutinas, y más encima nos ven a nosotros agitados y nerviosos. Mira estos tips para lograr que esté tranquilo y feliz.',
    image: 'https://www.fanaticosdelasmascotas.cl/wp-content/uploads/2020/12/mascotas_cuidados_consejos_ano_nuevo_jelly-kim-pixabay-portada.jpg'
  },
  /* {
    titulo: 'Shiba Inu: esponjosa ternura oriental',
    texto: 'Alegres y cariñosos, de pelo esponjoso, mirada oriental y similares a un zorro. Te invitamos a conocer más del Shiba Inu, el perro más pequeño y antiguo de Japón.',
    image: 'https://www.fanaticosdelasmascotas.cl/wp-content/uploads/2021/02/perro_shiba_inu_anna_shvets_pexels_portada.jpg'
  } */

]
const products= [
  {
    titulo: 'Cat Collar- Watermelon -Talla Única',
    precio: 'S/15.90',
    image: 'https://cdn.shopify.com/s/files/1/0244/4866/3632/products/PROFU-COLCAT1_720x.jpg?v=1580424777'
  },
  {
    titulo: 'Cama Zoomba Hundebett (Animal Print)',
    precio: 'S/49.90',
    image: 'https://cdn.shopify.com/s/files/1/0244/4866/3632/products/PCZ-06303_1.jpg?v=1571346194'
  },
  {
    titulo: 'Smartpet Camiseta Perú  Talla 3 - 4 -5',
    precio: 'S/19.90',
    image: 'https://cdn.shopify.com/s/files/1/0244/4866/3632/products/Group4_360x.jpg?v=1602791323'
  },
  {
    titulo: 'SmartPet -Dispensador para agua y comedero ',
    precio: 'S/49.90',
    image: 'https://cdn.shopify.com/s/files/1/0244/4866/3632/products/GSP-558514_360x.jpg?v=1597181897'
  },
  {
    titulo: 'CoshuPet Casaca Negro/Plomo',
    precio: 'S/29.90',
    image: 'https://cdn.shopify.com/s/files/1/0244/4866/3632/products/002.jpg?v=1601183155'
  },
  {
    titulo: 'Smartpet Cama Meow Talla Única-Turqueza',
    precio: 'S/69.90',
    image: 'https://cdn.shopify.com/s/files/1/0244/4866/3632/products/GSP-CATTU_360x.jpg?v=1573254493'
  },
  {
    titulo: 'SmartPet Cama Cubo 2 en1 Coral - Talla Small',
    precio: 'S/89.90',
    image: 'https://cdn.shopify.com/s/files/1/0244/4866/3632/products/PSP-COSM_360x.jpg?v=1573762955'
  },
  {
    titulo: 'Cabaña para Gato 2 Pisos # 2',
    precio: 'S/129.90',
    image: 'https://cdn.shopify.com/s/files/1/0244/4866/3632/products/cabana-para-gato-2-piso-talla-2_360x.jpg?v=1567807194'
  },
  
  
  
]
const testimonios= [
  {
    nombre: 'Marine Lu',
    texto: 'El producto llego en buen estado, estoy satisfecha con la compra',
    image: 'https://www.tailwind-kit.com/images/person/4.jpg'
  },
  {
    nombre: 'Norman Tuck',
    texto: 'El producto llego en buen estado, estoy satisfecha con la compra',
    image: 'https://www.tailwind-kit.com/images/person/8.jpg'
  },{
    nombre: 'Jean',
    texto: 'El producto llego en buen estado, estoy satisfecha con la compra',
    image: 'https://www.tailwind-kit.com/images/person/6.jpg'
  },{
    nombre: 'Yves P',
    texto: 'El producto llego en buen estado, estoy satisfecha con la compra',
    image: 'https://www.tailwind-kit.com/images/person/9.jpg'
  },{
    nombre: 'Isaac Tou',
    texto: 'El producto llego en buen estado, estoy satisfecha con la compra',
    image: 'https://www.tailwind-kit.com/images/person/5.jpg'
  },{
    nombre: 'Serena Ki',
    texto: 'El producto llego en buen estado, estoy satisfecha con la compra',
    image: 'https://www.tailwind-kit.com/images/person/7.jpg'
  }
]

  //Parte 7: Accedemos ahora a las propiedades del objeto y array según se necesita.
  return (

    <div class="bg-gradient-to-r from-gray-100 via-white to-gray-200">
    <Navbar nombre = {page.name} secciones={page.secciones}/>
		<Header  header = {page.header} />
    <Articulos articulos = {page.articulos} arts = {arts} />
    <Productos products = {products}/>
    <Testimonios testimonios = {testimonios}/>
    <Footer/>
    {/* Ahora las propiedades de los componentes será el array parts */}
		{/* <Content parts={course.parts} /> */}
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
