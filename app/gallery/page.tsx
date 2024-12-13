export const metadata = {
  title: 'Gallery',
  description: 'View my gallery.',
};

export default function Page() {
  return (
    <section className="px-4 py-8 md:px-8 lg:px-16">
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">Gallery</h1>
      <p className="mb-4">
        {`I plan to showcase some of the pictures i took on this page. Look forward to it!`}
      </p>
    </section>
  );
}
