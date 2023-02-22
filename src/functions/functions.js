import axios from "axios";

const allCharacters = async (state) => {
  const petition = await axios.get('https://rickandmortyapi.com/api/character')
  state(petition.data.results);
}

export {allCharacters};