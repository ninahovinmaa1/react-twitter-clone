import React from "react";
import Tweet from "./components/Tweet";

function App() {

    const tweetList = [
    {
      "imageURL": "https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png",
      "content": "Here we go!",
      "author": "Cilla",
      "date": "2021-07-03"
    },
    {
      "imageURL": "https://cdn.pixabay.com/photo/2021/01/04/10/37/icon-5887113_1280.png",
      "content": "Summer time feeling",
      "author": "Jane",
      "date": "2021-06-30"
    },
  ]

  return (
    <div className="container">
       {tweetList.map((item, index) => {

        return <Tweet 
            key={index}
            author={item.author}
            content={item.content}
            date={item.date}
            imageURL={item.imageURL}
        />
       })}
    </div>
  );
}

export default App;
