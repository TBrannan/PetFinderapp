import PropTypes from "prop-types";

const Content = () => {
  return (
    <div className="dropdown">
      <label className="droptitle">Animal</label>
      <select className="droptext" name="Animal">
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Bird">Bird</option>
      </select>
      <br />
      <label className="droptitle">Breed</label>
      <select value="test" className="droptext" name="gender">
        <option value="any">Any</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <br />
      <label className="droptitle">Color</label>
      <select className="droptext" name="gender">
        <option value="any">Any</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <br />
      <label className="droptitle">Gender</label>
      <select className="droptext" name="gender">
        <option value="any">Any</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <br />
      <div>
        <label className="ziptitle">Zicode</label>
        <input className="zipbox" type="text" name="zipcode" />
        <br />
        <label className="droptitle">Distance</label>
        <select className="droptext" name="gender">
          <option value="any">Any</option>
          <option value="male">10 mi</option>
          <option value="female">20 mi</option>
          <option value="other">30 mi</option>
        </select>
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
