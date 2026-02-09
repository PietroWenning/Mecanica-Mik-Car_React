import img1 from "../assets/images/ImagensMecanica/Mikcar foto.png";
import img2 from "../assets/images/ImagensMecanica/IMG_05.jpg";
import img3 from "../assets/images/ImagensMecanica/mikcar.jpg";
import img4 from "../assets/images/ImagensMecanica/Motor-e-Cambio-mecanica-automotiva-com-injecao-eletronica.webp";


function HomeSlider() {
  return (
    <section id="home">
      <div className="slider">
        <div className="slides">

          {/* Radio Buttons */}
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          {/* Slide 1 */}
          <div className="slide first">
            <img src={img1} alt="MikCar" />
            <div className="slide-text">
              <h1>Bem vindo à MikCar</h1>
              <h2>
                A Sua <span>Oficina Mecânica</span> na Grande Florianópolis.
                <span> Desde 2020.</span>
              </h2>
            </div>
            <div className="TextoTrasparente">
              <p>
                Mais de 5 mil <span className="verde">clientes atendidos</span>
                <br /> com qualidade, honestidade e preço justo.
              </p>
            </div>
            <div className="bnt-contato2">
              <a
                href="https://api.whatsapp.com/message/EMJNJWWOLFOGJ1?autoload=1&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  <i className="bi bi-whatsapp"></i> Agendar Revisão
                </button>
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide">
            <img src={img2} alt="MikCar" />
            <div className="slide-text">
              <h1>Bem vindo à MikCar</h1>
              <h2>
                A Sua <span>Oficina Mecânica</span> na Grande Florianópolis.
                <span> Desde 2020</span>
              </h2>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slide">
            <img src={img3} alt="MikCar" />
          </div>

          {/* Slide 4 */}
          <div className="slide">
            <img src={img4} alt="MikCar" />
          </div>

          {/* Navegação automática */}
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>

        {/* Navegação manual */}
        <div className="manual-navigation">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </section>
  );
}

export default HomeSlider;
