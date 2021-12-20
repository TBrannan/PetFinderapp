import PropTypes from "prop-types";
import { FaPaw } from "react-icons/fa";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>
        {title}
        <FaPaw style={{ color: "black" }} />
      </h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Pet Finder",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
