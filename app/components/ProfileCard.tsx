import Link from "next/link";
export default function ProfileCard({ name, link }: { name: string; link:
string }) {
 return (
 <div style={{ border: "1px solid #ccc", padding: 16, marginBottom: 12
}}>
 <h2>{name}</h2>
 <Link href={link}>View Profile</Link>
 </div>
 );
}