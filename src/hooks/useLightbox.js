import { useState, useCallback } from 'react';

/**
 * useLightbox — Gestiona el estado del visor de imágenes
 */
export function useLightbox(images = []) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = useCallback((index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const prev = useCallback(
    () => setCurrentIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  const next = useCallback(
    () => setCurrentIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  return { isOpen, currentIndex, open, close, prev, next };
}
