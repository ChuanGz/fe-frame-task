import { Button } from "../specialized/button";
import { ResizableContainer } from "./resizable-container";

export const AppContainer = () => {
  return (
    <div className="m-h-screen">
      <Button className="fixed top-0 w-full rounded-none bg-orange-800">
        My Header
      </Button>
      <ResizableContainer />
      <Button className="fixed bottom-0 w-full rounded-none bg-teal-700">
        My Footer
      </Button>
    </div>
  );
};
