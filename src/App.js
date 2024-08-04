function App() {
  return <div>
    <h1>Hi, I'm Sundeep.</h1>
    <img 
      src={"https://media.licdn.com/dms/image/C4D03AQFILbfAhUAh5Q/profile-displayphoto-shrink_800_800/0/1635195049363?e=1728518400&v=beta&t=zuBLSU87_PefB-ygAM9l9kxX8D7GwWgr476XbKru-uk"}
      className="profile-pic" 
      alt="profile pic"
    />
    <h2>About Me</h2>
    <p>This is a paragraphy with my biography.</p>
    <div>
        <a
        className="App-link"
        href="https://www.linkedin.com/in/sundeep-kaler/"
        target="_blank"
        rel="noopener noreferrer"
        >
        LinkedIn
      </a>
    </div>
    <div>
      <a
        className="App-link"
        href="https://github.com/s-kaler"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>;
}

export default App;
