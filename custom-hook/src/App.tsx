import Character from './components/Character';

const App = () => {
  const count = 1

  const increment = () => {
    console.log('increment');
  }

  const decrement = () => {
    console.log('decrement');
  }

  return (
    <article className="App">
      <Character count={count} />
      <div>
        <h2>Contador = {count}</h2>
        <span>
          <button onClick={increment}>Incrementar</button>
          <button onClick={decrement}>Decrementar</button>
        </span>
      </div>
    </article>
  );
};

export default App;