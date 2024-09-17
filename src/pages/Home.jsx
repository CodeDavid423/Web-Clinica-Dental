
import { Link } from 'react-router-dom';
import Header from '../Componentes/Header';
import Ubicacion from '../Componentes/ubicacion';
import Botonflotante from '../Componentes/Botonflotante';

const Home = () => {




    return (
        <div className="home-container">
            <Header />

            <main>
                <section className="hero">
                    <h1>Bienvenido a Odontomed Clinica Integral</h1>
                    <p>Brindamos servicios dentales de alta calidad para toda la familia.</p>
                    <Link to="/contacto" className="btn">Agendar Cita</Link>
                </section>

                <section className="section services">
                    <a href="/servicios/"><h2 className="section-title">Nuestros Servicios</h2></a>
                    <div className="service-items">
                        <div className="service-item">
                            <img src="/src/assets/odontoGen.jpg" alt="Odontología General" />
                            <h3>Odontología General</h3>
                            <p>Cuidamos tu salud bucal con tratamientos integrales y personalizados. Mantenemos tus dientes sanos y tu sonrisa radiante.</p>
                        </div>
                        <div className="service-item">
                            <img src="/src/assets/rehabilitacion oral.png" alt="Rehabilitación Oral" />
                            <h3>Rehabilitación Oral</h3>
                            <p>Recupera la funcionalidad y estética de tu sonrisa con nuestros servicios de rehabilitación oral.</p>
                        </div>
                        <div className="service-item">
                            <img src="/src/assets/ortodoncia.jpg" alt="Ortodoncia" />
                            <h3>Ortodoncia</h3>
                            <p>Alinea tus dientes y mejora tu sonrisa con nuestros servicios de ortodoncia.</p>
                        </div>
                        <div className="service-item">
                            <img src="/src/assets/cirugia dental.jpg" alt="Cirugía" />
                            <h3>Cirugía</h3>
                            <p>Resolvemos problemas complejos de la boca y los maxilares con nuestros servicios de cirugía oral.</p>
                        </div>
                        <div className="service-item">
                            <img src="/src/assets/endodoncia.jpg" alt="Endodoncia" />
                            <h3>Endodoncia</h3>
                            <p>Salvamos tus dientes con nuestros tratamientos de endodoncia de alta calidad.</p>
                        </div>
                        <div className="service-item">
                            <img src="/src/assets/periodoncia.jpg" alt="Periodoncia" />
                            <h3>Periodoncia</h3>
                            <p>Mantenemos la salud de tus encías y huesos con nuestros servicios de periodoncia.</p>
                        </div>
                        <div className="service-item">
                            <img src="/src/assets/odontopediatria.jpg" alt="Odontopediatría" />
                            <h3>Odontopediatría</h3>
                            <p>Cuidamos la salud dental de tus hijos con un enfoque lúdico y adaptado a su edad.</p>
                        </div>
                    </div>
                </section>

                <section className="section news">
                    <h2 className="section-title">Noticias</h2>
                    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                        <h2 >¡ÚNETE A NUESTRO EQUIPO!</h2>
                        <p>¿Eres un profesional de la salud buscando un consultorio moderno y bien equipado? ¡Tenemos el lugar perfecto para ti!</p>
                        <p >Ofrecemos:</p>
                        <ul>
                            <li>Consultorios equipados</li>
                            <li>Ambiente profesional</li>
                            <li>Flexibilidad y apoyo administrativo</li>
                        </ul>
                        <button onClick={() => window.location.href = '/trabaja-con-nosotros'}>Más Información</button>
                    </div>
                </section>

                <section className="section team">
                    <h2 className="section-title">Nuestro Equipo</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src="/doctor1.jpg" alt="Doctor 1" />
                            <h3 className="member-name">Dr. Nombre Apellido</h3>
                            <p className="member-specialty">Especialista en Ortodoncia</p>
                        </div>
                    </div>
                </section>

                <section className="section location">
                    <Ubicacion />

                </section>

            </main>

            <footer>
                <p>&copy; 2024 Odontomed Clinica Integral. Todos los derechos reservados.</p>
            </footer>

            <Botonflotante />
        </div>
    );

}

export default Home;

// Function to measure the load time
function measureLoadTime() {
    // Get the start time
    const startTime = performance.now();

    // Wait for the DOM content to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        // Get the end time
        const endTime = performance.now();

        // Calculate the load time in milliseconds
        const loadTime = endTime - startTime;

        // Log the load time in the console
        console.log(`The webpage loaded in ${loadTime.toFixed(2)} milliseconds.`);
    });
}

// Call the function to measure the load time
measureLoadTime();