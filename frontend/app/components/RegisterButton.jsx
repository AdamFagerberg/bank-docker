import Link from "next/link";

export default function RegisterButton() {
  return (
    <>
      <Link
        href={"/register"}
        className="py-6 px-12 bg-slate-800 hover:bg-slate-700 font-bold text-slate-200 rounded-full hover:text-white opacity-90 text-xl"
      >
        Register Now!
      </Link>
    </>
  );
}
