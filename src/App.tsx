import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Shared/Header/Header';
import Footer from '@/components/Shared/Footer';
import RouteTracker from '@/components/Shared/analytics/RouteTracker';
import BackToTopGate from '@/components/Shared/BackToTop/Gate';

import '@/scss/Page/Page.scss';
import '@/scss/Shared/Header/index.scss';
import '@/scss/Shared/Footer.scss';
import '@/scss/Navigation/index.scss';
import '@/scss/Shared/Error.scss';

function RouteFallback() {
  return <div className="routeFallback">Loading…</div>;
}

export default function App() {
  return (
    <div className="appContainer">
      <RouteTracker />
      <BackToTopGate />
      <Header />

      <div className="contentWrapper">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}