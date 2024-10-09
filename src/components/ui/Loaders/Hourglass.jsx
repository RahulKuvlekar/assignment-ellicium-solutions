import hourglassGif from "@/assets/hourglass.gif";

const Hourglass = ({ size = 40 }) => {
  return (
    <img
      src={hourglassGif}
      alt="Hourglass loader"
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default Hourglass;
