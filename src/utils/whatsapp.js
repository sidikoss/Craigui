import { SITE_CONTENT } from '../content/siteContent';

export function normalizePhoneNumber(value) {
  return String(value || '').replace(/\D+/g, '');
}

export function formatCurrency(value, currency = 'GNF') {
  const safe = Number.isFinite(Number(value)) ? Number(value) : 0;
  return `${new Intl.NumberFormat('fr-FR').format(Math.round(safe))} ${currency}`;
}

export function buildWhatsAppUrl(message) {
  const phone = normalizePhoneNumber(SITE_CONTENT.contacts.whatsappNumber);
  const text = encodeURIComponent(String(message || '').trim());
  return `https://wa.me/${phone}?text=${text}`;
}

export function buildQuoteMessage({
  productName,
  quantity,
  zoneName,
  estimateText,
  contactName,
  contactPhone,
  organization,
}) {
  const company = SITE_CONTENT.company.name;

  return [
    `Demande de devis - ${company}`,
    `Produit: ${productName || 'Non renseigne'}`,
    `Quantite: ${quantity || 0} ${SITE_CONTENT.pricingFrom.baseUnitLabel}s`,
    `Zone: ${zoneName || 'Non renseignee'}`,
    `Estimation: ${estimateText || 'Non calculee'}`,
    `Contact: ${contactName || 'Non renseigne'}`,
    `Telephone: ${contactPhone || 'Non renseigne'}`,
    `Structure: ${organization || 'Non renseignee'}`,
  ].join('\n');
}

export function buildContactMessage({ name, phone, structure, need, message }) {
  const company = SITE_CONTENT.company.name;

  return [
    `Demande de contact - ${company}`,
    `Nom: ${name || 'Non renseigne'}`,
    `Telephone: ${phone || 'Non renseigne'}`,
    `Structure: ${structure || 'Non renseignee'}`,
    `Besoin: ${need || 'Non renseigne'}`,
    `Message: ${message || 'Non renseigne'}`,
  ].join('\n');
}
