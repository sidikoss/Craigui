import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ContactForm from '../components/ContactForm';

describe('ContactForm', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  it('shows validation feedback when required fields are missing', async () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole('button', { name: /envoyer la demande/i }));

    expect(await screen.findByText(/veuillez renseigner tous les champs obligatoires/i)).toBeInTheDocument();
  });

  it('submits successfully and opens whatsapp', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/nom complet/i), { target: { value: 'Mamadou Diallo' } });
    fireEvent.change(screen.getByLabelText(/telephone/i), { target: { value: '+224661000111' } });
    fireEvent.change(screen.getByLabelText(/structure/i), { target: { value: 'College Horizon' } });
    fireEvent.change(screen.getByLabelText(/besoin principal/i), { target: { value: 'devis-volume' } });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Nous voulons un devis pour 200 paquets.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /envoyer la demande/i }));

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledTimes(1);
    });

    const firstCallArgs = window.open.mock.calls[0][0];
    expect(decodeURIComponent(firstCallArgs)).toContain('Demande de contact - Craigui');
    expect(await screen.findByText(/demande envoyee/i)).toBeInTheDocument();
  });
});
