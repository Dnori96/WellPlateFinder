import aboutMainHeroDesktop from '@/images/heros/image-about-our-mission-large.webp';
import aboutMainHeroMobile from '@/images/heros/image-about-our-mission-small.webp';
import aboutPreFootDesktop from '@/images/heros/image-about-beyond-the-plate-large.webp';
import aboutPreFootMobile from '@/images/heros/image-about-beyond-the-plate-small.webp';
import { whyWeExist, ourFoodPhil } from '@/lib/aboutTextList';
import knife from '@/images/figures/pattern-knife.svg';
import fork from '@/images/figures/pattern-fork.svg';
import { useContext } from 'react';
import { PageContext } from '@/context/pageContext';
import { Link } from 'react-router-dom';

export default function About() {
  const { changeFocusPage } = useContext(PageContext);

  return (
    <main className="mx-auto p-[0_16px] md:p-[0_32px] xl:max-w-[1200px] xl:w-full xl:flex xl:flex-col xl:items-center bg-primary-Neutral-100 text-primary-Neutral-900">
      <section className="flex flex-col gap-10 p-[48px_0] md:p-[64px_0_80px_0] xl:flex-row xl:gap-20 xl:p-[80px_0_96px_0]">
        <div className="flex flex-col gap-6 relative">
          <strong className="bg-primary-Orange-500 p-[2px_6px] rounded-md w-fit">Our mission</strong>
          <h1 className="text-[40px]/[48px] font-extrabold tracking-[-2px] md:text-5xl/[58px]">
            Help more people cook nourishing meals, more often.
          </h1>
          <div className="flex flex-col text-xl/[30px] gap-5 text-primary-Neitral-800">
            <p>
              Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and
              genuinely delicious.
            </p>
            <p>
              We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed
              shortcuts—just honest ingredients and straightforward steps.
            </p>
          </div>
        </div>
        <picture className="max-md:flex max-md:flex-col max-md:items-center">
          <source media="(min-width: 768px)" srcSet={aboutMainHeroDesktop} />
          <img
            src={aboutMainHeroMobile}
            alt="Large photo of a woman cooking"
            className="rounded-xl md:rounded-2xl xl:min-w-[550px]"
          />
        </picture>
      </section>

      <div className="w-full h-px bg-primary-Neutral-200"></div>

      <section className="flex flex-col gap-10 p-[48px_0] md:p-[80px_0] xl:flex-row xl:p-[96px_0]">
        <h2 className="font-extrabold text-[40px] xl:text-5xl/[58px] xl:min-w-[378px]">Why we exist</h2>
        <ul className="flex flex-col gap-6 xl:gap-12">
          {whyWeExist.map((p, i) => (
            <li className="flex items-start gap-5" key={i}>
              <img src={p.icon} alt="Bullet Point Arrow" />
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="text-xl text-primary-Neitral-800">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="w-full h-px bg-primary-Neutral-200"></div>

      <section className="flex flex-col gap-10 p-[48px_0] md:p-[80px_0] xl:flex-row xl:p-[96px_0]">
        <h2 className="font-extrabold text-[40px] xl:text-5xl/[58px] xl:min-w-[378px]">Our food philosophy</h2>
        <ul className="flex flex-col gap-6 xl:gap-12">
          {ourFoodPhil.map((p, i) => (
            <li className="flex items-start gap-5" key={i}>
              <img src={p.icon} alt="Bullet Point Arrow" />
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="text-xl text-primary-Neitral-800">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="w-full h-px bg-primary-Neutral-200"></div>

      <section className="flex flex-col gap-10 p-[48px_0] md:p-[80px_0_0_0] xl:flex-row xl:gap-16 xl:p-[96px_0]">
        <div className="flex flex-col gap-5">
          <h2 className="text-[40px] font-extrabold tracking-[-2px] xl:text-5xl/[58px]">Beyond the plate</h2>
          <div className="flex flex-col gap-3">
            <p className="text-xl/[30px] tracking-[-0.4px] text-primary-Neitral-800">
              We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:
            </p>
            <ul className="list-disc p-[0_15px] md:p-[0_30px] text-xl/[30px] tracking-[-0.4px] text-primary-Neitral-800">
              <li>Encourage family dinners and social cooking.</li>
              <li>Reduce reliance on single-use packaging and delivery waste.</li>
              <li>Spark curiosity about seasonal produce and local agriculture.</li>
            </ul>
          </div>
        </div>
        <picture className="max-md:flex max-md:flex-col max-md:items-center">
          <source media="(min-width: 768px)" srcSet={aboutPreFootDesktop} />
          <img src={aboutPreFootMobile} alt="Large photo of a woman cooking" className="rounded-xl xl:min-w-[710px]" />
        </picture>
      </section>

      <section className="flex-center flex-col gap-10 w-full max-w-[1200px] overflow-hidden relative bg-primary-Neutral-200 p-[96px_0] md:mt-20 xl:mt-0 rounded-2xl">
        <img src={knife} alt="image in the form of a knife" className="absolute -right-16 max-md:hidden" />
        <img src={fork} alt="image in the form of a fork" className="absolute -left-20 top-4 max-md:hidden" />
        <div className="flex flex-col gap-3 text-center">
          <h2 className="font-extrabold text-5xl max-md:text-4xl text-primary-Neutral-900 z-10">
            Ready to cook smarter?
          </h2>
          <p className="font-Secundary font-medium text-xl tracking-[-0.4px] text-primary-Neitral-800 z-10">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
        </div>
        <Link to={'/recipes'} className="z-10">
          <button className="browseButtom" onClick={() => changeFocusPage('r')}>
            Browse recipes
          </button>
        </Link>
      </section>
    </main>
  );
}
