import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://w7.pngwing.com/pngs/458/250/png-transparent-drawing-s-logo-animation-symbol.png" alt="logo" />
      </header>
      <nav className="nav">
        <div><a href="#">Profile</a></div>
        <div><a href="#">Messages</a></div>
        <div><a href="#">News</a></div>
        <div><a href="#">Music</a></div>
        <div><a href="#">Settings</a></div>
      </nav>
      <div className="content">
        <div>
          <img src="https://images.unsplash.com/photo-1634325232058-e7b8f80cc20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div>
          <img src="https://pbs.twimg.com/media/E83TZzNWYAEFE9C.jpg" />
          <div>description</div>
        </div>
        <div>
          My posts
          <div>New posts</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
            <div>Post 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
