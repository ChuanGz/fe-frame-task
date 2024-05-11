import {
  ResizableHandle,
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
      <TableContainer />
      <ResizableHandle withHandle />
      <CardContainer />
    </ResizablePanelGroup>
  );
}
