import { fireEvent, render, screen } from '@testing-library/react';
import QuoteCalculator from '../components/QuoteCalculator';

describe('QuoteCalculator', () => {
  it('updates estimate and keeps stable whatsapp recap format', () => {
    render(<QuoteCalculator />);

    fireEvent.change(screen.getByLabelText(/type de craie/i), {
      target: { value: 'color-set' },
    });
    fireEvent.change(screen.getByLabelText(/quantite/i), {
      target: { value: '120' },
    });
    fireEvent.change(screen.getByLabelText(/zone de livraison/i), {
      target: { value: 'regional' },
    });

    expect(screen.getByText(/tarif etablissement/i)).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /envoyer ce devis sur whatsapp/i });
    const decodedHref = decodeURIComponent(link.getAttribute('href'));

    expect(decodedHref).toContain('Demande de devis - Craigui');
    expect(decodedHref).toContain('Produit: Craies colorees pedagogiques');
    expect(decodedHref).toContain('Quantite: 120 paquets');
    expect(decodedHref).toContain('Zone: Hors Conakry');
    expect(decodedHref).toContain('Estimation:');
    expect(decodedHref).toContain('Contact:');
  });

  it('handles lower quantity bounds for recap', () => {
    render(<QuoteCalculator />);

    fireEvent.change(screen.getByLabelText(/quantite/i), {
      target: { value: '0' },
    });

    const link = screen.getByRole('link', { name: /envoyer ce devis sur whatsapp/i });
    const decodedHref = decodeURIComponent(link.getAttribute('href'));

    expect(decodedHref).toContain('Quantite: 1 paquets');
  });
});
