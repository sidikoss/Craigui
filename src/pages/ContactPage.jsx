import ContactForm from '../components/ContactForm';
import { SEOHead } from '../components/seo/SEOMeta';
import { SITE_CONTENT } from '../content/siteContent';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function ContactPage() {
  const whatsappLink = buildWhatsAppUrl('Bonjour, je souhaite etre accompagne pour une commande de craies.');

  return (
    <>
      <SEOHead path="/contact" />

      <div className="space-y-14 py-12">
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Contact commercial</p>
            <h1 className="mt-2 text-4xl font-extrabold text-zinc-900 dark:text-white">Demande de devis et accompagnement</h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Completez le formulaire ou contactez-nous directement sur WhatsApp pour accelerer votre traitement.
            </p>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <aside className="space-y-5">
            <article className="card p-5">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">WhatsApp</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-lg font-bold text-guinea-green"
              >
                {SITE_CONTENT.contacts.whatsappDisplay}
              </a>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Canal recommande pour les demandes urgentes.</p>
            </article>

            <article className="card p-5">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Telephone</p>
              <a href={`tel:+${SITE_CONTENT.contacts.phoneRaw}`} className="mt-2 inline-block text-lg font-bold text-zinc-900 dark:text-white">
                {SITE_CONTENT.contacts.phoneDisplay}
              </a>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Disponibilite: {SITE_CONTENT.contacts.responseTime}</p>
            </article>

            <article className="card p-5">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Email</p>
              <a href={`mailto:${SITE_CONTENT.contacts.email}`} className="mt-2 inline-block text-base font-semibold text-zinc-900 dark:text-white">
                {SITE_CONTENT.contacts.email}
              </a>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Adresse: {SITE_CONTENT.company.address}</p>
            </article>

            <article className="card p-5">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Horaires</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                {SITE_CONTENT.contacts.openingHours.map((slot) => (
                  <li key={slot}>{slot}</li>
                ))}
              </ul>
            </article>
          </aside>

          <div className="card p-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Formulaire de demande</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Les champs marques d un asterisque sont obligatoires.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
