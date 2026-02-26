import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function parseHttpDate(value: string | null): Date | null {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

async function getFrontendLastUpdated(): Promise<Date | null> {
  try {
    // Same-origin HEAD: should return Last-Modified for the deployed HTML
    const res = await fetch("/", { method: "HEAD", cache: "no-store" });
    const lm = res.headers.get("last-modified");
    const parsed = parseHttpDate(lm);
    if (parsed) return parsed;
  } catch {
    // ignore and fallback
  }

  // Often derived from Last-Modified too; not perfect, but better than nothing.
  return parseHttpDate(document?.lastModified ?? null);
}

export default function Footer() {
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      const d = await getFrontendLastUpdated();
      if (alive) setLastUpdated(d);
    })();
    return () => {
      alive = false;
    };
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  const lastUpdatedText = useMemo(() => {
    if (!lastUpdated) return "Last updated: —";
    return `Last updated: ${lastUpdated.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    })}`;
  }, [lastUpdated]);

  return (
    <footer className="siteFooter" role="contentinfo">
      <div className="footerInner pageContainer">
        <div className="footerLeft">
          <nav aria-label="Footer">
            <ul className="footerLinks">
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footerRight">
          <nav aria-label="Site links">
            <ul className="utilityLinks">
              <li>
                <Link to="/updates">Updates</Link>
              </li>
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footerMeta">
        <div className="metaInner pageContainer">
          <div className="metaLeft">
            <span>© {year} NetNotes</span>
            <span className="dot">•</span>
            <span>Built as a learning reference</span>
          </div>

          <div className="metaRight">
            <span>{lastUpdatedText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}