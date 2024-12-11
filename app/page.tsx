import { BlogPosts } from 'app/components/posts';
import TechStack from 'app/components/techstack';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Brendan Ng
      </h1>
      <p className="mb-4">
        {`I'm a prospective hire studying computer science in NUS. Currently a second year student planning to graduate in 2027.
        I believe that if you shoot for the stars, you will land amongst them even if you miss, so dream big! 
        I am looking for a summer internship in 2025. Let's connect!`}
      </p>
      <div className="my-8">
        <TechStack />
      </div>
    </section>
  );
}
