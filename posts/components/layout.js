// import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Nav from "./nav";
import { loadNav } from "@/lib/nav";

export default function Layout({ preview, children }) {
  const links = [
    {
    //   'id': 0,
    //   'title': 'Все статьи',
    //   'path': '/',
    // }, {
      'id': 1,
      'title': 'Главная',
      'path': '/'
    }, {
      'id': 2,
      'title': 'О нас',
      'path': '/#about'
    }, {
      'id': 3,
      'title': 'Магазин',
      'path': '/#goods'
    }, {
      'id': 4,
      'title': 'Прогулки',
      'path': '/river-devil'
    }, {
      'id': 5,
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
