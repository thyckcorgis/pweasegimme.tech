import Head from "next/head";
import Link from "next/link";

const Header = () => (
  <>
    <Head>
      <title>Pwease gimme the tech</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Link href="https://thyck.top">
      <button className="button header">
        Back to home
      </button>
    </Link>
  </>
);

export default Header;
