import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import '../styles/globals.css';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f8fafc" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#080a12" />
      </Head>
      <div className="font-sans">
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
