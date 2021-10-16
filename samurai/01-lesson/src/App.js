import './App.css';

function App() {
  return (
    <div>
      <Header />
      <List />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href='#'>Home</a>
      <a href='#'>About</a>
      <a href='#'>Contact</a>
    </div>
  )
}

const List = () => {
  return (
    <div>
        <ul>
          <li>Node 1</li>
          <li>Node 2</li>
          <li>Node 3</li>
          <li>Node 4</li>
        </ul>
      </div>
  )
}

export default App;
