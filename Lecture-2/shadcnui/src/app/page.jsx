import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
export default function Home() {
  return (
    <div className=" h-[100vh] bg-black">
      <div className="w-full h-12 bg-black flex items-center gap-4">
        <Badge className="h-8 w-24 font-medium">Popular</Badge>
        <Badge className="h-8 w-24 font-medium">Thriller</Badge>
        <Badge className="h-8 w-24 font-medium">Most Viewed</Badge>
      </div>
      <Button>Click Me</Button>
    </div>
  );
}
