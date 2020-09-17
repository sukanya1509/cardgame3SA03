import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import CharacterCard from './WordCard';
const word = "Hello";

class App extends Component {
  render() {
    return (
      this.newMethod()
    );
  }

  newMethod() {
    return <div className="card">
      {Array.from(word).map((c, i) => <CharacterCard value={c} key={i} />)}
    </div>
      ,
      <div>
        <WordCard value="hello" />
      </div>;
  }
}
export default App;