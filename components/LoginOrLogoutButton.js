import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginOrLogoutButton() {
    const { user, username } = {};
    return (
        <>
            {/* user is signed-in and has username */}
            {username && (
                <>
                    <li className="push-left">
                        <button onClick={signOut}>Sign Out</button>
                    </li>
                    <li>
                        <Link href="/admin">
                            <button className="btn-blue">Write Posts</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${username}`}>
                            <img src={user?.photoURL || "/hacker.png"} />
                        </Link>
                    </li>
                </>
            )}

            {/* user is not signed OR has not created username */}
            {!username && (
                <li>
                    <Link href="/notes">
                        <button className="btn-blue">Log in</button>
                    </Link>
                </li>
            )}
        </>
    );
}
