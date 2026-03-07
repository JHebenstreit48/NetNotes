import Header from '@/Components/Shared/Header/Header';
import '@/scss/Shared/Home/Home.scss';          // base + glass card
import '@/scss/Shared/RelatedProjects.scss';   // overrides only

export default function RelatedProjects() {
  return (
    <>
      <Header />

      <main className="homePage">  {/* ← match Home's wrapper class */}
        <div className="siteInfo">  {/* ← match Home's glass card class */}
          <h1>Related Projects</h1>
          <hr />

          <p>
            Here are some of my other knowledge bases and projects that cover complementary topics:
          </p>

          <ul className="projectLinks">
            <li>
              <a href="https://devscriptstax.netlify.app/" target="_blank" rel="noopener noreferrer">
                DevScriptStax
              </a>{' '}
              – Full stack web development notes
            </li>
            <li>
              <a href="https://appfoundry.netlify.app/" target="_blank" rel="noopener noreferrer">
                AppFoundry
              </a>{' '}
              – Mobile app & game development notes
            </li>
            <li>
              <a href="https://pixelprose.netlify.app/" target="_blank" rel="noopener noreferrer">
                PixelProse
              </a>{' '}
              – General game development notes
            </li>
          </ul>

          <p>
            Feel free to explore them if you're interested in broader development topics!
          </p>
        </div>
      </main>
    </>
  );
}