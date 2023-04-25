import Link from "next/link";
import { useRouter } from "next/router";
import LoginOrLogoutButton from "./LoginOrLogoutButton";

// Top navbar
export default function Navbar() {
    const { user, username } = {};

    const router = useRouter();

    const signOut = () => {
        auth.signOut();
        router.reload();
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">NoteLink</button>
                    </Link>
                </li>

                {/* user is signed-in and has username */}
                <LoginOrLogoutButton />
            </ul>
        </nav>
    );
}
