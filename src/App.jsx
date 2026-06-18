import React, { useState } from "react";


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

  const deletenote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }



    return (
    <div className="h-screen lg:flex bg-gray-950 text-white">

      <form
        onSubmit={(e) => { submitHandler(e); }}
        className="flex items-start lg:w-1/2 flex-col gap-4 p-10 border-r border-white/10 bg-white/5"
      >
        <h1 className="text-4xl font-black tracking-tight">Add Notes</h1>
        

        {/* PEHLA INPUT FOR HEADING */}
                <input
          type="text"
          placeholder="enter task heading"
          className="px-5 w-full font-medium py-3 border border-white/10 rounded-xl outline-none bg-white/5 text-white placeholder:text-white/30 focus:border-violet-500 focus:bg-violet-500/5 transition-all"
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />


          {/* DETAILED WLA INPUT */}
        <textarea
          placeholder="write details here"
          className="px-5 w-full py-3 h-32 flex flex-row items-start font-medium border border-white/10 rounded-xl outline-none bg-white/5 text-white placeholder:text-white/30 focus:border-violet-500 focus:bg-violet-500/5 transition-all resize-none"
          value={details}
          onChange={(e) => { setDetails(e.target.value) }}
        ></textarea>

        <button className="bg-violet-600 hover:bg-violet-500 active:bg-violet-700 w-full text-white px-5 py-3 font-bold outline-none rounded-xl transition-all">
          + Add Note
        </button>
        
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 p-10">
      <h1 className="text-4xl font-bold"> Recent Notes </h1>
        <div className="flex gap-5 flex-wrap justify-start items-start mt-5 h overflow-auto">
        {task.map(function(elem,idx){
          return <div key={idx}  className="flex justify-between flex-col item-start relative h-52 w-40 rounded-xl text-black py-8 px-4  pb-5 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] bg-cover bg-center">
            <div>
            <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
            <p className="text-sm mt-4 text-gray-500 leading-tight font-medium">{elem.details}</p>
            </div>
            <button onClick={()=>{
                 deletenote(idx)
            }} className="w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold ">Delete</button>
          </div>

        })}
        </div>
      </div>
    </div>
  );
}
export default App;