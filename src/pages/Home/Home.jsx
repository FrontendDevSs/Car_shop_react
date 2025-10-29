import Button from "../../components/ui/button/Button";

const Home = () => {
  return (
    <div>
      <Button dynamicClass={"button-primary"}>Pozdrav</Button>
      <Button dynamicClass={"button-secondary"}>Cao</Button>
      <Button dynamicClass={"button-tertiary"}>Pozdrav</Button>
    </div>
  );
};

export default Home;
