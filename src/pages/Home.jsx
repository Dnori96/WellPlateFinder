import { Link } from 'react-router-dom';
import homeHeroDesktop from '@/images/heros/image-home-hero-large.webp';
import homeHeroMobile from '@/images/heros/image-home-hero-small.webp';
import homeBottomDesktop from '@/images/heros/image-home-real-life-large.webp';
import homeBottomMobile from '@/images/heros/image-home-real-life-small.webp';
import bgFigure from '@/images/figures/pattern-squiggle-1.svg';
import knife from '@/images/figures/pattern-knife.svg';
import fork from '@/images/figures/pattern-fork.svg';
import { whatYoullGet } from '@/lib/whatYoullGet';
import { useContext } from 'react';
import { PageContext } from '@/context/pageContext';

export default function Home() {
  const { changeFocusPage } = useContext(PageContext);

  return (
    <main className="flex flex-col justify-center max-xl:p-[0_20px] items-center relative">
      <img
        src={bgFigure}
        alt="background figure"
        className="overflow-hidden max-md:top-0 -top-[500px] w-full max-w-[1600px] h-auto left-0  rotate-30 absolute z-10"
      />
      <section className="mt-20 mb-20 z-20">
        <div className="flex justify-center items-center max-md:items-start flex-col gap-10 mb-20">
          <div className="hero-main-div flex-center flex-col text-center gap-3 relative">
            <div className="w-[275px] max-xl:w-[230px] max-xl:top-6 max-md:w-[200px] max-md:top-4 h-10 z-0 bg-primary-Orange-500 left-0 top-[35px] rounded-sm opacity-40 absolute"></div>
            <h1 className="home-title font-extrabold z-10 text-primary-Neutral-900">Healthy meals, zero fuss</h1>
            <p className="home-main-text font-Secundary text-primary-Neitral-800 font-normal text-xl w-xl">
              Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.
            </p>
          </div>
          <Link to={'/recipes'}>
            <button className="browseButtom" onClick={() => changeFocusPage('r')}>
              Start exploring
            </button>
          </Link>
        </div>
        <picture className="max-md:flex max-md:flex-col max-md:items-center">
          <source media="(min-width: 768px)" srcSet={homeHeroDesktop} />
          <img
            src={homeHeroMobile}
            alt="Large photo of a woman cooking"
            className="main-hero w-full max-w-[1200px] h-auto rounded-xl bg-primary-Neutral-0 shadow-[0_0_0_12px_#fff]"
          />
        </picture>
      </section>

      <section className="flex-center flex-col gap-12 w-full max-md:text-start max-md:max-w-[344px] max-w-[1200px]">
        <h2 className="text-5xl font-extrabold max-md:text-4xl text-primary-Neutral-900">What you’ll get</h2>
        <div className="whatYoullGet-cards w-full justify-between gap-8">
          {whatYoullGet.map((o, i) => (
            <article key={i} className="whatYoullGet-perArticle flex flex-col w-[376px] gap-6">
              <img
                src={o.icon}
                alt={o.title}
                className="rounded-xl size-[60px] p-2 border-primary-Neutral-200 border bg-primary-Neutral-0 shadow-[0_1px_0_0_#E9EDE8]"
              />
              <div className="flex flex-col gap-3">
                <h5 className="text-[32px] font-bold text-primary-Neutral-900">{o.title}</h5>
                <p className="whatYoullGet-text font-Secundary text-xl text-primary-Neitral-800">{o.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="bg-primary-Neutral-200 h-px w-full mt-12"></div>
      </section>

      <section className="builtForLife-section flex justify-between max-md:items-center p-[96px_0] w-full max-w-[1200px]">
        <div className="builtForLife-text flex flex-col justify-center w-full max-w-[520px] gap-5 relative">
          <h2 className="font-extrabold text-5xl max-md:text-4xl text-primary-Neutral-900">Built for real life</h2>
          <div className="builtForLife-underline w-[108px] left-14 top-[218px] h-3 z-0 rounded-[3px] max-md:hidden bg-primary-Orange-500 opacity-80 absolute"></div>
          <p className="text-xl font-Secundary z-10 text-primary-Neitral-800">
            Cooking shouldn’t be complicated. These recipes come in under <span className="font-bold">30 minutes</span>{' '}
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p className="text-xl font-Secundary z-10 text-primary-Neitral-800">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
          </p>
        </div>
        <div>
          <picture className="max-md:flex max-md:flex-col max-md:items-center">
            <source media="(min-width: 800px)" srcSet={homeBottomDesktop} />
            <img
              src={homeBottomMobile}
              alt="Real life example of a person cutting vegetables"
              className="builtForLife-img w-full max-w-[635px] h-auto rounded-2xl"
            />
          </picture>
        </div>
      </section>

      <section className="flex-center flex-col gap-10 w-full max-w-[1200px] overflow-hidden relative bg-primary-Neutral-200 p-[96px_0] rounded-2xl">
        <img src={knife} alt="image in the form of a knife" className="absolute -right-16 max-md:hidden" />
        <img src={fork} alt="image in the form of a fork" className="absolute -left-20 top-4 max-md:hidden" />
        <div className="flex flex-col gap-3 text-center">
          <h2 className="font-extrabold text-5xl max-md:text-4xl text-primary-Neutral-900 z-10">
            Ready to cook smarter?
          </h2>
          <p className="font-Secundary font-medium text-xl text-primary-Neitral-800 z-10">
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
