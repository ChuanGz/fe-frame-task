import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { TableContainer } from "./table-container";
import { CardContainer } from "./card-container";

export function ResizableContainer() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full bg-purple-100 border"
    >
      <ResizablePanel defaultSize={70}>
        <TableContainer />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30}>
        <CardContainer />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
