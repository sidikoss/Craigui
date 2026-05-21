import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOMeta';
import { SITE_CONTENT } from '../content/siteContent';

const SECTIONS = [
  {
    title: '1. Editeur du site',
    lines: [
      `Raison sociale: ${SITE_CONTENT.company.legalName}`,
      `Nom commercial: ${SITE_CONTENT.company.name}`,
      `Adresse: ${SITE_CONTENT.company.address}`,
      `Email: ${SITE_CONTENT.contacts.email}`,
      `Telephone: ${SITE_CONTENT.contacts.phoneDisplay}`,
    ],
  },
  {
    title: '2. Direction de publication',
    lines: [`Responsable: ${SITE_CONTENT.legal.publicationDirector}`],
  },
  {
    title: '3. Hebergement',
    lines: [`Hebergeur technique: ${SITE_CONTENT.legal.hostingProvider}`],
  },
  {
    title: '4. Propriete intellectuelle',
    lines: [
      'Les contenus de cette vitrine (textes, mise en page, elements graphiques) sont proteges.',
      'Toute reproduction sans autorisation prealable est interdite.',
    ],
  },
  {
    title: '5. Donnees de contact',
    lines: [
      'Les informations transmises via le formulaire servent uniquement au traitement des demandes commerciales.',
      'Vous pouvez demander la correction ou la suppression de vos informations via les coordonnees ci-dessus.',
    ],
  },
  {
    title: '6. Limitation de responsabilite',
    lines: [
      'Les informations sont fournies a titre indicatif et peuvent evoluer.',
      'Les tarifs definitifs sont confirmes dans un devis personnalise.',
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <SEOHead path="/mentions-legales" />

      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-guinea-red hover:underline">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour a l accueil
        </Link>

        <h1 className="mt-5 text-4xl font-extrabold text-zinc-900 dark:text-white">Mentions legales</h1>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
          Derniere mise a jour: {SITE_CONTENT.legal.termsUpdatedAt}
        </p>

        <div className="mt-8 space-y-6">
          {SECTIONS.map((section) => (
            <section key={section.title} className="card p-6">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{section.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                {section.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
