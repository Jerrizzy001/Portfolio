import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';
import Footer from '../components/Footer';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['500', '600'],
  display: 'swap',
});

const fontVariables = `${bricolage.variable} ${hanken.variable} ${jetbrainsMono.variable}`;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f8fafc" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#080a12" />
      </Head>
      <div className={`${fontVariables} font-sans`}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
