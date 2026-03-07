import Link from "next/link";

export default function Leem() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Leem</h1>
      <p><b>Name:</b> Abdulhaleem Srisuk</p>
      <p><b>Student ID:</b> 6720210095</p>
      <p><b>Skills:</b> HTML, CSS, Git</p>

      <Link href="/">Back to Home</Link>
    </main>
  );
}