import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const data =[
    {
      id : "card-1",
      desc: "hello my name is suraj and I am mern stack devloper",
      size: "0.6mb",
      isClose: false,
      tag: { 
        isOpen: true,
        color : "green",
        title : "Upload Now"
      }
    },
    {
      id : "card-2",
      desc: "hello my name is suraj and I am mern stack devloper",
      size: "0.2mb",
      isClose: true,
      tag: { 
        isOpen: false,
        color : "blue",
        title : "Download Now"
      }
    },
    {
      id : "card-3",
      desc: "hello my name is suraj and I am mern stack devloper",
      size: "0.9mb",
      isClose: true,
      tag: { 
        isOpen: true,
        color : "blue",
        title : "Download Now"
      }
    }
  ];

  let ref = useRef(null);

  return (
    <div ref={ref} className="absolute top-0 left-0 bottom-0 right-0 p-10 overflow-hidden">
      <div className="flex gap-5">
        {
          data.map(data =>
            <Card reference={ref} key={data.id} data={data}/>
          )
        }
      </div>
    </div>
  );
}

export default Foreground;
