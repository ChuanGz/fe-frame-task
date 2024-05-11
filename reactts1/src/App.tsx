import "./App.css";
import { Button } from "./components/specialized/button";
import { ResizableContainer } from "./components/container/resizable-container";

function App() {
  return (
    <>
      <Button className="w-full rounded-none bg-orange-800 static top-0">
        My Header
      </Button>
      <ResizableContainer />
      <Button className="w-full rounded-none bg-teal-700 static bottom-0">
        My Footer
      </Button>
    </>
  );
}

export default App;
