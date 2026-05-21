import { Link } from 'react-router-dom';
import QuoteCalculator from '../components/QuoteCalculator';
import { SEOHead } from '../components/seo/SEOMeta';
import { SITE_CONTENT } from '../content/siteContent';
import { buildWhatsAppUrl, formatCurrency } from '../utils/whatsapp';

export default function HomePage() {
  const highlights = SITE_CONTENT.productRanges.filter((item) => item.highlighted).slice(0, 3);
  const whatsappCta = buildWhatsAppUrl('Bonjour, je souhaite obtenir un devis rapide pour des craies scolaires.');

  return (
    <>
      <SEOHead path="/" />

      <div className="space-y-20 pb-12">
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-zinc-50 py-20 dark:from-zinc-950 dark:to-zinc-900">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -right-16 -top-16 h-80 w-80 rounded-full bg-guinea-red/15 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-guinea-yellow/20 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="inline-flex rounded-full bg-zinc-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.12em] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  Vente de craie B2B
                </p>
                <h1 className="mt-5 text-4xl font-extrabold leading-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
                  {SITE_CONTENT.company.heroTitle}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {SITE_CONTENT.company.heroSubtitle}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link to="/contact" className="btn-primary text-base">
                    Demander un devis
                  </Link>
                  <Link to="/produits" className="btn-secondary text-base">
                    Voir les gammes
                  </Link>
                  <a href={whatsappCta} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
                    WhatsApp direct
                  </a>
                </div>
              </div>

              <aside className="card p-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-guinea-red">Points forts</p>
                <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                  {SITE_CONTENT.valueProps.map((value) => (
                    <li key={value} className="flex items-start gap-2">
                      <span className="mt-0.5 text-guinea-green">●</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-xl bg-zinc-100 px-4 py-3 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  Delai de reponse commercial: <strong>{SITE_CONTENT.contacts.responseTime}</strong>
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {SITE_CONTENT.trustStats.map((stat) => (
              <article key={stat.label} className="card p-5 text-center">
                <p className="text-3xl font-extrabold text-guinea-red">{stat.value}</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Produits</p>
              <h2 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">Gammes les plus demandees</h2>
            </div>
            <Link to="/produits" className="btn-secondary py-2 text-sm">
              Explorer toutes les offres
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {highlights.map((product) => (
              <article key={product.id} className="card p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{product.summary}</p>
                <p className="mt-4 text-sm font-semibold text-guinea-green">
                  A partir de {formatCurrency(product.fromPrice, SITE_CONTENT.pricingFrom.currency)}
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {product.useCases.slice(0, 2).map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Simulation</p>
              <h2 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">Estimez votre budget rapidement</h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                Choisissez un type de produit, une quantite et votre zone de livraison. Vous obtenez une estimation
                immediate, puis vous pouvez envoyer le recapitulatif sur WhatsApp.
              </p>
            </div>
            <QuoteCalculator />
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Temoignages</p>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">Ce que disent nos clients</h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {SITE_CONTENT.testimonials.map((item) => (
              <article key={item.name} className="card p-6">
                <p className="text-sm italic leading-relaxed text-zinc-600 dark:text-zinc-300">"{item.quote}"</p>
                <div className="mt-5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                  <p className="font-semibold text-zinc-900 dark:text-white">{item.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.role} - {item.city}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-zinc-900 p-8 text-center sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-400">Partenariat</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Besoin d un fournisseur stable pour votre structure ?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-300">
              Nous preparons une offre adaptee a votre frequence d achat et a vos contraintes logistiques.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-zinc-900">
                Demander un devis detaille
              </Link>
              <a href={whatsappCta} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-3 text-sm">
                Contacter WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
