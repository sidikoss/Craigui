import { render } from '@testing-library/react';
import { SEOHead } from '../components/seo/SEOMeta';

describe('SEOHead', () => {
  it('applies title, description and canonical tags for a route', () => {
    render(<SEOHead path="/produits" />);

    expect(document.title).toMatch(/produits/i);

    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    expect(description).toBeTruthy();
    expect(description.getAttribute('content')).toMatch(/gammes de craies/i);
    expect(canonical).toBeTruthy();
    expect(canonical.getAttribute('href')).toBe('https://vitrine-craie.vercel.app/produits');
    expect(ogUrl.getAttribute('content')).toBe('https://vitrine-craie.vercel.app/produits');
  });
});
