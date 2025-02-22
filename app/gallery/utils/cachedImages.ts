import { CachedResults, PhotoResource } from 'app/gallery/utils/types';
import cloudinary from './cloudinary';

let cachedResults: CachedResults;

export default async function getResults() {
  if (!cachedResults) {
    const fetchedResults = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by('public_id', 'desc')
      .max_results(400)
      .execute();

    cachedResults = fetchedResults;
  }

  return cachedResults;
}
