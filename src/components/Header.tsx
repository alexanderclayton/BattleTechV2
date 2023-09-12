//import//
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseAuth";
import Logo from "../assets/BattleTechLogo.png";
import { SignIn } from "./SignIn";
import { Logout } from "./Logout";
import { SignUp } from "./SignUp";

export const Header: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <header className="flex justify-between items-center w-full px-4">
      <img src={Logo} alt="battletech logo" className="w-[25%]" />
      <nav className="w-[50%]">
        <ul className="flex w-full justify-center">
          <li>
            <a href="/" className="px-4">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="px-4">
              About
            </a>
          </li>
          <li>
            <a href="/all-mechs" className="px-4">
              Mechs
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex w-[25%] justify-end">
        {!user ? (
          <div className="flex items-center">
            <SignIn />
            <SignUp />
          </div>
        ) : (
          <Logout />
        )}
      </div>
    </header>
  );
};
