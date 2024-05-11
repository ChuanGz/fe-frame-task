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
      className="w-full min-w-[350px] h-screen"
    >
      <ResizablePanel defaultSize={70} className="static top-0 bg-purple-200">
        <TableContainer />
      </ResizablePanel>
      <ResizableHandle
        withHandle
        className="border-8 border-cyan-950 hover:border-blue-800 active:border-green-800"
      />
      <ResizablePanel defaultSize={30} className="static bottom-0 bg-cyan-200">
        <CardContainer />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
