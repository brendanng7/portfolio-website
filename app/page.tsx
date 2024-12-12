import ExperienceList from 'app/components/experience';
import { BlogPosts } from 'app/components/posts';
import TechStack from 'app/components/techstack';

export default async function Page() {
  return (
    <section className="px-4 py-8 md:px-8 lg:px-16">
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
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
      <div className="my-8">
        <ExperienceList />
      </div>
    </section>
  );
}
