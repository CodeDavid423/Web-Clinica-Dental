

const Ubicacion = () => {
  return (

    < div className="location-info" >
      <h2>Redes Sociales</h2>
      <div className="social-links">
        <a href="https://facebook.com/tu_pagina_de_facebook" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/facebook.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com/tu_perfil_de_instagram" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/instagram.png" alt="Instagram" />
        </a>
      </div>
      <div className="map-container">
        <h2 className="section-title">Ubicación del Consultorio</h2>
        <p>123 Calle Principal, Piso 2, Ciudad, País</p>
        <iframe className='mapa'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.5275527629512!2d-78.48287079386093!3d-0.16225157698934595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b3fc1318c89%3A0xab68736bab01e488!2sOdontomed%20Cl%C3%ADnica%20Integral!5e0!3m2!1ses-419!2sec!4v1719431519506!5m2!1ses-419!2sec"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div >
  )
}

export default Ubicacion;