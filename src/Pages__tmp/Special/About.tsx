import AboutContent from "@/components/HomeAndAbout/aboutContent";
import "@/scss/Shared/HomeAndAbout/index.scss";

export default function About() {
  return (
    <>
      <main className="homePage">
        <div className="siteInfo">
          <AboutContent />
        </div>
      </main>
    </>
  );
}