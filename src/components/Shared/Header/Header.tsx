import Navigation from '@/components/NavigationUI/Navigation';
import HeaderTitle from '@/components/Shared/Header/HeaderTitle';
import { SITE_NAME } from '@/components/Shared/dynamicSiteName';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="HeaderBar">
      <div className="HeaderLeft">
        <Link
          to="/"
          className="SiteLogo"
          aria-label="Home"
        >
          <img
            src="/favicon/NetNotes.webp"
            alt="NetNotes logo"
            className="SiteLogoImg"
          />
        </Link>
        <HeaderTitle
          text={SITE_NAME}
          asLink
          to="/"
          ariaLabel="Home"
        />
      </div>
      <div className="HeaderRight">
        <Navigation />
      </div>
    </header>
  );
}