import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RecipesContext } from '@/context/recipesContext';
import servings from '@/images/icons/icon-servings.svg';
import prep from '@/images/icons/icon-prep-time.svg';
import cook from '@/images/icons/icon-cook-time.svg';
import arrowBulletPoint from '@/images/icons/icon-bullet-point.svg';
import Plate from '@/components/Plate';
import { threeDifRecipes } from '@/utils/diferentRecipes';
import { ROUTES_PAGES } from '@/const/pages';

export default function RecipeInfo() {
  const { plates } = useContext(RecipesContext);
  const { plateId } = useParams();

  const threeRecipes = threeDifRecipes(plateId, plates.length);
  const recipesSelected = plates.filter((r) => threeRecipes.includes(r.id));

  const recipeFilterPerId = plates.filter((r) => r.id === Number(plateId));
  const recipe = recipeFilterPerId[0]; // probably there is a method that do this but OK :)
  return (
    <main className="flex max-w-[1200px] w-full mx-auto p-[48px_16px] flex-col">
      <search className="max-w-[350px] mb-4 text-primary-Neutral-900 whitespace-nowrap text-ellipsis overflow-hidden">
        <Link to={ROUTES_PAGES.RECIPES} className="opacity-60 hover:opacity-100">
          Recipes /
        </Link>{' '}
        {recipe.title}
      </search>
      <section className="flex flex-col gap-10 pb-12 xl:flex-row">
        <picture>
          <source media="(min-width: 768px)" srcSet={`/${recipe.image?.large}`} />
          <img
            src={`/${recipe.image?.small}`}
            alt="Large photo of a woman cooking"
            className="max-w-[343px] md:max-w-full xl:max-w-[580px] transition duration-100 rounded-[10px]"
          />
        </picture>
        <div className="flex flex-col gap-5 text-primary-Neutral-900">
          <h1 className="text-[40px]/[48px] xl:text-5xl/[57.6px] tracking-[-2px] font-extrabold">{recipe.title}</h1>
          <p className="text-primary-Neitral-800 text-xl/[30px] tracking-[-0.4px] font-Secundary font-medium">
            {recipe.overview}
          </p>
          <div>
            <div className="flex flex-wrap self-stretch items-center content-center p-[0_8px] md:p-0 gap-[8px_16px] cursor-default">
              <span className="flex text-base/[24px] tracking-[-0.3px] font-medium">
                <img src={servings} alt="Total Servings of the recipe" className="size-5" />
                {`Servings: ${recipe.servings}`}
              </span>
              <span className="flex text-base/[24px] tracking-[-0.3px] font-medium">
                <img src={prep} alt="Minutes to prepare the recipe" className="size-5" />
                {`Prep: ${recipe.prepMinutes} ${recipe.prepMinutes !== 1 ? 'mins' : 'min'}`}
              </span>
              <span className="flex text-base/[24px] tracking-[-0.3px] font-medium">
                <img src={cook} alt="Minutes to cook the recipe" className="size-5" />
                {`Cook: ${recipe.cookMinutes} ${recipe.cookMinutes !== 1 ? 'mins' : 'min'}`}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="text-2xl/[31.2px] tracking-[-1px] font-bold">Ingredients:</h3>
            <ul className="list-none flex flex-col gap-2">
              {recipe.ingredients.map((ing, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-Secundary font-medium text-xl/[30px] tracking-[-0.4px] text-primary-Neitral-800"
                >
                  <img src={arrowBulletPoint} alt="Arrow Bullet Point" className="size-6" />
                  <p>{ing}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="text-2xl/[31.2px] tracking-[-1px] font-bold">Instructions:</h3>
            <ul className="list-none flex flex-col gap-2">
              {recipe.instructions.map((inst, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-Secundary font-medium text-xl/[30px] tracking-[-0.4px] text-primary-Neitral-800"
                >
                  <img src={arrowBulletPoint} alt="Arrow Bullet Point" className="size-6" />
                  <p>{inst}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-primary-Neutral-200"></div>

      <section className="flex flex-col pt-12 gap-6">
        <h2 className="text-[32px]/[41.6px] tracking-[-1px] font-bold">More recipes</h2>
        <div className="flex justify-between flex-wrap gap-8 xl:gap-0">
          {recipesSelected.map((p) => (
            <Plate
              key={p.id}
              images={{
                imgLarge: `/${p.image.large}`,
                imgSmall: `/${p.image.small}`,
                servings,
                prep,
                cook,
              }}
              desc={{
                id: p.id,
                title: p.title,
                text: p.overview,
                servings: p.servings,
                prepTime: p.prepMinutes,
                cookTime: p.cookMinutes,
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
