import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex items-center justify-center h-[80vh] text-5xl font-bold">
        CollabSpace
      </div>
    </div>
  );
}
export default Home;