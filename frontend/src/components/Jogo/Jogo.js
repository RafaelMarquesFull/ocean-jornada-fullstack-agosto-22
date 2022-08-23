import './Jogo.css';
import clouds from '../../assets/clouds.png';
import pipe from '../../assets/pipe.png';
import mario from '../../assets/mario.gif';
import React, { useRef, useState } from 'react';

function Jogo() {
  //Estado da palicação
  const [estaPulando, setEstaPulando] = useState(false);

  //referencias do mario e do cano
  const marioRef = useRef();
  const pipeRef = useRef();

  function mariobate() {
    const mario = marioRef.current;
    const pipe = pipeRef.current;
    if (!mario || !pipe) {
      return;
    }
    return (
      pipe.offsetLeft > mario.offsetLeft &&
      pipe.offsetLeft < mario.offsetLeft + mario.offsetWidth &&
      mario.offsetTop + mario.offsetHeight > pipe.offsetTop
    );
  }

  document.onkeydown = function () {
    // Atualizamos o estado para true
    setEstaPulando(true);

    // 700ms = 0.7s
    setTimeout(function () {
      // Voltamos o estado para o valor inicial
      setEstaPulando(false);
    }, 700);
  };

  // Por padrão, o elemento tem a classe `.mario`
  let marioClassName = 'mario';

  // Caso esteja pulando (valor true), a classe será `.mario`
  // e `.mario-pulo`
  if (estaPulando) {
    marioClassName = 'mario mario-pulo';
  }

  return (
    <div className="jogo">
      <img className="nuvens" src={clouds} alt="Nuvens" />

      <img ref={pipeRef} className="pipe" src={pipe} alt="Cano" />

      <img ref={marioRef} className={marioClassName} src={mario} alt="Mário" />

      <div className="chao"></div>
    </div>
  );
}

export default Jogo;
