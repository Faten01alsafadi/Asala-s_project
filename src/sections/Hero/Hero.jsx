import Button from "../../components/Button/Button";

function Hero({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <Button title="Get Started" className="heroBtn" />
     
    </div>
  );
}

export default Hero;
