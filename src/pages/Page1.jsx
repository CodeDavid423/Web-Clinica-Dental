import { Link } from "react-router-dom";
import Header from "../Componentes/Header";
import Ubicacion from "../Componentes/ubicacion";
import Botonflotante from "../Componentes/Botonflotante";

const Home = () => {

    return (
        <div className="home-container">
            <header className="headernav">
                <Header />
            </header>

            <main>
                <section className="hero">
                    <h1>Bienvenido a Odontomed Clinica Integral</h1>
                    <p>Brindamos servicios dentales de alta calidad para toda la familia.</p>
                    <Link to="/contacto" className="btn">Agendar Cita</Link>
                </section>

                <section className="section services">
                    <h2 className="section-title">Nuestros Servicios</h2>
                    <div className="service-items">
                        <div className="service-item">
                            <img src="/src/assets/odontoGen.jpg" alt="Odontología General" />
                            <h3>Odontología General</h3>
                            <ul>
                                <li>Cuidado integral de la salud bucal</li>
                                <li>Tratamientos personalizados para mantener dientes y encías sanos</li>
                                <li>Equipo de profesionales altamente capacitados</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <img src="/src/assets/rehabilitacion oral.png" alt="Rehabilitación Oral" />
                            <h3>Rehabilitación Oral</h3>
                            <ul>
                                <li>Recuperación de la funcionalidad y estética de la sonrisa</li>
                                <li>Amplia gama de tratamientos: implantes, puentes, coronas, prótesis</li>
                                <li>Plan de tratamiento personalizado</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <img src="/src/assets/ortodoncia.jpg" alt="Ortodoncia" />
                            <h3>Ortodoncia</h3>
                            <ul>
                                <li>Alineación y posicionamiento correcto de los dientes</li>
                                <li>Variedad de opciones de tratamiento: brackets, alineadores invisibles</li>
                                <li>Diseño de plan personalizado para una sonrisa estética y funcional</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <img src="/src/assets/cirugia dental.jpg" alt="Cirugía" />
                            <h3>Cirugía</h3>
                            <ul>
                                <li>Tratamiento de problemas complejos de boca y maxilares</li>
                                <li>Procedimientos como extracciones, cirugías maxilofaciales, reconstrucción</li>
                                <li>Técnicas avanzadas y mínimamente invasivas</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <img src="/src/assets/endodoncia.jpg" alt="Endodoncia" />
                            <h3>Endodoncia</h3>
                            <ul>
                                <li>Tratamiento de infecciones o inflamación de la pulpa dental</li>
                                <li>Objetivo: salvar el diente natural</li>
                                <li>Experiencia cómoda y tranquila para el paciente</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <img src="/src/assets/periodoncia.jpg" alt="Periodoncia" />
                            <h3>Periodoncia</h3>
                            <ul>
                                <li>Tratamiento y prevención de enfermedades de encías y tejidos de soporte</li>
                                <li>Procedimientos como raspado, cirugía periodontal, terapia de mantenimiento</li>
                                <li>Objetivo: mantener una salud bucal óptima</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <img src="/src/assets/odontopediatria.jpg" alt="Odontopediatría" />
                            <h3>Odontopediatría</h3>
                            <ul>
                                <li>Cuidado dental especializado para niños</li>
                                <li>Enfoque lúdico y adaptado a la edad del paciente</li>
                                <li>Colaboración con los padres para promover buenos hábitos de higiene</li>
                            </ul>
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
