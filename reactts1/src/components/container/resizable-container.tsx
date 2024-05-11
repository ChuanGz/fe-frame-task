import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/specialized/resizable";
import { TableContainer } from "./table-container";
import { CardContainer } from "./card-container";

export function ResizableContainer() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full min-w-[350px]"
    >
      <ResizablePanel defaultSize={70} className="bg-purple-200">
        <TableContainer />
      </ResizablePanel>
      <ResizableHandle
        withHandle
        className="hover:bg-blue-800 active:bg-green-800 focus:outline-none focus:ring focus:ring-violet-700"
      />
      <ResizablePanel defaultSize={30} className="bg-cyan-200">
        <CardContainer />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
