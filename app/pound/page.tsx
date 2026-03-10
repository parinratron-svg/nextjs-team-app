import Link from "next/link"; 
import Image from "next/image";
export default function pound() { 
return ( 
<main style={{ padding: 24 }}> 
<h1>Pound Profile</h1> 
 <Image
        src="/pound.png"
        width={200}
        height={200}
        alt="pound"
      />
<p><b>Name:</b>Kittisak Nouanprachak</p> 
<p><b>Student ID:</b>6720210100</p> 
<p><b>Skills:</b> HTML, CSS, Git</p> 
<Link href="/">Back to Home</Link> 
</main> 
); 
}