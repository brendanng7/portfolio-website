import Image from 'next/image';
import { PhotoResource } from 'app/gallery/utils/types';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Photo(props: { photo_resource: PhotoResource }) {
  const { photo_resource } = props;
  const public_id = photo_resource.public_id;
  const format = photo_resource.format;
  const url = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${public_id}.${format}`;

  return (
    <Link
      className="flex justify-center"
      href={photo_resource.secure_url}
      target="_blank"
    >
      <Suspense
        fallback={
          <div
            style={{
              width: 400,
              height: 400,
            }}
            className="bg-gray-200 dark:bg-gray-800 rounded-lg"
          ></div>
        }
      >
        <Image
          src={url}
          alt={photo_resource.public_id}
          width={400}
          height={400}
          className="rounded-lg shadow-lg hover:-translate-y-2 transition-transform"
        />
      </Suspense>
    </Link>
  );
}
