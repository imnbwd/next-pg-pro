import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="container mx-auto py-4 flex flex-col min-h-screen ">
        <ol className="space-y-2">
          <li>
            <Link href="/toast">toast sample</Link>
          </li>
          <li>
            <Link href="/function">function test</Link>
          </li>
              <li>
            <Link href="/prop">props usage</Link>
          </li>
        </ol>        
      </div>
    </>
  );
}
