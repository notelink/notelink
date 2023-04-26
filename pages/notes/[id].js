import { useState } from "react";
import { useRouter } from "next/router";
import { useDocumentData } from "react-firebase-hooks/firestore";
// import { firebase, db } from "@/lib/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDahe-6GdnVlzMLFE-FEB-XE-Edh0PCZKg",
        authDomain: "notelink-87a56.firebaseapp.com",
        projectId: "notelink-87a56",
    });
}

export const db = firebase.firestore();
export const auth = firebase.auth();

const Note = () => {
    const router = useRouter();
    const { id } = router.query;
    const [password, setPassword] = useState("");
    const [note, loading, error] = useDocumentData(db.collection("notes").doc(id), {
        idField: "id",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note.password === password) {
            alert(note.note);
        } else {
            alert("Incorrect password");
        }
    };

    return (
        <div>
            <h1>Note {id}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">View Note</button>
            </form>
            {error && <p>Error: {error.message}</p>}
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default Note;
