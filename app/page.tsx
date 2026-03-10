import Image from "next/image";

import ProfileCard from "./components/ProfileCard";
export default function Home() {
 return (
 <main style={{ padding: 24 }}>
 <h1>Team Portfolio - Developed by Student   puen</h1>
 <h1>Team Portfolio Developed by leem</h1>
 <h1>Team Portfolio - Developed by Student Pound</h1>
 <p>Welcome to our team website.</p>
 <ul>
 <li><a href="/puen">puen</a></li>
 <li><a href="/leem">leem</a></li>
 <li><a href="/pound">pound</a></li>
 </ul>
  <ProfileCard name="puen" link="/puen" />
  <ProfileCard name="leem" link="/leem" /> 
<ProfileCard name="pound" link="/pound" />
 </main>
 );

}
