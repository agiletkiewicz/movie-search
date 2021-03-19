
function Welcome({ empty }) {
    
    return (
      <header className="heading">
          <h1>Welcome to your movie shop!</h1>
          {empty ? <p>Search to add movies</p> : <p>Search again to add more!</p>}
      </header>
    );

  }
  
  export default Welcome;