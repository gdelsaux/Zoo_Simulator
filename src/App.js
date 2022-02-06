import React from "react";
//style from our component
import styled from "styled-components";
//import components
import Elephant from "./components/Elephant";
import Giraffe from "./components/Giraffe";
import Monkey from "./components/Monkey";
import Time from "./components/Time";

function App() {
  const refresh = () => {
    window.location.reload()
  }
  return (
    <Style className="App">
      <Time />
      <div className={"animals"}>
        <Giraffe />
        <Elephant />
        <Monkey />
      </div>
      <button onClick={refresh}>Restart</button>
    </Style>
  );
}

//Styling
const Style = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  .animals {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 80vh;
    .buttons {
      height: 10vh;
      text-align: center;
      button {
        margin: 10px;
      }
    }
  }
  p {
    text-align: center;
  }
`;

export default App;