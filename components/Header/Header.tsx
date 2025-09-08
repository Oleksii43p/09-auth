import Link from 'next/link';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <AuthNavigation />
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
