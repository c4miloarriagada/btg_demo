import logo from '../../assets/logo.png'
import styled from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styled.container}>
      <div className={styled.grid_item}>
        <img src="https://static.btgpactual.cl/apps/logo-white.svg" alt="" />
      </div>
    <div className={styled.grid_item}> 
      <div className={styled.footer_info}>
      <h3>BTG Pactual</h3>
          <a>BTG Pactual Chile</a>
          <a>BTG Pactual Brasil</a>
        </div>  
        <div className={styled.footer_info}>
          <h3>Preguntas Frecuentes</h3>
          <a>Introduccion a ML</a>
          <a>¿Cómo hacerse cliente?</a>
          <a>Ayuda</a>
        </div>
        <div className={styled.footer_info}>
          <h3 >Contacto</h3>
          <a>800 386 800</a>
          <p>ml@btgpactual.com</p>
        </div>
      </div>
      <div className={styled.grid_item}>
        <div className={styled.footer_legal}>
        <p>
          BTG PACTUAL ©2023. Todos los derechos reservados. El rendimiento
          pasado no es necesariamente indicativo de resultados futuros. BTG
          Pactual no garantiza que los inversionistas obtengan ganancias ni
          aceptará ninguna responsabilidad por eventuales pérdidas de inversión.
          Los valores de las cuotas de los fondos mutuos y de inversión son
          variables. La rentabilidad obtenida por estos fondos en el pasado no
          es garantía de que se repita en el futuro. Infórmate de las
          características esenciales de la inversión en estos fondos en sus
          respectivos reglamentos internos y contratos generales de fondos.
          Infórmate sobre la garantía estatal de los depósitos en tu banco o en
          http://www.cmfchile.cl.
        </p>
        </div>
      </div>
    </footer>
  );
};
