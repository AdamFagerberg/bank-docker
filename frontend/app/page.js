import Navbar from "./components/Navbar";
import RegisterButton from "./components/RegisterButton";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center h-screen items-center">
        <RegisterButton />
      </div>
    </main>
  );
}
