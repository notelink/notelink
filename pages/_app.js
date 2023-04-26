import GitHubButton from "@/components/GitHubButton";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <GitHubButton />
        </>
    );
}
