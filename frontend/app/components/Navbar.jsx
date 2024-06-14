import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-between m-10 font-bold text-slate-800 text-xl">
        <Link href={"/"}>Logo</Link>
        <div className="flex flex-row gap-5">
          <Link href={"/"} className="hover:text-slate-500 hover:underline">
            Home
          </Link>
          <Link
            href={"/login"}
            className="hover:text-slate-500 hover:underline"
          >
            Log in
          </Link>
          <Link
            href={"/register"}
            className="hover:text-slate-500 hover:underline"
          >
            Register
          </Link>
        </div>
      </nav>
    </>
  );
}
