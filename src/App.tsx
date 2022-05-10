import { useState } from "react";
import { Tweet } from "./components/Tweet"

import './App.css'
import { AppRoutes } from "./Routes";

function App() {
  //const [tweets, setTweets] = useState<string[]>([
    //'tweet 1',
    //'tweet 2',
    //'tweet 3',
    //'tweet 4',
  //])

  //function createTweet() {
    //setTweets([...tweets, 'tweet 5'])

  //}

  return (
    <AppRoutes/>
    //<div>
      /* {} pois quer colocar um código javascript dentro do html 
          map pois que percorrer cada um dos tweets e retornar alguma coisa
          */

     // {tweets.map(tweet => {
     //   return <Tweet text={tweet} />
     // })}

     // <button onClick={createTweet}
     //   style={{
    //   backgroundColor: '#8257e6',
    //      border: 0,
      //    padding: '6px 12px',
       //   color: '#FFF'
      //  }}
     // >
      //  Adicionar Tweet
     // </button>
  //  </div>
  );
}

export default App
