import { useNavigate } from "react-router-dom";
import Button from "./part/Button";

const Header = () => {
  const navigateHome = useNavigate();

  return (
    <header>
      <h2>I'm Header!</h2>
      <Button
        innerText={"Home"}
        onClick={() => {
          navigateHome("/");
        }}
      />
    </header>
  );
};

export default Header;
