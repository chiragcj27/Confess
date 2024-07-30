import { useState } from "react";
import Message from "./Components/Message";
import song from "./assets/Thousand-Years-Instrumental.mp3";
import hello from "./assets/hello.gif";

const App = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="h-screen bg-sky-300 flex flex-col items-center justify-center p-4">
      {!clicked && (
        <>
          <div className="relative">
            <img src={hello} alt="hello gif" className="w-64 h-64 object-cover" />
            <div className="absolute inset-0 rounded-lg bg-pink-200 opacity-30 blur-lg"></div>
          </div>
          <button
            onClick={handleClick}
            className="px-6 py-3 mt-4 bg-pink-400 text-white font-bold text-lg rounded-full shadow-md hover:bg-pink-500 hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Click Here !!
          </button>
        </>
      )}
      {clicked && (
        <>
          <audio src={song} autoPlay loop />
          <Message />
        </>
      )}
    </div>
  );
};

export default App;
