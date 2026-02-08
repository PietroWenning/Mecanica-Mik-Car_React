import ServiceCard from '../components/ServiceCard';

// imagens (vamos organizar já)
import pneus from '../assets/iconservicos/pneus.png';
import freio from '../assets/iconservicos/002-freio.png';
import oleo from '../assets/iconservicos/oleo (2).png';

function Home() {
  const services = [
    {
      title: 'Pneus',
      image: pneus,
      description: 'Troca e manutenção de pneus'
    },
    {
      title: 'Freios',
      image: freio,
      description: 'Revisão completa do sistema de freios'
    },
    {
      title: 'Troca de Óleo',
      image: oleo,
      description: 'Óleo e filtro de qualidade'
    }
  ];

  return (
    <main>
      {/* HERO */}
      <section id="home" className="hero">
        <h2>Bem-vindo à Mecânica MikCar</h2>
        <p>Qualidade, confiança e compromisso com seu veículo</p>
      </section>

      {/* SERVIÇOS */}
      <section id="services" className="services">
        <h2>Nossos Serviços</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
