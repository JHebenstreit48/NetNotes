import Navigation from "@/Components/NavigationUI/Navigation";
import HeaderTitle from "@/Components/Shared/Header/HeaderTitle";

export default function Header() {
  return (
    <header className="HeaderBar">
      <div className="HeaderLeft">
        {/* Always the site name here */}
        <HeaderTitle text="NetNotes" />
      </div>
      <div className="HeaderRight">
        <Navigation />
      </div>
    </header>
  );
}