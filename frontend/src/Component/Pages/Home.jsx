import React from 'react'
import { useContext } from 'react';
import { MyAuthContext } from '../Context/AuthContextProvide';
export const HomePage = () => {

    const { language, lang,setLang} = useContext(MyAuthContext);


    const homeStyles = {
        textAlign: 'center',
        padding: '20px',
      };
    
      const headingStyles = {
        fontSize: '2rem',
        marginBottom: '10px',
      };
    
      const paragraphStyles = {
        fontSize: '1.2rem',
        marginBottom: '20px',
      };
    
      const buttonStyles = {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#0074d9',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
      };
    
      const buttonHoverStyles = {
        backgroundColor: '#0056b3',
      };

      if(!lang){
        return (
            <div style={homeStyles}>
              <h1 style={headingStyles}>Bienvenida a nuestra galería de arte</h1>
              <p style={paragraphStyles}>Explora y admira un mundo de creatividad e inspiración.</p>
              <button style={buttonStyles} >Explorar galería</button>
            </div>
          )

      }

    
  return (
    <div style={homeStyles}>
      <h1 style={headingStyles}>Welcome to Our Art Gallery</h1>
      <p style={paragraphStyles}>Explore and admire a world of creativity and inspiration.</p>
      <button style={buttonStyles} >Explore Gallery</button>
    </div>
  )
}
