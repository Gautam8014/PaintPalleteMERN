import React from 'react'
import "./About.css";
import { useContext } from 'react';
import { MyAuthContext } from '../Context/AuthContextProvide';
export default function About() {

  const { language, lang,setLang} = useContext(MyAuthContext);

  if(!lang){
    return(
      <div className="about-container">
      <div className="about-content">
        <h1>Acerca de nuestra galería de arte</h1>
        <p>
        ¡Bienvenidos a nuestra galería de arte! Nos apasiona el arte y estamos comprometidos con la promoción de artistas talentosos de todo el mundo.
        </p>
        <p>
        Establecida en el año 20XX, nuestra galería ha sido una plataforma para que artistas emergentes y establecidos expongan su trabajo.
        </p>
        <p>
        Nuestra misión es inspirar y conectar a entusiastas del arte, coleccionistas y artistas, fomentando una comunidad artística vibrante y diversa.
        </p>
      </div>
    </div>
    )
  }
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Our Art Gallery</h1>
        <p>
          Welcome to our art gallery! We are passionate about art and committed to promoting talented artists from around the world.
        </p>
        <p>
          Established in 20XX, our gallery has been a platform for both emerging and established artists to exhibit their work.
        </p>
        <p>
          Our mission is to inspire and connect art enthusiasts, collectors, and artists, fostering a vibrant and diverse art community.
        </p>
      </div>
    </div>
  )
}
