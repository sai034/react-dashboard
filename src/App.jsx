import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import { set } from 'lodash';


const Home = () => (
  <h1 className='ml-6'>Home</h1>
)
const About = () => (
  <h1 className='ml-6'>About</h1>
)
const Services = () => (
  <h1 className='ml-6'>Services</h1>
)
const Products = () => (
  <h1 className='ml-6'>Products</h1>
)
const Product1 = () => (
  <h1 className='ml-6'>Product 1</h1>
)
const Product2 = () => (
  <h1 className='ml-6'>Product 2</h1>
)
const Product3 = () => (
  <h1 className='ml-6'>Product 3</h1>
)
const Product4 = () => (
  <h1 className='ml-6'>Product 4</h1>
)
const Contact = () => (
  <h1 className='ml-6'>Contact</h1>
)
const Contact1 = () => (
  <h1 className='ml-6'>Contact 1</h1>
)
const Contact2 = () => (
  <h1 className='ml-6'>Contact 2</h1>
)
const Career = () => (
  <h1 className='ml-6'>Career</h1>
)
const Career1 = () => (
  <h1 className='ml-6'>Career 1</h1>
)
const Career2 = () => (
  <h1 className='ml-6'>Career 2</h1>
)
function App() {
  const [ activeComponent, setActiveComponent ] = useState("")

  const onHomeClick = () => {
    setActiveComponent("HOME")
  }
  const onAboutClick = () => {
    setActiveComponent("ABOUT")
  }
  const onServicesClick = () => {
    setActiveComponent("SERVICES")
  }
  const onProductsClick = () => {
    setActiveComponent("PRODUCTS")
  }
  const onProduct1Click = () => {
    setActiveComponent("PRODUCTS1")
  }
  const onProduct2Click = () => {
    setActiveComponent("PRODUCTS2")
  }
  const onProduct3Click = () => {
    setActiveComponent("PRODUCTS3")
  }
  const onProduct4Click = () => {
    setActiveComponent("PRODUCTS4")
  }
  const onContactClick = () => {
    setActiveComponent("CONTACT")
  }
  const onContact1Click = () => {
    setActiveComponent("CONTACT1")
  }
  const onContact2Click = () => {
    setActiveComponent("CONTACT2")
  }
  const onCareerClick = () => {
    setActiveComponent("CAREER")
  }
  const onCareer1Click = () => {
    setActiveComponent("CAREER1")
  }
  const onCareer2Click = () => {
    setActiveComponent("CAREER2")
  }
  return (
  <div>
     <div className="bg-black w-[90%] flex justify-between items-center flex-row">
 
      <ul className=" mx-auto flex justify-center items-center space-x-20 items-center ">
         
         <li className='text-white'>Dashboard</li>
         
    
        </ul>
        <div><button className=" mr-10  mt-10 w-36 h-12 text-white left-2 "></button></div>
        </div>
      <div style={{display: "flex", flexDirection: "row" }}>  
      <Sidebar
        onHomeClick = {onHomeClick}
        onAboutClick = {onAboutClick}
        onServicesClick = {onServicesClick} 
        onProductsClick = {onProductsClick} 
        onProduct1Click = {onProduct1Click} 
        onProduct2Click = {onProduct2Click} 
        onProduct3Click = {onProduct3Click} 
        onProduct4Click = {onProduct4Click} 
        onContactClick = {onContactClick} 
        onContact1Click = {onContact1Click} 
        onContact2Click = {onContact2Click} 
        onCareerClick = {onCareerClick}
        onCareer1Click = {onCareer1Click}
        onCareer2Click = {onCareer2Click} 
      />
      {activeComponent === "HOME" && <Home />}
      {activeComponent === "ABOUT" && <About />}
      {activeComponent === "SERVICES" && <Services />}
      {activeComponent === "PRODUCTS" && <Products />}
      {activeComponent === "PRODUCTS1" && <Product1 />}
      {activeComponent === "PRODUCTS2" && <Product2 />}
      {activeComponent === "PRODUCTS3" && <Product3 />}
      {activeComponent === "PRODUCTS4" && <Product4 />}
      {activeComponent === "CONTACT" && <Contact />}
      {activeComponent === "CONTACT1" && <Contact1 />}
      {activeComponent === "CONTACT2" && <Contact2 />}
      {activeComponent === "CAREER" && <Career />}
      {activeComponent === "CAREER1" && <Career1 />}
      {activeComponent === "CAREER2" && <Career2 />}
      </div>
    </div>
  );
};
export default App;