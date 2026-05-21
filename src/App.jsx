import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useCallback } from 'react';
import RootLayout from './components/layout/RootLayout';
import ErrorBoundary from './components/ErrorBoundary';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const MentionsLegalesPage = lazy(() => import('./pages/MentionsLegalesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function LoadingSpinner() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Chargement en cours">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-guinea-red border-t-transparent" />
        <p className="sr-only text-zinc-500">Chargement...</p>
      </div>
    </div>
  );
}

export default function App() {
  const renderRoute = useCallback(
    (Component) => (
      <Suspense fallback={<LoadingSpinner />}>
        <Component />
      </Suspense>
    ),
    [],
  );

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={renderRoute(HomePage)} />
          <Route path="produits" element={renderRoute(ProductsPage)} />
          <Route path="a-propos" element={renderRoute(AboutPage)} />
          <Route path="contact" element={renderRoute(ContactPage)} />
          <Route path="mentions-legales" element={renderRoute(MentionsLegalesPage)} />
          <Route path="*" element={renderRoute(NotFoundPage)} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
