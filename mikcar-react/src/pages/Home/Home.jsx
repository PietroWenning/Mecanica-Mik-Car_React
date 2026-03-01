
import styles from './Home.module.css';

function Home(){
return(
<section id="home">
  <div className={styles.slider}>

    <div className={styles.slides}>
      <input type="radio" name="radio-btn" id="radio1" />
      <input type="radio" name="radio-btn" id="radio2" />

      <div className={`${styles.slide} ${styles.first}`}>
        

        <div className={styles["slide-text"]}>
          <h1>Bem vindo à MikCar</h1>
          <h2>
            A Sua <span>Oficina Mecânica</span>
          </h2>
        </div>

        <div className={styles.TextoTrasparente}>
          <p>
            Mais de 5 mil <span className={styles.verde}>clientes atendidos</span>
            <br />
            preço justo.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
)

}
export default Home;
