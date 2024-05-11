import { Button } from "@/shadcn-ui-components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn-ui-components/ui/card";
import { Input } from "@/shadcn-ui-components/ui/input";
import { Label } from "@/shadcn-ui-components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn-ui-components/ui/select";

export const CardContainer = () => {
  return (
    <div>
      {" "}
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create new User</CardTitle>
          <CardDescription>create a new user in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">User Name</Label>
                <Input id="name" placeholder="Input your username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">User Group</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Sales</SelectItem>
                    <SelectItem value="sveltekit">IT</SelectItem>
                    <SelectItem value="astro">HR</SelectItem>
                    <SelectItem value="nuxt">Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Create</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
