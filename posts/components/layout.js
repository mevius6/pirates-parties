// import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Nav from "./nav";
import { NAV_LINKS } from "@/lib/constants";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Nav navItems={NAV_LINKS} />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
