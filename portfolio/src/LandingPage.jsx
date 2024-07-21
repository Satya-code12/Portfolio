import React from "react";
const MainPage =()=>{
  return(
    <>
      <section className="h-screen w-auto text-white">
        <div className="h-[4rem] p-5 ">
        <button className="ml-[16rem] h-9 w-[7rem] backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-700 rounded-lg"> <span>#1.</span> About</button>
        <button className="ml-[9rem] h-9 w-[7rem] backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-700 rounded-lg"> <span>#2.</span> Work</button>
        <button className="ml-[9rem] h-9 w-[7rem] backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-700 rounded-lg"> <span>#3.</span> Contact</button>
        </div>

        <div >
        <h6>Hi, my name is,</h6>
        <h1>Satyabrata Ojha.</h1>
        <h3>A passionate Web Developer.</h3>
        <p> A passionate and dedicated front-end developer with a strong foundation in JavaScript and React.js. Over the years, I have honed my skills by working on various projects, including a Netflix Clone and a Tic Tac Toe game, which have allowed me to delve deep into the intricacies of web development.</p>
        <button> Check my resume</button>
        <button>Need a Frontend Developer?</button>
      </div>
      </section>

      
    </>
  );
}

export {MainPage};