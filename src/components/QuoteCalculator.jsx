import { useMemo, useState } from 'react';
import { SITE_CONTENT } from '../content/siteContent';
import {
  buildQuoteMessage,
  buildWhatsAppUrl,
  formatCurrency,
} from '../utils/whatsapp';

function getTier(quantity) {
  return SITE_CONTENT.quote.unitTiers.find((tier) => quantity >= tier.min && quantity <= tier.max) || SITE_CONTENT.quote.unitTiers[0];
}

export default function QuoteCalculator() {
  const defaultProduct = SITE_CONTENT.productRanges[0]?.id || '';
  const defaultZone = SITE_CONTENT.quote.deliveryZones[0]?.id || '';

  const [productId, setProductId] = useState(defaultProduct);
  const [quantity, setQuantity] = useState(20);
  const [zoneId, setZoneId] = useState(defaultZone);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [organization, setOrganization] = useState('');

  const product = SITE_CONTENT.productRanges.find((item) => item.id === productId) || SITE_CONTENT.productRanges[0];
  const zone = SITE_CONTENT.quote.deliveryZones.find((item) => item.id === zoneId) || SITE_CONTENT.quote.deliveryZones[0];

  const pricing = useMemo(() => {
    const safeQuantity = Math.max(1, Number(quantity) || 1);
    const tier = getTier(safeQuantity);
    const unitPrice = Math.round(product.fromPrice * tier.multiplier);
    const subtotal = unitPrice * safeQuantity;
    const deliveryFee = zone.fee;
    const total = subtotal + deliveryFee;

    return {
      safeQuantity,
      tierLabel: tier.label,
      unitPrice,
      subtotal,
      deliveryFee,
      total,
    };
  }, [quantity, product.fromPrice, zone.fee]);

  const estimateText = formatCurrency(pricing.total, SITE_CONTENT.pricingFrom.currency);

  const quoteMessage = buildQuoteMessage({
    productName: product.name,
    quantity: pricing.safeQuantity,
    zoneName: zone.name,
    estimateText,
    contactName,
    contactPhone,
    organization,
  });

  const whatsappHref = buildWhatsAppUrl(quoteMessage);

  return (
    <div className="card border-guinea-red/20 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-xl dark:from-zinc-900 dark:to-zinc-800">
      <h3 className="mb-5 text-2xl font-bold text-zinc-900 dark:text-white">Calculateur de devis simplifie</h3>

      <div className="grid gap-4">
        <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300" htmlFor="quote-product">
          Type de craie
        </label>
        <select
          id="quote-product"
          className="input-field"
          value={productId}
          onChange={(event) => setProductId(event.target.value)}
        >
          {SITE_CONTENT.productRanges.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300" htmlFor="quote-quantity">
          Quantite ({SITE_CONTENT.pricingFrom.baseUnitLabel}s)
        </label>
        <input
          id="quote-quantity"
          type="number"
          min="1"
          max="10000"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          className="input-field"
        />

        <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300" htmlFor="quote-zone">
          Zone de livraison
        </label>
        <select
          id="quote-zone"
          className="input-field"
          value={zoneId}
          onChange={(event) => setZoneId(event.target.value)}
        >
          {SITE_CONTENT.quote.deliveryZones.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 rounded-2xl bg-zinc-100 p-4 text-sm dark:bg-zinc-950">
        <div className="flex items-center justify-between py-1">
          <span className="text-zinc-500">Tarif applique</span>
          <strong className="text-zinc-900 dark:text-white">{pricing.tierLabel}</strong>
        </div>
        <div className="flex items-center justify-between py-1">
          <span className="text-zinc-500">Prix unitaire estime</span>
          <strong className="text-zinc-900 dark:text-white">
            {formatCurrency(pricing.unitPrice, SITE_CONTENT.pricingFrom.currency)}
          </strong>
        </div>
        <div className="flex items-center justify-between py-1">
          <span className="text-zinc-500">Sous-total</span>
          <strong className="text-zinc-900 dark:text-white">
            {formatCurrency(pricing.subtotal, SITE_CONTENT.pricingFrom.currency)}
          </strong>
        </div>
        <div className="flex items-center justify-between py-1">
          <span className="text-zinc-500">Livraison</span>
          <strong className="text-zinc-900 dark:text-white">
            {formatCurrency(pricing.deliveryFee, SITE_CONTENT.pricingFrom.currency)}
          </strong>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-zinc-200 pt-3 dark:border-zinc-800">
          <span className="text-base font-bold text-zinc-900 dark:text-white">Total indicatif</span>
          <span className="text-xl font-black text-guinea-red">{estimateText}</span>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          className="input-field"
          placeholder="Nom du contact"
          value={contactName}
          onChange={(event) => setContactName(event.target.value)}
        />
        <input
          type="tel"
          className="input-field"
          placeholder="Telephone"
          value={contactPhone}
          onChange={(event) => setContactPhone(event.target.value)}
        />
      </div>
      <input
        type="text"
        className="input-field mt-3"
        placeholder="Structure (ecole, institut, entreprise...)"
        value={organization}
        onChange={(event) => setOrganization(event.target.value)}
      />

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp mt-5 w-full justify-center py-3 text-base"
      >
        Envoyer ce devis sur WhatsApp
      </a>
      <p className="mt-2 text-center text-xs text-zinc-500">Estimation indicative, validation finale apres confirmation.</p>
    </div>
  );
}
