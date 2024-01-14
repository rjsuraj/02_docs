import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data,reference }) {

  const colorList = {
    green : "bg-[green]",
    blue : "bg-[blue]"
  } 

  return (
    <motion.div drag dragConstraints={reference} className="card relative w-[230px] h-[300px] bg-zinc-500/20 backdrop-blur-md rounded-[45px] text-white p-[2rem] overflow-hidden">
      <IoDocumentTextOutline />
      <h3 className="text-md leading-none mt-[1.6rem]">{data.desc}</h3>
      <div className="footer absolute bottom-0 left-0 w-full">

        <div className="data w-full flex justify-between px-[1.5rem] mb-4 items-center">
          <p>{data.size}</p>
          <span className="text-xl">
            {data.isClose ? <IoCloseCircleSharp /> : <MdDownloadForOffline />}
          </span>
        </div>

        {
            data.tag.isOpen && (
                <div className={`tag ${colorList[data.tag.color]} py-[0.7rem] flex justify-center items-center`}>
                    {data.tag.title}
                </div>
            )
        }

      </div>
    </motion.div>
  );
}

export default Card;
