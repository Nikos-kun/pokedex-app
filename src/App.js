import './App.css';
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from './Containers/PokemonList';
import Pokemon from './Containers/Pokemon';

function App() {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
