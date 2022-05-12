import React, { useState } from 'react';
import './App.css';

//Importamos bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import html2canvas from 'html2canvas';

function App() {

  const [textoArriba, setTextoArriba] = useState('');
  const [textoAbajo, setTextoAbajo] = useState('');

  const images = [
    { key: "fire", name: 'Casa en Llamas' },
    { key: "futurama", name: 'Futurama' },
    { key: "history", name: 'History Chanel' },
    { key: "matrix", name: 'Matrix' },
    { key: "philosoraptor", name: 'Philosoraptor' },
    { key: "smart", name: 'Smart' }
  ]


  const [imagen, setImagen] = useState(images[0].key);

  const exportar = (e) => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL('image/png')
      let link = document.createElement('a')
      link.download = 'meme.png'
      link.href = img
      link.click()
    });
  }


  return (
    <div className="App ">
      <select onChange={(e) => setImagen(e.target.value)} className="" style={{ width: '70%', textAlign: 'center' }} >
        {images.map((v, i) => (
          <option key={i} value={v.key}>{v.name}</option>
        ))}

      </select><br />

      <input type="text" onChange={(e, x) => setTextoArriba(e.target.value)} placeholder="Texto arriba" /><br />
      <input type="text" onChange={(e) => setTextoAbajo(e.target.value)} placeholder="Texto abajo" /><br />
      <button onClick={exportar}>Exportar</button>

      {imagen &&
        <div className='meme' id='meme'>
          <span>{textoArriba}</span><br />
          <span>{textoAbajo}</span>
          <img alt='Imagen de Meme' src={`/img/${imagen}.jpg`} />
        </div>
      }

    </div>
  );
}

export default App;
