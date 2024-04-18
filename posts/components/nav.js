import Link from "next/link";

export default function Nav({ navItems }) {
  return (
    <>
      <button className="nav-button"
        type="button"
        aria-label="Show Menu"
        aria-controls="Nav"
        title="Главное меню"
      >
        <svg
          aria-hidden="true" focusable="false"
          width="100%" height="100%" viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg">
          <path className="line" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className="line" d="M 20,50 H 80" />
          <path className="line" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" /></svg>
        </button>

      <nav className="nav" id="Nav">
        <ul className="nav__items"
          itemScope itemType="https://schema.org/SiteNavigationElement"
          aria-label="Main Menu"
        >
          {/* <li className="nav__item" key={1}>
            <Link href="/" className="nav__link font-serifDisplayConde leading-tight" itemProp="url">
              <span className="nav__link-text">Все статьи</span>
            </Link>
          </li> */}
          {navItems.map((navItem) => (
            <li className="nav__item" key={navItem.id}>
              <Link href={`https://piratykaspiyskogo.online${navItem.path}`} className="nav__link font-serifDisplayConde leading-tight" itemProp="url">
                <span className="nav__link-text">{navItem.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <footer className="page__footer sideways" itemScope="" itemType="https://schema.org/WPFooter"><p className="copr"><span itemProp="name">Pirates of Caspian sea</span> © <time dateTime="2024" itemProp="copyrightYear">2024</time></p></footer>
      </nav>
    </>
  );
}
