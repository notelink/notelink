import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Enter from "./enter";
import LoginOrLogoutButton from "@/components/LoginOrLogoutButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <Head>
                <title>Note Link</title>
                <meta name="description" content="Notes sharing platform : NoteLink" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/notelinkicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>Share your Notes with the world 🌏 !!!</p>
                </div>

                <div className={styles.center}>
                    <div className={styles.thirteen}>
                        <Image src="/notelink.png" alt="notelink" width={70} height={70} priority />
                    </div>
                    <div className={styles.center}>
                        <Enter />
                    </div>
                </div>
                <div className={styles.grid}>
                    <a href="#" className={styles.card} rel="noopener noreferrer">
                        <h2 className={inter.className}>
                            warning⚠️ <span>-&gt;</span>
                        </h2>
                        <i className={inter.className}>
                            Logging in as an anonymous user restricts further access to the account
                            and limits note accessibility to links, thus using Google sign-in is
                            preferred.
                        </i>
                    </a>
                </div>
            </main>
        </div>
    );
}
