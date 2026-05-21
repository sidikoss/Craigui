import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOMeta';
import { SITE_CONTENT } from '../content/siteContent';
import { buildWhatsAppUrl, formatCurrency } from '../utils/whatsapp';

export default function ProductsPage() {
  const whatsappLink = buildWhatsAppUrl('Bonjour, je souhaite un devis detaille pour vos produits de craie.');

  return (
    <>
      <SEOHead path="/produits" />

      <div className="space-y-16 py-12">
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Catalogue vitrine</p>
            <h1 className="mt-2 text-4xl font-extrabold text-zinc-900 dark:text-white">Nos produits et offres de base</h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Chaque gamme est pensee pour des usages pedagogiques differents, avec des conditionnements adaptes aux
              commandes ponctuelles ou recurrentes.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {SITE_CONTENT.productRanges.map((product) => (
              <article key={product.id} className="card overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-guinea-red via-guinea-yellow to-guinea-green" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{product.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{product.summary}</p>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Usages</p>
                      <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                        {product.useCases.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Conditionnements</p>
                      <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                        {product.packaging.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                    <p className="text-sm font-bold text-guinea-green">
                      A partir de {formatCurrency(product.fromPrice, SITE_CONTENT.pricingFrom.currency)}
                    </p>
                    <Link to="/contact" className="btn-primary py-2 text-sm">
                      Demander une offre
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Prix de depart et logistique</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-300 dark:border-zinc-700">
                    <th className="py-3 font-semibold text-zinc-700 dark:text-zinc-300">Gamme</th>
                    <th className="py-3 font-semibold text-zinc-700 dark:text-zinc-300">Prix de depart</th>
                    <th className="py-3 font-semibold text-zinc-700 dark:text-zinc-300">Livraison</th>
                  </tr>
                </thead>
                <tbody>
                  {SITE_CONTENT.productRanges.map((product) => (
                    <tr key={product.id} className="border-b border-zinc-200 dark:border-zinc-800">
                      <td className="py-3 text-zinc-700 dark:text-zinc-300">{product.name}</td>
                      <td className="py-3 text-zinc-700 dark:text-zinc-300">
                        {formatCurrency(product.fromPrice, SITE_CONTENT.pricingFrom.currency)}
                      </td>
                      <td className="py-3 text-zinc-700 dark:text-zinc-300">Selon zone et volume</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {SITE_CONTENT.quote.deliveryZones.map((zone) => (
                <div key={zone.id} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{zone.name}</p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Frais indicatifs: {formatCurrency(zone.fee, SITE_CONTENT.pricingFrom.currency)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-guinea-green/10 p-8 text-center">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Besoin d un devis personnalise ?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
              Partagez votre volume et votre zone de livraison. Nous revenons vers vous avec une proposition claire.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary text-sm">
                Aller au formulaire
              </Link>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">
                Ouvrir WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
