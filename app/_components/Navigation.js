import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href={"/"}>Home Page</Link>
      </li>
      <li>
        <Link href={"/cabins"}>Cabins Page</Link>
      </li>
      <li>
        <Link href={"/about"}>About Page</Link>
      </li>
      <li>
        <Link href={"/account"}>Account Page</Link>
      </li>
    </ul>
  );
}
