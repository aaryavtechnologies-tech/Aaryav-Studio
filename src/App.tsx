import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLandingPage } from './pages/MainLandingPage';

// Lazy-load pages for optimal Core Web Vitals and fast initial bundle
const GoogleAdsLandingPage = lazy(() =>
  import('./pages/GoogleAdsLandingPage').then((m) => ({ default: m.GoogleAdsLandingPage }))
);
const ThankYouPage = lazy(() =>
  import('./pages/ThankYouPage').then((m) => ({ default: m.ThankYouPage }))
);

function PageLoadingFallback() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center font-mono text-xs font-black uppercase text-black">
      <div className="bg-[#FFE15A] border-3 border-black p-4 shadow-[4px_4px_0px_#000000] flex items-center gap-2">
        <span className="w-2.5 h-2.5 bg-black animate-ping"></span>
        <span>LOADING AARYAV STUDIOS...</span>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          {/* Main Website Route (Completely Unaltered) */}
          <Route path="/" element={<MainLandingPage />} />

          {/* Dedicated Google Ads Landing Page */}
          <Route path="/google-ads" element={<GoogleAdsLandingPage />} />

          {/* Lead Submission Confirmation Page */}
          <Route path="/thank-you" element={<ThankYouPage />} />

          {/* Fallback to Home for unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
