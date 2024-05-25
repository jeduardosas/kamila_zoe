import { useState, useEffect } from "react"
import TypeWriter from "./TypeWriter"

const Header = () => {
  const [firstComplete,setFirstComplete] = useState(false);
  const text = 'Juntos comenzamos este viaje llamado'
  const text2 = `Para Siempre.`

  //este useEffect es para que se ejecute el segundo TypeWriter
  /* useEffect(()=>{
    const timer = setTimeout(()=>{
      setFirstComplete(true);
    },text.length * 120)
    return()=>clearTimeout(timer)
  },[]) */
  
  return (  

    
    <>
      <header className="header centrar">
          <div className="header-image">
            <img loading="lazy"  src='/img/kamila.png' alt="img_kamila" />
          </div>
      </header>
      
       {/*  <div className="frase">
          <TypeWriter text={text} speed={1}/>
          {firstComplete && <TypeWriter text={text2} speed={1} />}
          
        </div> */}

        <div className="frase">
          <p className="frase-text">Hay momentos en la vida que son</p>
          <p className="frase-text">especiales por si solos...</p>
          <p className="frase-text">Compartirlos con las personas que quieres</p>
          <p className="frase-text">los convierte en inolvidables.</p>
        </div>
      
      {/* <div  className='header-img centrar animate__animated animate__fadeInUp'>
      </div> */}
    </>
  )
}

export default Header