import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/shared/Header/Header';
import Footer from '@/components/shared/Footer';
import RouteTracker from '@/components/shared/analytics/RouteTracker';
import BackToTopGate from '@/components/shared/BackToTop/Gate';

import '@/scss/shared/Page.scss';
import '@/scss/shared/header/index.scss';
import '@/scss/shared/Footer.scss';
import '@/scss/navigation/index.scss';
import '@/scss/shared/Error.scss';

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