import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import { Button } from "@mui/material";

const SignIn = () => {
  const siginInWithGoogle = async () => {
    try {
      console.log("googleでログインを開始します");
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("email");
      provider.addScope("profile");

      // ポップアップ設定を追加
      provider.setCustomParameters({
        prompt: "select_account",
        display: "popup",
      });

      // ポップアップサイズを指定してウィンドウを開く
      const auth2 = firebase.auth();
      auth2.useDeviceLanguage(); // ブラウザの言語を使用

      const result = await auth.signInWithPopup(provider);
      console.log("ログイン成功:", result.user);
    } catch (error) {
      console.error("認証エラー:", error);
      console.log("エラーコード:", error.code);
      console.log("エラーメッセージ:", error.message);
    }
  };
  return (
    <div>
      <Button onClick={siginInWithGoogle}>googleでログインする</Button>
    </div>
  );
};

export default SignIn;
