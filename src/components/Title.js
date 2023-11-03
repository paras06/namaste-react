import FoodFireLogo from "../../images/Logo.png";

import { LOGO_PATH } from "../utils/constants";

// Title component for Logo
const Title = () => {
  return (
    <div>
      <img className="logo" src={FoodFireLogo} alt="Food Fire Logo"></img>
    </div>
  );
};

export default Title;
