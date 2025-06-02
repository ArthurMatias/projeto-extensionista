import "./App.css";

export function App() {
  return (
    <>
    <div className="header-container">

<h1 className="logo">TECPIXEL</h1>

<div className="botoesMenu"> 
    <button> Home </button>
    <button> Quem somos</button>
    <button> Contato</button>
    </div>

    <button  className="botaobranco"> Iniciar avaliação</button>
    </div>
     
     <div className="estilo" >
         <img id='Cara de fone' src="8591225.png" alt="imagem do cara de fone"/>
     </div>
   
   <section className="hero">
    <div className="introd">
        <h2> <span className="gradiente">Nos conheça melhor!</span> </h2>
        <p> Somos uma equipe independente, originada<br/>por meio acadêmico a fins de ajudar comunidade diretamente.</p>
           
        <button className="meubotao" > Saber mais</button>
    </div>
    
    <div className="anatec">
        <h2><span className="gradiente">Análise Técnica</span></h2>
        <p> Responda as perguntas para que nossa análise <br/> seja feita da melhor forma.</p>
        <p> Fique tranquilo, vamos resolver seu problema junto a você!</p>
        <button>Começar</button>
    </div>
    <div className="melhoranatec"></div>

    <div className="filtro-borrado"> </div>

    <div className="bola azul1"></div>
    <div className="bola azul2"></div>
    <div className="bola azul3"></div>
    <div className="bola azul4"></div>
    <div className="bola azul5"></div>
    <div className="bola azul6"></div>
      </section>

      <section className="analysis">
     
        <div className="phone-image">
          <img src="public/mockup de celular.png" alt="Mockup de celular" />
        </div>
      </section>
    </>
  );
}

export default App;