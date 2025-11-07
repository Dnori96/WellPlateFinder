import { Link } from 'react-router-dom';
import { ROUTES_PAGES } from '@/const/pages';

export default function Plate({ images, desc }) {
  return (
    <article className="max-w-full md:max-w-full xl:max-w-[376px] p-2 flex flex-col gap-4 rounded-[10px] border border-primary-Neutral-300 bg-primary-Neutral-0 shadow-[0_8px_16px_-9px_rgba(22,58,52,0.16)]">
      <picture>
        <source media="(min-width: 768px)" srcSet={images?.imgLarge} />
        <img src={images?.imgSmall} alt="Large photo of a woman cooking" className="aspect-square rounded-xl" />
      </picture>
      <div className="flex flex-col gap-2.5 self-stretch p-[0_8px]">
        <h2 className="whitespace-nowrap text-ellipsis max-w-[320px] overflow-hidden text-primary-Neutral-900 text-xl/[28px] font-bold tracking-[-0.5px]">
          {desc.title}
        </h2>
        <p className="text-primary-Neitral-800 self-stretch text-base/[24px] tracking-[-0.3px] font-medium">
          {desc.text}
        </p>
      </div>
      <div className="flex flex-wrap self-stretch items-center content-center p-[0_8px] gap-[8px_16px] cursor-default">
        <span className="flex text-base/[24px] tracking-[-0.3px] font-medium">
          <img src={images.servings} alt="Total Servings of the recipe" className="size-5" />
          {`Servings: ${desc.servings}`}
        </span>
        <span className="flex text-base/[24px] tracking-[-0.3px] font-medium">
          <img src={images.prep} alt="Minutes to prepare the recipe" className="size-5" />
          {`Prep: ${desc.prepTime} ${desc.prepTime !== 1 ? 'mins' : 'min'}`}
        </span>
        <span className="flex text-base/[24px] tracking-[-0.3px] font-medium">
          <img src={images.cook} alt="Minutes to cook the recipe" className="size-5" />
          {`Cook: ${desc.cookTime} ${desc.cookTime !== 1 ? 'mins' : 'min'}`}
        </span>
      </div>
      <Link to={`${ROUTES_PAGES.RECIPE_PER_ID}${desc.id}`}>
        <button className="text-base/[24px] tracking-[-0.3px] cursor-pointer font-bold hover:bg-primary-Neitral-800 bg-primary-Neutral-900 text-primary-Neutral-0 w-full p-[12px_32px] rounded-full">
          View Recipe
        </button>
      </Link>
    </article>
  );
}
