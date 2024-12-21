'use client';

import Image from 'next/image';
import { PhotoResource } from 'app/gallery/utils/types';
import Link from 'next/link';
import { useState } from 'react';

export default function Photo(props: { photo_resource: PhotoResource }) {
  const { photo_resource } = props;
  const public_id = photo_resource.public_id;
  const format = photo_resource.format;
  const url = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${public_id}.${format}`;

  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      className="flex justify-center"
      href={photo_resource.secure_url}
      target="_blank"
    >
      <Image
        src={url}
        alt={photo_resource.public_id}
        width={400}
        height={400}
        className={`rounded-lg shadow-lg transition-transform hover:-translate-y-2 ${
          loaded ? 'animate-appear' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
      />
    </Link>
  );
}
