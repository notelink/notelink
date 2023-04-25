import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

export default function Enter(props) {
    const { user, username } = {};

    // 1. user signed out <SignInButton />
    // 2. user signed in, but missing username <UsernameForm />
    // 3. user signed in, has username <SignOutButton />
    return (
        <main className={styles.center}>
            <UsernameForm />
            <SignOutButton /> <SignInButton />{" "}
        </main>
    );
}

// Sign in with Google button
function SignInButton() {
    return (
        <>
            <button
                className="btn-google"
                onClick={() => {
                    console.log("login in with google");
                }}
            >
                <img src={"/google.png"} width="30px" /> Sign in with Google
            </button>
            <button onClick={() => console.log("login successfully")}>Sign in Anonymously</button>
        </>
    );
}

// Sign out button
function SignOutButton() {
    return <button onClick={() => console.log("logout successfully")}>Sign Out</button>;
}

// Username form
function UsernameForm() {
    const [formValue, setFormValue] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        // Force form value typed in form to match correct format
        const val = e.target.value.toLowerCase();
        const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

        // Only set form value if length is < 3 OR it passes regex
        if (val.length < 3) {
            setFormValue(val);
            setLoading(false);
            setIsValid(false);
        }

        if (re.test(val)) {
            setFormValue(val);
            setLoading(true);
            setIsValid(false);
        }
    };

    //

    // useEffect(() => {
    //     checkUsername(formValue);
    // }, [formValue]);

    // Hit the database for username match after each debounced change
    // useCallback is required for debounce to work
    //const checkUsername = useCallback(true);

    var username = "";

    return (
        // !username && (
        //     <section>
        //         <h3>Choose Username</h3>
        //         <form onSubmit={onSubmit}>
        //             <input
        //                 name="username"
        //                 placeholder="myname"
        //                 value={formValue}
        //                 onChange={onChange}
        //             />
        //             <UsernameMessage username={formValue} isValid={isValid} loading={loading} />
        //             <button type="submit" className="btn-green" disabled={!isValid}>
        //                 Choose
        //             </button>

        //             <h3>Debug State</h3>
        //             <div>
        //                 Username: {formValue}
        //                 <br />
        //                 Loading: {loading.toString()}
        //                 <br />
        //                 Username Valid: {isValid.toString()}
        //             </div>
        //         </form>
        //     </section>
        // )
        <></>
    );
}

function UsernameMessage({ username, isValid, loading }) {
    if (loading) {
        return <p>Checking...</p>;
    } else if (isValid) {
        return <p className="text-success">{username} is available!</p>;
    } else if (username && !isValid) {
        return <p className="text-danger">That username is taken!</p>;
    } else {
        return <p></p>;
    }
}
