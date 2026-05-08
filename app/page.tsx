import { theme } from "@/styles/theme";

export default function Home() {
  return (
    <div style={{ padding: '8rem 2rem', textAlign: 'center' }}>
      <h1 style={{ color: theme.colors.primary, fontSize: '3.5rem', marginBottom: '1rem' }}>
        Restoring Hope in Colombia
      </h1>
      <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.2rem', color: theme.colors.text.muted }}>
        Empowering communities and making a lasting impact through local ministry hubs.
      </p>
      <a href="/donate" style={{ backgroundColor: theme.colors.accent, color: 'white', padding: '15px 30px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>
        Partner With Us
      </a>
    </div>
  );
}