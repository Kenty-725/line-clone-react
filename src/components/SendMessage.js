import { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const SendMessage = () => {
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();

    db.collection("messages").add({
      text: message,
      uid: auth.currentUser.uid,
      photoURL: auth.currentUser.photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            type="text"
            placeholder="メッセージを入力"
            onChange={(d) => setMessage(d.target.value)}
            value={message}
          />
          <SendIcon />
        </div>
      </form>
      {console.log(message)}
    </div>
  );
};

export default SendMessage;
