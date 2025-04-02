 import React from 'react'
 import {Link} from "react-router-dom";
 import { HiOutlineArrowRight } from 'react-icons/hi';
 const About = () => {
   return (
     <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About us</h1>
                    <p>The only thing  we're about is food. </p>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam explicabo modi distinctio, nesciunt odio voluptatum dignissimos vel nihil ex, quibusdam dolores quo aut ea cupiditate unde consequatur incidunt natus consectetur ratione rerum? Sunt inventore numquam harum minima omnis fugit, accusantium, nostrum possimus, molestias ipsa ut voluptatum. Ipsum repudiandae cum laudantium?</p>
                <Link to={"/"} >Explore Menu
                <span>
                < HiOutlineArrowRight/>
                 </span>
                    </Link>
            </div>
            <div className="banner">
                <img src="about.png" alt="about"/>
            </div>
        </div>
       
     </section>
   )
 }
 
 export default About
 