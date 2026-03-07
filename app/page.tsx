import Image from "next/image";

export default function Home() {
 return (
 <main style={{ padding: 24 }}>
 <h1>Team Portfolio</h1>
 <p>Welcome to our team website.</p>
 <ul>
 <li><a href="/member-a">ปืน</a></li>
 <li><a href="/member-b">ลีม</a></li>
 <li><a href="/member-c">ปอนด์</a></li>
 </ul>
 </main>
 );

}
