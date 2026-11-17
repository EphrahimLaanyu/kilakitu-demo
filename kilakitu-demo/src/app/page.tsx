import Navbar from "@/components/Navbar";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Page1 />
      <Page2 />
    </main>
  );
}