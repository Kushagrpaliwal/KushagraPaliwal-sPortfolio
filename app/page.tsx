
import About from '@/components/About';
import Exp from '@/components/Exp';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';



const Page = () => {

  return (
    <div className='bg-blackish text-white box overflow-hidden'>
      <Hero/>
      <Projects/>
      <Exp/>
      <Skills/>
      <About/>
    </div>
  );
};

export default Page;



