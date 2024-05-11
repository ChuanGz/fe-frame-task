import "./App.css";
import { Button } from "./components/specialized/button";
import { ResizableContainer } from "./components/container/resizable-container";

function App() {
  return (
    <>
      <Button className="w-full bg-orange-800">My Header</Button>
      <ResizableContainer />
      <Button className="w-full bg-teal-700">My Footer</Button>
    </>
  );
}

export default App;
