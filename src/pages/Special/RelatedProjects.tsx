import "@/scss/shared/homeAndAbout/index.scss";
import '@/scss/shared/RelatedProjects.scss';

export default function RelatedProjects() {
  return (
    <>

      <main className="homePage">
        <div className="siteInfo">
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