//import//
import { useState } from "react";
import { auth } from "../firebase/firebaseAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

export const SignIn: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModal(!modal);
    setMessage("")
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signIn = async (): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed In!");
      setEmail("");
      setPassword("");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/wrong-password") {
          setMessage("Incorrect Password!");
        } else if (error.code === "auth/user-not-found") {
          setMessage("No user with that email found!");
        } else if (error.code === "auth/invalid-email") {
          setMessage("Must enter a valid email!");
        } else {
          console.error(error.code as string);
          setMessage("Error signing in user!");
        }
      }
    }
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn();
  };

  return (
    <div className="flex flex-col items-end px-4">
      <button onClick={handleModal}>Sign In</button>
      <div
        className={
          modal ? "fixed w-[420px] bg-blue-200 top-20 right-10" : "hidden"
        }
      >
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center p-2"
        >
          <h1 className="text-3xl font-bold">Sign In</h1>
          <div className="w-full border rounded-full p-2 flex justify-between m-2">
            <input
              type="text"
              placeholder="Email..."
              onChange={handleEmail}
              value={email}
              className="bg-transparent outline-none px-4 w-full"
            />
            <AiOutlineUser size={30} />
          </div>
          <div className="w-full border rounded-full p-2 flex justify-between m-2">
            <input
              type="password"
              placeholder="Password..."
              onChange={handlePassword}
              value={password}
              className="bg-transparent outline-none px-4 w-full"
            />
            <AiOutlineLock size={30} />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-white py-2 m-2 font-bold"
          >
            Sign In
          </button>
          <p className="text-red-600">{message}</p>
        </form>
      </div>
    </div>
  );
};
