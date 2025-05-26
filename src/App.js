import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import ContatoForm from './components/ContatoForm';
import BackToTopButton from './components/BackToTopButton';
import Card from './components/Card';
import { Routes, Route, useLocation } from 'react-router-dom';
import InteractiveActivity from './components/InteractiveActivity';
import Quiz from './components/Quiz';

const ScrollButton = ({ direction, onClick }) => (
  <button
    className={`scroll-button scroll-${direction}`}
    onClick={onClick}
  >
    {direction === 'left' ? '←' : '→'}
  </button>
);

function App() {
  const location = useLocation();
  const BASE_NAME = "/APS-2025-Water-Saving";

  const scrollToSection = (direction) => {
    const container = document.querySelector('.slidesContainer');
    const scrollAmount = window.innerWidth;

    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  const openInNewTab = (path) => {
    window.open(`${BASE_NAME}${path}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <main>
            <BackToTopButton />

            <div className='slidesContainer'>
              <Section id="introducao">
                <div className="section-content-wrapper">
                  <h2>Introdução</h2>
                  <p>
                    A água, essencial para a vida e para os ecossistemas, é um recurso finito e precioso. Embora a maior parte do planeta seja coberta por água, apenas uma pequena fração é doce e acessível ao consumo humano. Fatores como crescimento populacional, urbanização, poluição e desperdício têm agravado a crise hídrica, impactando a segurança alimentar, a saúde pública e o meio ambiente.
                  </p>
                  <p>
                    Segundo a ONU, bilhões de pessoas ainda carecem de acesso à água potável e ao saneamento básico. O problema vai além das regiões áridas: má gestão, desperdício e contaminação afetam a água mesmo em locais antes abundantes.
                  </p>
                  <p>
                    Por isso, a conservação e o uso eficiente da água são fundamentais para garantir a sustentabilidade e o bem-estar das futuras gerações. Este trabalho apresenta técnicas e tecnologias que podem ser aplicadas em diferentes contextos, mostrando que a responsabilidade é coletiva e que mudanças de comportamento são essenciais para superar a crise hídrica.
                  </p>
                  <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <button className="interactive-button" onClick={() => openInNewTab('/atividade')}>
                      Ir para Atividade Interativa
                    </button>
                    <button className="interactive-button" onClick={() => openInNewTab('/quiz')} style={{ marginLeft: '1rem' }}>
                      Fazer o Quiz
                    </button>
                  </div>
                </div>
              </Section>

              <Section id="tecnicas">
                <div className="section-content-wrapper">
                  <h2>Técnicas de Conservação</h2>
                  <p>A conservação da água envolve práticas e mudanças comportamentais que reduzem o consumo e o desperdício.</p>

                  <Card title="Ambiente Doméstico">
                    <ul>
                      <li><strong>Uso consciente em banheiros:</strong> banhos curtos, fechar a torneira ao escovar os dentes.</li>
                      <li><strong>Cozinha e lavanderia:</strong> reutilizar água e consertar vazamentos.</li>
                      <li><strong>Jardim e áreas externas:</strong> irrigação inteligente e varrição de calçadas.</li>
                      <li><strong>Manutenção:</strong> reparar vazamentos para evitar grandes perdas.</li>
                    </ul>
                  </Card>

                  <Card title="Agricultura">
                    <ul>
                      <li><strong>Sistemas de irrigação eficientes:</strong> gotejamento, microaspersão, pivô central.</li>
                      <li><strong>Manejo do solo:</strong> plantio direto e cobertura para reter umidade.</li>
                      <li><strong>Escolha de culturas:</strong> priorizar espécies adaptadas ao clima local.</li>
                      <li><strong>Monitoramento:</strong> sensores para medir a umidade do solo.</li>
                    </ul>
                  </Card>

                  <Card title="Indústria e Comércio">
                    <ul>
                      <li><strong>Reuso de água em processos:</strong> tratamento e reutilização da água internamente.</li>
                      <li><strong>Auditorias hídricas:</strong> identificar pontos de desperdício.</li>
                      <li><strong>Otimização de processos:</strong> adaptar ou modernizar processos para reduzir consumo.</li>
                      <li><strong>Captação de água da chuva:</strong> para usos não potáveis como resfriamento e limpeza.</li>
                    </ul>
                  </Card>

                  <Card title="Ambientes Urbanos">
                    <ul>
                      <li><strong>Redução de perdas na distribuição:</strong> reparo de vazamentos nas redes.</li>
                      <li><strong>Gestão de águas pluviais:</strong> sistemas de captação e armazenamento para usos não potáveis.</li>
                      <li><strong>Paisagismo eficiente:</strong> uso de plantas nativas e de baixa necessidade hídrica.</li>
                      <li><strong>Uso de água de reuso:</strong> irrigação de jardins, lavagem de ruas e combate a incêndios.</li>
                    </ul>
                  </Card>
                </div>
              </Section>

              <Section id="tecnologias">
                <div className="section-content-wrapper">
                  <h2>Tecnologias para Uso Eficiente</h2>
                  <p>
                    As inovações tecnológicas são fundamentais para otimizar o uso da água, oferecendo soluções modernas para captação, tratamento e monitoramento.
                  </p>

                  <Card title="Sistemas de Captação e Armazenamento de Água da Chuva">
                    <ul>
                      <li><strong>Captação residencial e predial:</strong> sistemas que coletam água da chuva para usos não potáveis, como descargas e irrigação.</li>
                      <li><strong>Captação em larga escala:</strong> bacias de retenção e infiltração que recarregam aquíferos e ajudam a reduzir enchentes.</li>
                      <li><strong>Benefícios:</strong> menor demanda por água potável, redução de custos e alívio sobre sistemas de saneamento.</li>
                    </ul>
                  </Card>
                  
                  <Card title="Reúso de Água">
                    <ul>
                      <li><strong>Água cinza:</strong> água de chuveiros e pias tratada para ser reutilizada em descargas e irrigação.</li>
                      <li><strong>Reúso de esgoto tratado:</strong> efluentes tratados para aplicações como:
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
                      <li><strong>Sensores inteligentes:</strong> detectam vazamentos e monitoram a umidade do solo.</li>
                      <li><strong>Telemetria:</strong> permite monitorar e controlar sistemas remotamente.</li>
                      <li><strong>Medidores inteligentes:</strong> mostram o consumo em tempo real, ajudando a identificar desperdícios.</li>
                      <li><strong>Plataformas de gestão de dados:</strong> facilitam decisões estratégicas para concessionárias e indústrias.</li>
                    </ul>
                  </Card>
                  
                  <Card title="Dessalinização">
                    <ul>
                      <li><strong>Tecnologias comuns:</strong> osmose reversa e destilação.</li>
                      <li><strong>Aplicações:</strong> regiões áridas e costeiras com poucas fontes de água doce.</li>
                      <li><strong>Desafios:</strong> custo elevado e descarte do concentrado, mas avanços tornam a técnica mais viável.</li>
                    </ul>
                  </Card>
                </div>
              </Section>

              <Section id="beneficios">
                <div className="section-content-wrapper">
                  <h2>Benefícios e Desafios da Conservação e Uso Eficiente da Água</h2>
                  <p>
                    A adoção dessas técnicas e tecnologias traz muitos benefícios, mas também exige superar desafios importantes.
                  </p>

                  <Card title="Benefícios">
                    <ul>
                      <li><strong>Sustentabilidade ambiental:</strong> protege recursos hídricos e ecossistemas.</li>
                      <li><strong>Economia financeira:</strong> reduz custos com água e energia para consumidores e empresas.</li>
                      <li><strong>Segurança hídrica:</strong> garante abastecimento durante períodos de escassez.</li>
                      <li><strong>Saúde pública:</strong> mais água tratada e saneamento adequado diminuem doenças.</li>
                      <li><strong>Crescimento econômico sustentável:</strong> a água é essencial para a produção e a indústria.</li>
                      <li><strong>Inovação e empregos verdes:</strong> estimula novas tecnologias e gera oportunidades de trabalho.</li>
                    </ul>
                  </Card>

                  <Card title="Desafios">
                    <ul>
                      <li><strong>Custos iniciais:</strong> investimentos altos dificultam a adoção em alguns setores.</li>
                      <li><strong>Conscientização e mudança de hábito:</strong> a falta de informação ainda limita a adesão a práticas sustentáveis.</li>
                      <li><strong>Regulamentação e legislação:</strong> lacunas legais podem atrasar projetos.</li>
                      <li><strong>Infraestrutura antiga:</strong> sistemas de distribuição obsoletos aumentam perdas e exigem modernização.</li>
                      <li><strong>Manutenção e monitoramento:</strong> demandam atenção constante para garantir eficácia.</li>
                      <li><strong>Aceitação pública:</strong> em especial para reuso potável, é necessário diálogo e campanhas de educação.</li>
                    </ul>
                  </Card>
                </div>
              </Section>

              <Section id="conclusao">
                <div className="section-content-wrapper">
                  <h2>Conclusão</h2>
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
                  <h2>Contato</h2>
                  <ContatoForm />
                </div>
              </Section>
            </div>

            <ScrollButton direction="left" onClick={() => scrollToSection('left')} />
            <ScrollButton direction="right" onClick={() => scrollToSection('right')} />
          </main>
          <Footer />
        </>
      } />
      <Route path="/atividade" element={<InteractiveActivity />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;