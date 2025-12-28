import { useEffect, useState } from 'react';

export default function useTypewriter(text, speed = 20, delay = 0) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let index = 0;
    let timeout;
    let interval;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        index++;
        setDisplayed(text.slice(0, index));
        if (index === text.length) clearInterval(interval);
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return displayed;
}
