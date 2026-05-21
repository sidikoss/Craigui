import { Link } from 'react-router-dom';
import { SITE_CONTENT } from '../../content/siteContent';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

const FOOTER_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/produits', label: 'Produits' },
  { to: '/a-propos', label: 'A propos' },
  { to: '/contact', label: 'Contact' },
  { to: '/mentions-legales', label: 'Mentions legales' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappLink = buildWhatsAppUrl('Bonjour, je souhaite obtenir un devis pour des craies scolaires.');

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="mb-4 inline-flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white text-zinc-900">
                <span className="text-sm font-extrabold">{SITE_CONTENT.company.logoText}</span>
                <span className="absolute bottom-0 left-0 h-1 w-1/3 bg-guinea-red" />
                <span className="absolute bottom-0 left-1/3 h-1 w-1/3 bg-guinea-yellow" />
                <span className="absolute bottom-0 right-0 h-1 w-1/3 bg-guinea-green" />
              </div>
              <span className="text-xl font-bold">{SITE_CONTENT.company.name}</span>
            </Link>
            <p className="max-w-md text-sm text-zinc-300">{SITE_CONTENT.company.slogan}</p>
            <p className="mt-3 text-xs text-zinc-400">{SITE_CONTENT.company.address}</p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-zinc-400">Navigation</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-zinc-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-zinc-400">Contact rapide</h3>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp: {SITE_CONTENT.contacts.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:+${SITE_CONTENT.contacts.phoneRaw}`} className="hover:text-white">
                  Telephone: {SITE_CONTENT.contacts.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONTENT.contacts.email}`} className="hover:text-white">
                  Email: {SITE_CONTENT.contacts.email}
                </a>
              </li>
              <li className="text-zinc-400">Zone: {SITE_CONTENT.contacts.serviceAreas.join(', ')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-xs text-zinc-400">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              (c) {year} {SITE_CONTENT.company.name}. Tous droits reserves.
            </p>
            <p>Reponse commerciale: {SITE_CONTENT.contacts.responseTime}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
