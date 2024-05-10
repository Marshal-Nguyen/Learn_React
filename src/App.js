import { useState } from "react";

function App() {
  const [work , setWork] = useState('')

  return (
    <div class="flex gap-8 h-screen justify-center border border-red-500 items-center">
      <input value={work} type="text" className="outline-none border border-blue-600 px-4 py-2 w-[400px]" onChange={e => setWork(e.target.value)}></input>
      <button type="button" className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white ">
      ADD
      </button>
    </div>
  );
}

export default App;
