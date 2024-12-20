'use client';

import useMasonry from 'app/gallery/utils/useMasonry';

export function Masonry({ children }) {
  const masonryContainer = useMasonry();

  return (
    <div
      ref={masonryContainer}
      className="grid items-start gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6"
    >
      {children}
    </div>
  );
}
