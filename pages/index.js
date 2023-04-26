import { useState } from "react";
import { useRouter } from "next/router";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { v4 as uuidv4 } from "uuid";
//import { firestore, db } from "@/lib/firebase";
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

const Notes = () => {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [note, setNote] = useState("");
    const [notes, loading, error] = useCollectionData(
        db.collection("notes").where("password", "==", password),
        { idField: "id" }
    );

    const createNote = async () => {
        console.log(`createNote`);
        const id = uuidv4();
        await db.collection("notes").doc(id).set({
            id,
            password,
            note,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        router.push(`/notes/${id}`);
    };

    return (
        <div>
            <h1>Create a Note</h1>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <label>
                Note:
                <textarea value={note} onChange={(e) => setNote(e.target.value)} />
            </label>
            <br />
            <button onClick={createNote}>Create Note</button>
            {error && <p>Error: {error.message}</p>}
            {loading && <p>Loading...</p>}
            {notes && notes.length > 0 && (
                <>
                    <h2>Existing Notes</h2>
                    <ul>
                        {notes.map((note) => (
                            <li key={note.id}>
                                <a href={`/notes/${note.id}`}>{note.id}</a>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Notes;
