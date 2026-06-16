import React from "react";

const App = () => {

const submitHandler = (e) => {
e.preventDefault();
 console.log("submit");
}

  return (
    <div className="h-screen lg:flex  bg-black text-white ">
     
      <form onSubmit={(e)=>{
        submitHandler(e);
      } } className="flex  items-start lg:w-1/2 flex-col gap-4 p-10">
         <h1 className="text-4xl font-bold">Add Notes</h1>
        
        <input
         type="text"
          placeholder="enter task heading" 
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
          />
        <textarea
        type="text" 
        placeholder="enter task details"
        className="px-5  w-full py-2 h-32 flex flex-row items-start font-medium  border-2 rounded outline-none"
        ></textarea>
        <button className="bg-white  w-full text-black px-5 py-2 font-medium outline-none rounded">Add Note</button>
        
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 p-10">
      <h1 className="text-4xl font-bold"> Recent Notes </h1>
        <div className="flex gap-5 flex-wrap mt-5 h-full overflow-auto">
        <div className="h-52 w-40 rounded-2xl bg-white "></div>
        <div className="h-52 w-40 rounded-2xl bg-white "></div>
        <div className="h-52 w-40 rounded-2xl bg-white "></div>
        </div>
      </div>
    </div>
  );
}
export default App;