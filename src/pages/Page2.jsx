import { Link } from "react-router-dom";
import Header from "../Componentes/Header";
import Botonflotante from "../Componentes/Botonflotante";
import Ubicacion from "../Componentes/ubicacion";

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

        <section className="section-job">
          <div >
            <h1 >¡ÚNETE A NUESTRO EQUIPO DE PROFESIONALES DE LA SALUD!</h1>
            <p>¿Eres un profesional de la salud en busca de un ambiente de trabajo moderno y bien equipado? ¡Te estamos buscando!</p>

            <h2 >Sobre Nosotros</h2>
            <p>
              En <strong>ODONTOMED</strong>, nos dedicamos a brindar la mejor atención médica con tecnología de vanguardia y un enfoque centrado en el paciente.
              Nuestra clínica, ubicada en el norte de <strong>Quito</strong>, cuenta con un equipo de expertos comprometidos con la excelencia y el cuidado integral.
            </p>

            <h2 >Lo que Ofrecemos</h2>
            <ul>
              <li><strong>Consultorios Equipados:</strong> Espacios modernos y completamente equipados con la última tecnología.</li>
              <li><strong>Ambiente Profesional:</strong> Un entorno de trabajo colaborativo y respetuoso.</li>
              <li><strong>Crecimiento Profesional:</strong> Oportunidades de desarrollo y formación continua.</li>
              <li><strong>Flexibilidad:</strong> Horarios ajustados a tus necesidades.</li>
              <li><strong>Apoyo Administrativo:</strong> Nos encargamos de las tareas administrativas para que te enfoques en lo que mejor sabes hacer.</li>
            </ul>

            <h2 >¿A Quién Buscamos?</h2>
            <ul>
              <li><strong>Médicos de Todas las Especialidades:</strong> Cardiología, dermatología, ginecología, pediatría, psiquiatría, y más.</li>
              <li><strong>Dentistas:</strong> Generalistas y especialistas en diversas áreas de la odontología.</li>
              <li><strong>Fisioterapeutas:</strong> Con experiencia en rehabilitación y terapias físicas.</li>
              <li><strong>Nutricionistas:</strong> Para brindar asesoramiento nutricional y dietético.</li>
              <li><strong>Psicólogos:</strong> Para atención psicológica y terapias.</li>
              <li><strong>Enfermeros y Personal de Apoyo Médico:</strong> Para asistencia en diversas áreas de la salud.</li>
            </ul>

            <h2 >Requisitos</h2>
            <ul>
              <li>Título y certificaciones correspondientes.</li>
              <li>Experiencia previa en el campo de la salud.</li>
              <li>Compromiso con la atención de calidad y el cuidado del paciente.</li>
              <li>Habilidades interpersonales y capacidad para trabajar en equipo.</li>
            </ul>

            <h2 >¿Interesado?</h2>
            <p>
              Envía tu CV y carta de presentación a <strong>[correo@ejemplo.com]</strong> o llámanos al <strong>[número de teléfono]</strong> para más información. ¡Nos encantaría conocerte!
            </p>

            <p style={{ color: '#2980b9' }}>¡Forma parte de una clínica que se preocupa por sus pacientes y por el desarrollo profesional de su equipo!</p>
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
