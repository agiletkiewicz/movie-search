import Search from '../components/search';
import { useState } from 'react';

function Home() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("")  

  const searchInput = (search) => {
      setMovies(search);
  }

  return (
    <>
      <Search searchInput={searchInput} />
      {console.log(movies)}
    </>
  );    
}

export default Home;
