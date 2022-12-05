import { useNavigate } from "react-router-dom";
import Button from "./part/Button";

const Header = () => {
  const navigateHome = useNavigate();

  return (
    <header>
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
