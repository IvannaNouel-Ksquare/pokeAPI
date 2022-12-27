import './App.css';
import DataDisplayer from './components/Pokemons/pokemonsData';

function App() {
  const pokemons=[1,2,3,4,5];
  const List = pokemons.map((data) => <DataDisplayer id={data} key={data}/>);

    return (
    <body className="App">
       {List}
    </body>
  );
}

export default App;
