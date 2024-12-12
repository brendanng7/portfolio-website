import { BlogPosts } from 'app/components/posts';

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
};

export default function Page() {
  return (
    <section className="px-4 py-8 md:px-8 lg:px-16">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  );
}
