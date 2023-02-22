import React, {useEffect, useState} from 'react';
import { allCharacters } from '../functions/functions';

const Home = () => {
  const [characters, setCharacters] = useState(null)

  useEffect(() => {
    allCharacters(setCharacters)
  }, [])
  return (
  <>
    {characters != null ? (
      characters.map(character => (
        <div key={character.id}>
          <a href={`/character/${character.id}`}>{character.name}</a>
        </div>
      ))
    ) : ('No hay personajes')}
  </>
  );
};
export default Home;
