import '../styles/datos-nombres-papas.css'
import DatosNombresPadrinos from './DatosNombresPadrinos'

const DatosNombresPapas = () => {
  return (
    <div className='datos-nombres-papas'>
      <div className='datos-nombres-papas_title'>
        <p>En compañia de mis padres</p>
      </div>
      <div className='datos-nombres-papas_cards'>
        <div className='datos-nombres-papas_card'>
          <p>Martín Mazón Flores</p>
          <p>María Luisa Salazar Villalobos</p>
        </div>
        {/* <div className='datos-nombres-papas_card'>
          <p> Isela Díaz</p>
          <p>Juan Carlos Chávez </p>
        </div> */}
      </div>
      <DatosNombresPadrinos />
      {/* <div className='datos-nombres-papas-footer'>
        <p></p>
      </div> */}

      {/* <div className='datos-img'>
        <img src="/img/flor13.png" alt="img_flor" />
      </div> */}
    </div> 
  )
}

export default DatosNombresPapas