import PropTypes from "prop-types";
import Request from "./Dropdown";

const Content = () => {
  return (
    <div className="dropdown">
      <br />
      <div className="box1">
        <label className="droptitle">Animal</label>
        <Request />
      </div>
      <br />
      <div className="box2">
        <label className="droptitle">Breed</label>
        <select className="droptext" name="gender">
          <option value="any">Any</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <br />
      <div className="box3">
        <label className="droptitle">Color</label>
        <select className="droptext" name="gender">
          <option value="any">Any</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <br />
      <div className="box4">
        <label className="droptitle">Gender</label>
        <select className="droptext" name="gender">
          <option value="any">Any</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <br />
      <div className="box5">
        <label className="droptitle">Zicode</label>
        <input className="droptitle" type="text" name="zipcode" />
      </div>
      <br />
      <div className="box6">
        <label className="droptitle">Distance</label>
        <select className="droptext" name="gender">
          <option value="any">Any</option>
          <option value="male">10 mi</option>
          <option value="female">20 mi</option>
          <option value="other">30 mi</option>
        </select>
        <br />
      </div>
    </div>
  );
};

Content.defaultProps = {
  title: "Pet Finder",
  Student: "Stank",
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Content;
