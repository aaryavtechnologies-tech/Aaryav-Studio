import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// New High-Conversion Google Ads Landing Page as primary experience
const GoogleAdsLandingPage = lazy(() =>
  import('./pages/GoogleAdsLandingPage').then((m) => ({ default: m.GoogleAdsLandingPage }))
);
const ThankYouPage = lazy(() =>
  import('./pages/ThankYouPage').then((m) => ({ default: m.ThankYouPage }))
);
const MainLandingPage = lazy(() =>
  import('./pages/MainLandingPage').then((m) => ({ default: m.MainLandingPage }))
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
          {/* Main Website Route now points directly to the new Google Ads Landing Page */}
          <Route path="/" element={<GoogleAdsLandingPage />} />

          {/* Dedicated /google-ads route also serves the landing page */}
          <Route path="/google-ads" element={<GoogleAdsLandingPage />} />

          {/* Lead Submission Confirmation Page */}
          <Route path="/thank-you" element={<ThankYouPage />} />

          {/* Previous Portfolio Website archived at /legacy */}
          <Route path="/legacy" element={<MainLandingPage />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
