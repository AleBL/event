import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fonte = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function BigLogo() {
  return (
    <Link
      href="/"
      className={`flex flex-col items-center gap-2 ${fonte.className}`}>
      <Image src="/logo.svg" width={100} height={100} alt="Logo" />
      <h1 className="flex flex-col items-center text-5xl">
        <div>
          DIGITAL INVITATION
        </div>
      </h1>
    </Link>
  );
}
