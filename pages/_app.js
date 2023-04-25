import GitHubButton from "@/components/GitHubButton";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <GitHubButton />
        </>
    );
}
