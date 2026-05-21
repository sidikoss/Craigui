import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOMeta';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead path="/" />
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-6 text-7xl font-extrabold text-guinea-red/30">404</div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Page introuvable</h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-zinc-600 dark:text-zinc-300">
            La page demandee n existe pas ou a ete deplacee.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="btn-primary py-2 text-sm">
              Retour accueil
            </Link>
            <Link to="/contact" className="btn-secondary py-2 text-sm">
              Contacter un conseiller
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
