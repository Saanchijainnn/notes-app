
import React, { useState } from "react";
import { useFormState } from "react-dom";

const App = () => {
const [title, setTitle] = useState("");
const [details, setDetails] = useState("");


const [task, setTask] = useState([]); {/*ye ek array h jisme hum apne task ko store krenge*/}


  function submitHandler(e) {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({
      title,
      details,
    });
    setTask(copyTask);
    
  

    setTitle("");
    setDetails("");
  }



  return (
    <div className="h-screen lg:flex  bg-black text-white ">
     
      <form onSubmit={(e)=>{
        submitHandler(e);
      } } className="flex  items-start lg:w-1/2 flex-col gap-4 p-10">
         <h1 className="text-4xl font-bold">Add Notes</h1>
        

        {/* PEHLA INPUT FOR HEADING */}
        <input
         type="text"
          placeholder="enter task heading" 
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
            
          }}
          />

          {/* DETAILED WLA INPUT */}
        <textarea
        type="text" 
        placeholder="write details here"
        className="px-5  w-full py-2 h-32 flex flex-row items-start font-medium  border-2 rounded outline-none"
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}

        ></textarea>
        <button className="bg-white active:bg-blue-500 w-full text-black px-5 py-2 font-medium outline-none rounded">Add Note</button>
        
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 p-10">
      <h1 className="text-4xl font-bold"> Recent Notes </h1>
        <div className="flex gap-5 flex-wrap mt-5 h-full overflow-auto">
        {task.map(function(elem,idx){
          return <div key={idx}  className="h-52 w-40 rounded-xl bg-white"></div>
        })}
        </div>
      </div>
    </div>
  );
}
export default App;