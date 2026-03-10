import Link from "next/link"; 
import Image from "next/image";
export default function leem() { 
return ( 
<main style={{ padding: 24 }}> 
<h1>leem Profile</h1> 
<Image
        src="/leem.jpg"
        width={200}
        height={200}
        alt="leem"
      />
<p><b>Name:</b> Abdulhallem Srisuk</p> 
<p><b>Student ID:</b> 6720210095</p> 
<p><b>Skills:</b> HTML, CSS, Git</p> 
<Link href="/">Back to Home</Link> 
</main> 
); 
} 