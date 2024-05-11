import "./App.css";
import { Button } from "./components/ui/button";
import { ResizableContainer } from "./sample-containers/resizable-container";

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
