export default function HomeContent() {
  return (
    <>
      <div className="siteInfoContent">
        NetNotes is a personal knowledge base for <span className="emphasis">IT networking</span>, with an emphasis on
        Cisco technologies and certification paths like CCNA and CCNP. It was built to help consolidate and refresh
        everything I've learned from past certifications in Routing &amp; Switching and Network Security, and it continues
        to evolve as I revisit foundational concepts, explore advanced topics, and expand into areas like VoIP, wireless,
        and modern network security practices.
      </div>

      <hr />

      <div className="Note">
        <strong>Note:</strong> A major refactor of navigation and routes is in progress — more granular categories &amp;
        subpages, consistent structure, and lazy-loaded routing.
      </div>

      <hr />

      {/* <div className="relatedProjects">
        <h2 className="relatedProjectsHeader">Similar Projects</h2>
        <hr />
        <ul className="projectLinks">
          <li>
            <a href="https://devscriptstax.netlify.app/" target="_blank" rel="noopener noreferrer">
              DevScriptStax
            </a>{" "}
            – Full stack web dev notes
          </li>
          <li>
            <a href="https://appfoundry.netlify.app/" target="_blank" rel="noopener noreferrer">
              AppFoundry
            </a>{" "}
            – Mobile app &amp; game development notes
          </li>
          <li>
            <a href="https://pixelprose.netlify.app/" target="_blank" rel="noopener noreferrer">
              PixelProse
            </a>{" "}
            – General game development notes
          </li>
        </ul>
      </div> */}
    </>
  );
}