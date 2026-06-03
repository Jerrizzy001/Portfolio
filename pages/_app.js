import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import '../styles/globals.css';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
