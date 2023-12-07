import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-24">
      Home page
      <div className="flex gap-2">
        <Link href={"/meals"}>Meals</Link>
        <Link href={"/meals/share"}>Share</Link>
        <Link href={"/community"}>Comunity</Link>
      </div>
    </main>
  );
}
