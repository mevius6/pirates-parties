// import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Nav from "./nav";
import { loadNav } from "@/lib/nav";

export default function Layout({ preview, children }) {
  const links = [
    {
      'title': 'Главная',
      'path': '/'
    }, {
      'title': 'О нас',
      'path': '/#about'
    }, {
      'title': 'Магазин',
      'path': '/#goods'
    }, {
      'title': 'Журнал',
      'path': '/',
    }, {
      'title': 'Прогулки',
      'path': '/river-devil'
    }, {
      'title': 'Контакты',
      'path': '/#contact'
    }
  ]
  const nav = loadNav('.nav-button');

  return (
    <>
      <Meta />
      <Nav navItems={links} />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
