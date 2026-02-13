import imagem1 from '../assets/images/ImagensMecanica/oficina.png'


function Cta() {
  return (
    <section id="home">
      <div className="slider">

        {/* Radio Buttons */}
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />

          {/* Slide */}
          <div className="slide first">
            <img src={imagem1} alt="img1" />

            <div className="slide-text">
              <h1>Bem vindo à MikCar</h1>
              <h2>
                A Sua <span>Oficina Mecânica</span>
              </h2>
            </div>

            <div className="TextoTrasparente">
              <p>
                Mais de 5 mil <span className="verde">clientes atendidos</span>
                <br />
                preço justo.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;
