import axios from "axios";

const allCharacters = async (state) => {
  const petition = await axios.get('https://rickandmortyapi.com/api/character')
  state(petition.data.results);
}

const idCharacter = async (id,state) => {
  const petition = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  // console.log(petition.data.name);
  state(petition.data.name);
}

export {allCharacters, idCharacter};