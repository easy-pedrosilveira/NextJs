import { Sidebar, Content, Footer } from "@/components";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}
