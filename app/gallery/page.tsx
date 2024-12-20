import { Masonry } from 'app/components/masonry';
import Photo from 'app/components/photos';
import getResults from 'app/gallery/utils/cachedImages';

export const metadata = {
  title: 'Gallery',
  description: 'View my gallery.',
};

export default async function Page() {
  const results = await getResults();

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="lg:max-w-4xl md:max-w-3xl mb-8 text-3xl font-semibold tracking-tighter justify-center flex">
        Gallery
      </h1>
      <Masonry>
        {results.resources.map((photo) => (
          <Photo key={photo.asset_id} photo_resource={photo} />
        ))}
      </Masonry>
    </section>
  );
}
