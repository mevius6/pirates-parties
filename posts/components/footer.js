import Container from "./container";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-lime border-t border-black">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-center">
          <Logo width={"50%"} />
        </div>
      </Container>
    </footer>
  );
}
