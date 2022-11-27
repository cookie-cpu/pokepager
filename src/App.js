import React from "react";
import Pager from "./Pager";
import RandomPoke from "./RandomPoke";
import '../src/app.css'

function App() {

  const [clicked, setClicked] = React.useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
          {/* {!clicked ? <button className="button" onClick={handleClick}>Show</button> : <button className="button" onClick={handleClick}>Hide</button>} */}

      <div className="grid">
       {/* <Pager/> */}
       <RandomPoke />
       {/* {clicked ? <RandomPoke />: null} */}

    </div>
     
    </>
  );
}

export default App;
