import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { idCharacter } from "../functions/functions";

const Character = () => {
  const[character, setCharacter] = useState(null)

  const params = useParams()
  useEffect(() => {
    idCharacter(params.id, setCharacter)
  }, [params.id])

  return (
  <>
    <h2>PERSONAJE CON EL id: {params.id}</h2>
    <p>NOMBRE: {character}</p>
  </>
  );
};

export default Character;
