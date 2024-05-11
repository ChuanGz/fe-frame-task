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
      className="w-full h-auto pt-5 mt-5 pb-0 mb-0"
    >
      <ResizablePanel defaultSize={70} className="bg-purple-100">
        <TableContainer />
      </ResizablePanel>
      <ResizableHandle
        withHandle
        className="border-8 border-cyan-950 hover:border-blue-800 active:border-green-800"
      />
      <ResizablePanel defaultSize={30} className="bg-cyan-100">
        <CardContainer />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
