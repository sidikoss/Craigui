import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOMeta';
import { SITE_CONTENT } from '../content/siteContent';

const COMMITMENTS = [
  {
    title: 'Qualite controlee',
    description: 'Chaque lot suit un controle simple avant expédition pour maintenir une qualite reguliere.',
  },
  {
    title: 'Approche terrain',
    description: 'Nous adaptons les conditionnements et rythmes de livraison a vos contraintes locales.',
  },
  {
    title: 'Relation long terme',
    description: 'Nous visons des partenariats durables avec ecoles, instituts et distributeurs.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead path="/a-propos" />

      <div className="space-y-16 py-12">
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Presentation</p>
            <h1 className="mt-2 text-4xl font-extrabold text-zinc-900 dark:text-white">A propos de {SITE_CONTENT.company.name}</h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">{SITE_CONTENT.company.story}</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="card p-7">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Mission</p>
              <h2 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">Pourquoi nous existons</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{SITE_CONTENT.company.mission}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{SITE_CONTENT.company.slogan}</p>
            </article>

            <article className="card p-7">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Coordonnees</p>
              <h2 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">Informations entreprise</h2>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                <li>Nom: {SITE_CONTENT.company.legalName}</li>
                <li>Adresse: {SITE_CONTENT.company.address}</li>
                <li>Ville: {SITE_CONTENT.company.city}</li>
                <li>Annee de lancement: {SITE_CONTENT.company.foundedYear}</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Nos engagements</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {COMMITMENTS.map((item) => (
              <article key={item.title} className="card p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {SITE_CONTENT.trustStats.map((stat) => (
              <article key={stat.label} className="card p-5 text-center">
                <p className="text-3xl font-extrabold text-guinea-red">{stat.value}</p>
                <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-zinc-900 p-8 text-center">
            <h2 className="text-2xl font-bold text-white">Zones desservies</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-300">
              Nous organisons la livraison selon votre localisation et votre planning d achat.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {SITE_CONTENT.contacts.serviceAreas.map((area) => (
                <span key={area} className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-200">
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link to="/produits" className="btn-secondary py-2 text-sm">
                Voir les offres
              </Link>
              <Link to="/contact" className="btn-primary py-2 text-sm">
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
