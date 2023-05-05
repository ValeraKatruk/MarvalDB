import img from "./fatal-error-sans-undertale-au.gif";

const ErrorMessage = () => {
  return (
    <img
      style={{
        display: "block",
        width: 260,
        heigth: 260,
        objectFit: "contain",
        margin: "0 auto",
      }}
      src={img}
      alt="Error"
    ></img>
  );
};

export default ErrorMessage;
