import Link from "next/link";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!session && <button onClick={signIn}>Login</button>}

        {session && (
          <>
            <span>Login as {session.user.name}</span>
            <Link href="/blog">My Blog</Link>
            <br />
            <button onClick={signOut}>Logout</button>
          </>
        )}
      </main>
    </div>
  );
}
