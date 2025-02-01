import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import SendMessage from "./SendMessage";
import { db, auth } from "../firebase";

const Line = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    try {
      const unsubscribe = db
        .collection("messages")
        .orderBy("createdAt", "asc")
        .limit(50)
        .onSnapshot(
          (snapshot) => {
            const newMessages = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setMessages(newMessages);
          },
          (error) => {
            console.error("Firestore監視エラー:", error);
          }
        );

      // コンポーネントのアンマウント時にリスナーを解除
      return () => unsubscribe();
    } catch (error) {
      console.error("Firestore接続エラー:", error);
    }
  }, []);

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div
            key={id}
            className={`msg ${
              uid === auth.currentUser.uid ? "sent" : "received"
            }`}
          >
            <img src={photoURL} alt="user" />
            <p>{text}</p>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};

export default Line;
