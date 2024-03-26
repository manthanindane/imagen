import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
<div className="flex flex-col justify-center items-center h-screen">

   <Link href="/aboutus"> <Button>About Us</Button></Link>
    <Link href="/register"> <Button>Register</Button></Link>

   </div>
    </>
  );
}
