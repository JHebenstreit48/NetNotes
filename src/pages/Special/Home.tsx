import { lazy, Suspense } from "react";
import HomeContent from "@/components/HomeAndAbout/homeContent";
import "@/scss/shared/HomeAndAbout/index.scss";

const QuickDash = lazy(() => import("@/components/HomeAndAbout/QuickDash"));

export default function Home() {
  return (
    <>
      <main className="homePage">
        <div className="siteInfo">
          <HomeContent />
          <Suspense fallback={null}>
            <QuickDash />
          </Suspense>
        </div>
      </main>
    </>
  );
}