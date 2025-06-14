import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const t = document.documentElement.getAttribute('data-theme');
      if (t === 'light' || t === 'dark') setTheme(t);
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    const t = document.documentElement.getAttribute('data-theme');
    if (t === 'light' || t === 'dark') setTheme(t);
    
    return () => observer.disconnect();
  }, []);
  
  return theme;
} 