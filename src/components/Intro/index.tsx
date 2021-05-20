import Sobre from "../../assets/sapiens.png";
import { Cards } from "../Cards";
import { Faq } from "../Faq";
import { Section } from "./style";
export function Intro() {
  return (
    <Section>
      <div className="container">
        <div className="row align-items-center mt-4">
          <div className="col-md-6 item-about">
            <img src={Sobre} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 item-about">
            <h2>O melhor lugar do mundo para ser um UX Designer.</h2>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              eligendi esse facilis, quia placeat aliquam dicta? Animi nihil eum
              iusto. Et similique nihil optio quaerat? Maiores, dicta debitis.
              Eveniet, doloribus!
            </p>

            <button>Fale Consosco</button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 intro-values mb-5">
            <span className="line"></span>
            <h1>Nossos Valores</h1>
          </div>
        </div>
        <div className="row">
          <Cards
            subtitle="ALWAYS DAY ONE"
            description=" normalmente, no início de todas as empresas, há uma empolgação
              constante. Desafios audaciosos e uma garra para vencer, No
              primiero dia, você sempre dá o melhor de si - e na Daredev, sempre
              estaremos no primeiro dia"
          />
          <Cards
            subtitle="PROTOTYPE EVERYTHING"
            description=" Na Daredev, nos preocupamnos em descobrir ao invés de validar. Tudo é prototipável, testável e descobrível.Erramos cedo e aprendemos rápido"
          />
          <Cards
            subtitle="BE EXTRAORDINARY"
            description=" Somos e fazemos o extraordinário pelos nossos clientes.Eles são o motivo pelo qual estamos audacionamente construindo um futuro melhor"
          />
          <Cards
            subtitle="UX IS PEOPLE"
            description=" 100% dos nossos clientes são pessoas. Esqueça os usuários e pense em seres humanos - nosso propósito é servir"
          />
        </div>
        <div className="row mt-5">
          <div className="col-md-12 intro-values mb-5">
            <span className="line"></span>
            <h1>FAQ</h1>
          </div>
        </div>

        <Faq />
        <Faq />
        <Faq />
        <Faq />
      </div>
    </Section>
  );
}
