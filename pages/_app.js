import { ThemeProvider } from 'next-themes';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <MotionConfig reducedMotion="user">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
      <Footer />
    </ThemeProvider>
  );
}
