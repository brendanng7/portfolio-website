import About from 'app/components/about';
import Ascii from 'app/components/ascii';
import ExperienceList from 'app/components/experience';
import TechStack from 'app/components/techstack';

export default function Page() {
  return (
    <section className="lg:max-w-4xl md:max-w-3xl px-4 py-8 md:px-8 lg:px-16">
      <Ascii />
      <About />
      <div className="my-8">
        <TechStack />
      </div>
      <div className="my-8">
        <ExperienceList />
      </div>
    </section>
  );
}
