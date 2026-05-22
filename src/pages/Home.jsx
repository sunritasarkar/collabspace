import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
     <div className="flex flex-col items-center justify-center h-[80vh] gap-6">
  <h1 className="text-5xl font-bold">
    CollabSpace
  </h1>

  <Button>Get Started</Button>
</div>
    </div>
  );
}
export default Home;