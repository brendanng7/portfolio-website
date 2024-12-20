'use client';

import useMasonry from 'app/gallery/utils/useMasonry';

export function Masonry({ children }) {
  const masonryContainer = useMasonry();

  return (
    <div
      ref={masonryContainer}
      className="grid items-start gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 "
    >
      {children}
    </div>
  );
}
