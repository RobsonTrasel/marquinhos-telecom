import Image from './components/Image';
import './App.css';
import { ImageJson } from './components/ImageJson';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Galeria do homem do suporte</h1>
      </header>
      <div className="image-grid">
        {ImageJson.map((image) => (
          <div key={image.id}>
            <Image
              path={image.path}
              description={image.description}
            />
            <p>{image.description}</p>
          </div>
          ))} 
      </div>
    </div>
  );
}

export default App;
