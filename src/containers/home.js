import Search from '../components/search'
import { useState } from 'react';

function Home() {

  const [search, setSearch] = useState("");

  return (
    <>
      <Search setSearch={setSearch} />
      {console.log(search)}
    </>
  );
}

export default Home;
