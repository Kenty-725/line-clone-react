import "./App.css";
import SignIn from "./components/SignIn";
import Line from "./components/Line";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);

  console.log("認証状態:", { user, loading, error });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{user ? <Line /> : <SignIn />}</div>;
}

export default App;
