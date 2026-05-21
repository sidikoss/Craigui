import { useMemo, useState } from 'react';
import { buildContactMessage, buildWhatsAppUrl } from '../utils/whatsapp';

const INITIAL_STATE = {
  name: '',
  phone: '',
  structure: '',
  need: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const hasMissingFields = useMemo(
    () => !formData.name || !formData.phone || !formData.structure || !formData.need || !formData.message,
    [formData],
  );

  const whatsappLink = useMemo(() => {
    const message = buildContactMessage(formData);
    return buildWhatsAppUrl(message);
  }, [formData]);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (hasMissingFields) {
      setStatus('error');
      setFeedback('Veuillez renseigner tous les champs obligatoires.');
      return;
    }

    setStatus('loading');
    setFeedback('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      window.open(whatsappLink, '_blank', 'noopener,noreferrer');
      setStatus('success');
      setFeedback('Demande envoyee. Un conseiller vous repondra rapidement.');
      setFormData(INITIAL_STATE);
    } catch (error) {
      setStatus('error');
      setFeedback('Une erreur est survenue. Reessayez dans quelques instants.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Nom complet *
        </label>
        <input
          id="contact-name"
          type="text"
          className="input-field"
          value={formData.name}
          onChange={(event) => updateField('name', event.target.value)}
          placeholder="Ex: Mamadou Diallo"
          required
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-1 block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Telephone *
        </label>
        <input
          id="contact-phone"
          type="tel"
          className="input-field"
          value={formData.phone}
          onChange={(event) => updateField('phone', event.target.value)}
          placeholder="Ex: +224 6X XX XX XX"
          required
        />
      </div>

      <div>
        <label
          htmlFor="contact-structure"
          className="mb-1 block text-sm font-semibold text-zinc-700 dark:text-zinc-300"
        >
          Structure *
        </label>
        <input
          id="contact-structure"
          type="text"
          className="input-field"
          value={formData.structure}
          onChange={(event) => updateField('structure', event.target.value)}
          placeholder="Ecole, institut, entreprise..."
          required
        />
      </div>

      <div>
        <label htmlFor="contact-need" className="mb-1 block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Besoin principal *
        </label>
        <select
          id="contact-need"
          className="input-field"
          value={formData.need}
          onChange={(event) => updateField('need', event.target.value)}
          required
        >
          <option value="">Selectionnez un besoin</option>
          <option value="approvisionnement-regulier">Approvisionnement regulier</option>
          <option value="commande-ponctuelle">Commande ponctuelle</option>
          <option value="devis-volume">Devis volume</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          className="input-field resize-none"
          value={formData.message}
          onChange={(event) => updateField('message', event.target.value)}
          placeholder="Precisez quantite, delai, localisation et toute contrainte utile."
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center py-3 text-base disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer la demande'}
      </button>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp w-full justify-center py-3 text-base"
      >
        Ouvrir WhatsApp avec ce message
      </a>

      {feedback ? (
        <p
          className={`rounded-lg px-3 py-2 text-sm ${
            status === 'success'
              ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300'
              : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300'
          }`}
          role="status"
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
