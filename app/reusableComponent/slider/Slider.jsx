import "../../globals.css";

const Slider = ({ label, value }) => {
  return (
    <div className="slider-container">
      <label className="slider-label">{label}</label>
      <div className="slider-wrapper">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          className="slider"
          style={{
            background: `linear-gradient(to right, #FD6F00 ${value}%, #EDECEC ${value}%)`,
          }}
          disabled
        />
      </div>
    </div>
  );
};

export default Slider;
