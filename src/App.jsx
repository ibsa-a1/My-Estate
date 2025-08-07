import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl text-gray-500 font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
