import "./App.css";
import { CardContainer } from "./sample-containers/card-container";
import { TableContainer } from "./sample-containers/table-container";
import { Button } from "./shadcn-ui-components/ui/button";

function App() {
  return (
    <>
      <Button className="w-full bg-orange-800">My Header</Button>
      <TableContainer />
      <CardContainer />
      <Button className="w-full bg-teal-700">My Footer</Button>
    </>
  );
}

export default App;
