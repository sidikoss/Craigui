import { useEffect } from 'react';
import { SITE_CONTENT } from '../../content/siteContent';

const siteUrl = SITE_CONTENT.company.siteUrl.replace(/\/$/, '');

export const ROUTE_META = {
  '/': {
    title: `${SITE_CONTENT.company.name} | Craies scolaires pour etablissements`,
    description:
      'Site vitrine de vente de craie: offres scolaires, prix de depart, devis rapide et contact WhatsApp.',
    keywords:
      'craie scolaire, craie guinee, fournisseur craie, devis craie, livraison craie, conakry',
  },
  '/produits': {
    title: `Produits | ${SITE_CONTENT.company.name}`,
    description:
      'Decouvrez nos gammes de craies, conditionnements et prix de depart pour ecoles, centres et grossistes.',
    keywords: 'produits craie, craies blanches, craies colorees, prix craie, commande volume',
  },
  '/a-propos': {
    title: `A propos | ${SITE_CONTENT.company.name}`,
    description:
      'Notre mission, notre approche qualite et notre engagement pour une distribution locale de craies fiables.',
    keywords: 'a propos craigui, mission craie, fournisseur local guinee',
  },
  '/contact': {
    title: `Contact et devis | ${SITE_CONTENT.company.name}`,
    description:
      'Demandez un devis via formulaire ou WhatsApp. Reponse rapide pour vos besoins en craies scolaires.',
    keywords: 'contact craie, devis craie, whatsapp craie, commande craie guinee',
  },
  '/mentions-legales': {
    title: `Mentions legales | ${SITE_CONTENT.company.name}`,
    description: 'Informations legales, responsabilite et politique de traitement des demandes clients.',
    keywords: 'mentions legales craigui, politique contact',
  },
};

function upsertMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertMetaByProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function SEOHead({ path = '/' }) {
  useEffect(() => {
    const meta = ROUTE_META[path] || ROUTE_META['/'];
    const canonicalPath = path === '/' ? '' : path;
    const canonicalUrl = `${siteUrl}${canonicalPath}`;

    document.title = meta.title;
    upsertMetaByName('description', meta.description);
    upsertMetaByName('keywords', meta.keywords);
    upsertMetaByName('robots', 'index,follow');
    upsertMetaByName('author', SITE_CONTENT.company.name);

    upsertMetaByProperty('og:type', 'website');
    upsertMetaByProperty('og:locale', 'fr_GN');
    upsertMetaByProperty('og:site_name', SITE_CONTENT.company.name);
    upsertMetaByProperty('og:title', meta.title);
    upsertMetaByProperty('og:description', meta.description);
    upsertMetaByProperty('og:url', canonicalUrl);

    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', meta.title);
    upsertMetaByName('twitter:description', meta.description);

    upsertCanonical(canonicalUrl);
  }, [path]);

  return null;
}
