import React, { useState } from "react";

const CARD_COLORS = [
  "bg-yellow-100",
  "bg-green-100", 
  "bg-pink-100",
  "bg-blue-100",
  "bg-purple-100",
  "bg-orange-100",
];

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setTitle("");
    setDetails("");
  }

  const deletenote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-gray-950 text-white">

      <form
        onSubmit={(e) => { submitHandler(e); }}
        className="flex items-start lg:w-1/2 flex-col gap-4 p-10 border-r border-white/10 bg-white/5"
      >
        <h1 className="text-4xl font-black tracking-tight">Add Notes</h1>

        <input
          type="text"
          placeholder="enter task heading"
          className="px-5 w-full font-medium py-3 border border-white/10 rounded-xl outline-none bg-white/5 text-white placeholder:text-white/30 focus:border-violet-500 focus:bg-violet-500/5 transition-all"
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />

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

      <div className="lg:w-1/2 p-10">
        <h1 className="text-4xl font-black tracking-tight">Recent Notes</h1>
        <div className="flex gap-4 flex-wrap justify-start items-start mt-6 overflow-auto">

          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className={`flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl text-black py-5 px-4 pb-4 shadow-xl hover:-translate-y-1 transition-all duration-200 ${CARD_COLORS[idx % CARD_COLORS.length]}`}
              >
                <div>
                  <h3 className="leading-tight text-base font-black">{elem.title}</h3>
                  <p className="text-xs mt-3 text-gray-500 leading-snug font-medium">{elem.details}</p>
                </div>
                <button
                  onClick={() => { deletenote(idx) }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 hover:bg-red-600 text-white py-1.5 text-xs rounded-lg font-bold transition-all"
                >
                  🗑 Delete
                </button>
              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
};

export default App;