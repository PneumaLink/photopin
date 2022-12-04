import { useNavigate } from "react-router-dom";
import Button from "./part/Button";

const Header = () => {
  const navigateHome = useNavigate();

  return (
    <Header>
      <h2>I'm Header!</h2>
      <Button
        innerText={"Home"}
        onClick={() => {
          navigateHome("/");
        }}
      />
    </Header>
  );
};

export default Header;
