import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  // const [isSubmitted, setSubmited] = useState(false);

  const handlerPlayerNameChange = (event) => {
    setEnteredPlayerName(event.target.value);
    setSubmited(true);
  }

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown'}</h2>
      <p>
        <input 
        ref={playerName} 
        type="text" 
        // onChange={handlerPlayerNameChange} 
        // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>        
      <div>{enteredPlayerName}</div>
    </section>
  );
}
