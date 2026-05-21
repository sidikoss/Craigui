import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('public routes', () => {
  it('renders home route', async () => {
    renderAt('/');
    expect(await screen.findByRole('heading', { name: /la craie professionnelle/i })).toBeInTheDocument();
  });

  it('renders products route', async () => {
    renderAt('/produits');
    expect(await screen.findByRole('heading', { name: /nos produits et offres de base/i })).toBeInTheDocument();
  });

  it('renders about route', async () => {
    renderAt('/a-propos');
    expect(await screen.findByRole('heading', { name: /a propos de/i })).toBeInTheDocument();
  });

  it('renders contact route', async () => {
    renderAt('/contact');
    expect(await screen.findByRole('heading', { name: /demande de devis et accompagnement/i })).toBeInTheDocument();
  });

  it('renders legal route', async () => {
    renderAt('/mentions-legales');
    expect(await screen.findByRole('heading', { name: /mentions legales/i })).toBeInTheDocument();
  });
});
