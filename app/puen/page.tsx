import Link from "next/link";
import Image from "next/image";
export default function puen() {
 return (
 <main style={{ padding: 24 }}>
 <h1>puen  Profile</h1>
  <Image
        src="/puen.png"
        width={200}
        height={200}
        alt="puen"
      />
 <p><b>Name:</b> Parinyatorn Nakin</p>
 <p><b>Student ID:</b> 6720210043</p>
 <p><b>Skills:</b> HTML, CSS, Git</p>
 <Link href="/">Back to Home</Link>
 </main>
 );
}