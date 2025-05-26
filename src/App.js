import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import ContatoForm from './components/ContatoForm';
import BackToTopButton from './components/BackToTopButton';
import Card from './components/Card';

const ScrollButton = ({ direction, onClick }) => (
  <button
    className={`scroll-button scroll-${direction}`}
    onClick={onClick}
  >
    {direction === 'left' ? '←' : '→'}
  </button>
);

function App() {
  const slidesContainerRef = useRef(null);

  const scrollToSection = (direction) => {
    const container = slidesContainerRef.current;
    if (container) {
      const scrollAmount = window.innerWidth;
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <Header />
      <main>
        <BackToTopButton />

        <div className='slidesContainer' ref={slidesContainerRef}>
          <Section id="introducao">
            <div className="section-content-wrapper">
              <h2 className="section-card-title">Introdução</h2>
              <p>
                A água, essencial para a vida e para os ecossistemas, é um recurso finito e precioso. Embora a maior parte do planeta seja coberta por água, apenas uma pequena fração é doce e acessível ao consumo humano. Fatores como crescimento populacional, urbanização, poluição e desperdício têm agravado a crise hídrica, impactando a segurança alimentar, a saúde pública e o meio ambiente.
              </p>
              <p>
                Segundo a ONU, bilhões de pessoas ainda carecem de acesso à água potável e ao saneamento básico. O problema vai além das regiões áridas: má gestão, desperdício e contaminação afetam a água mesmo em locais antes abundantes.
              </p>
              <p>
                Por isso, a conservação e o uso eficiente da água são fundamentais para garantir a sustentabilidade e o bem-estar das futuras gerações. Este trabalho apresenta técnicas e tecnologias que podem ser aplicadas em diferentes contextos, mostrando que a responsabilidade é coletiva e que mudanças de comportamento são essenciais para superar a crise hídrica.
              </p>
            </div>
          </Section>

          <Section id="tecnicas">
            <div className="section-content-wrapper">
              <h2 className="section-card-title">Técnicas de Conservação</h2>
              <p>A conservação da água envolve práticas e mudanças comportamentais que reduzem o consumo e o desperdício.</p>

              <Card title="Ambiente Doméstico">
                <ul>
                  <li>Uso consciente em banheiros: banhos curtos, fechar a torneira ao escovar os dentes.</li>
                  <li>Cozinha e lavanderia: reutilizar água e consertar vazamentos.</li>
                  <li>Jardim e áreas externas: irrigação inteligente e varrição de calçadas.</li>
                  <li>Manutenção: reparar vazamentos para evitar grandes perdas.</li>
                </ul>
              </Card>

              <Card title="Agricultura">
                <ul>
                  <li>Sistemas de irrigação eficientes: gotejamento, microaspersão, pivô central.</li>
                  <li>Manejo do solo: plantio direto e cobertura para reter umidade.</li>
                  <li>Escolha de culturas: priorizar espécies adaptadas ao clima local.</li>
                  <li>Monitoramento: sensores para medir a umidade do solo.</li>
                </ul>
              </Card>

              <Card title="Indústria e Comércio">
                <ul>
                  <li>Reuso de água em processos: tratamento e reutilização da água internamente.</li>
                  <li>Auditorias hídricas: identificar pontos de desperdício.</li>
                  <li>Otimização de processos: adaptar ou modernizar processos para reduzir consumo.</li>
                  <li>Captação de água da chuva: para usos não potáveis como resfriamento e limpeza.</li>
                </ul>
              </Card>

              <Card title="Ambientes Urbanos">
                <ul>
                  <li>Redução de perdas na distribuição: reparo de vazamentos nas redes.</li>
                  <li>Gestão de águas pluviais: sistemas de captação e armazenamento para usos não potáveis.</li>
                  <li>Paisagismo eficiente: uso de plantas nativas e de baixa necessidade hídrica.</li>
                  <li>Uso de água de reuso: irrigação de jardins, lavagem de ruas e combate a incêndios.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="tecnologias">
            <div className="section-content-wrapper">
              <h2 className="section-card-title">Tecnologias para Uso Eficiente</h2>
              <p>
                As inovações tecnológicas são fundamentais para otimizar o uso da água, oferecendo soluções modernas para captação, tratamento e monitoramento.
              </p>

              <Card title="Sistemas de Captação e Armazenamento de Água da Chuva">
                <ul>
                  <li>Captação residencial e predial: sistemas que coletam água da chuva para usos não potáveis, como descargas e irrigação.</li>
                  <li>Captação em larga escala: bacias de retenção e infiltração que recarregam aquíferos e ajudam a reduzir enchentes.</li>
                  <li>Benefícios: menor demanda por água potável, redução de custos e alívio sobre sistemas de saneamento.</li>
                </ul>
              </Card>
              
              <Card title="Reúso de Água">
                <ul>
                  <li>Água cinza: água de chuveiros e pias tratada para ser reutilizada em descargas e irrigação.</li>
                  <li>Reúso de esgoto tratado: efluentes tratados para aplicações como:
                    <ul>
                      <li>Uso agrícola: irrigação de culturas não alimentícias.</li>
                      <li>Uso industrial: processos e resfriamento.</li>
                      <li>Uso urbano: lavagem de ruas e combate a incêndios.</li>
                      <li>Reúso potável direto/indireto: com tratamento avançado, embora ainda enfrente barreiras regulatórias e culturais.</li>
                    </ul>
                  </li>
                </ul>
              </Card>
              
              <Card title="Tecnologias de Monitoramento e Controle">
                <ul>
                  <li>Sensores inteligentes: detectam vazamentos e monitoram a umidade do solo.</li>
                  <li>Telemetria: permite monitorar e controlar sistemas remotamente.</li>
                  <li>Medidores inteligentes: mostram o consumo em tempo real, ajudando a identificar desperdícios.</li>
                  <li>Plataformas de gestão de dados: facilitam decisões estratégicas para concessionárias e indústrias.</li>
                </ul>
              </Card>
              
              <Card title="Dessalinização">
                <ul>
                  <li>Tecnologias comuns: osmose reversa e destilação.</li>
                  <li>Aplicações: regiões áridas e costeiras com poucas fontes de água doce.</li>
                  <li>Desafios: custo elevado e descarte do concentrado, mas avanços tornam a técnica mais viável.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="beneficios"> 
            <div className="section-content-wrapper">
              <h2 className="section-card-title">Benefícios e Desafios da Conservação e Uso Eficiente da Água</h2>
              <p>
                A adoção dessas técnicas e tecnologias traz muitos benefícios, mas também exige superar desafios importantes.
              </p>

              <Card title="Benefícios">
                <ul>
                  <li>Sustentabilidade ambiental: protege recursos hídricos e ecossistemas.</li>
                  <li>Economia financeira: reduz custos com água e energia para consumidores e empresas.</li>
                  <li>Segurança hídrica: garante abastecimento durante períodos de escassez.</li>
                  <li>Saúde pública: mais água tratada e saneamento adequado diminuem doenças.</li>
                  <li>Crescimento econômico sustentável: a água é essencial para a produção e a indústria.</li>
                  <li>Inovação e empregos verdes: estimula novas tecnologias e gera oportunidades de trabalho.</li>
                </ul>
              </Card>

              <Card title="Desafios">
                <ul>
                  <li>Custos iniciais: investimentos altos dificultam a adoção em alguns setores.</li>
                  <li>Conscientização e mudança de hábito: a falta de informação ainda limita a adesão a práticas sustentáveis.</li>
                  <li>Regulamentação e legislação: lacunas legais podem atrasar projetos.</li>
                  <li>Infraestrutura antiga: sistemas de distribuição obsoletos aumentam perdas e exigem modernização.</li>
                  <li>Manutenção e monitoramento: demandam atenção constante para garantir eficácia.</li>
                  <li>Aceitação pública: em especial para reuso potável, é necessário diálogo e campanhas de educação.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="conclusao">
            <div className="section-content-wrapper">
              <h2 className="section-card-title">Conclusão</h2>
              <p>
                A conservação e o uso eficiente da água são essenciais para garantir a sustentabilidade e o bem-estar das futuras gerações. A adoção de técnicas e tecnologias adequadas, aliada à conscientização e mudança de comportamento, pode fazer a diferença na preservação desse recurso vital.
              </p>
              <p>
                É fundamental que todos, desde indivíduos até governos e empresas, assumam a responsabilidade pela gestão da água. Somente com ações coletivas poderemos enfrentar os desafios hídricos do presente e do futuro.
              </p>
            </div>
          </Section>

          <Section id="contato">
            <div className="contact-form-card">
              <h2 className="section-card-title">Contato</h2>
              <ContatoForm />
            </div>
          </Section>
        </div>

        <ScrollButton direction="left" onClick={() => scrollToSection('left')} />
        <ScrollButton direction="right" onClick={() => scrollToSection('right')} />
      </main>
      <Footer />
    </div>
  );
}

export default App;