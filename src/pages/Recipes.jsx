import Plate from '@/components/Plate';
import usePlateFilter from '@/hooks/usePlateFilter';
import MenuFilter from '@/components/MenuFilter';
import searchIcon from '@/images/icons/icon-search.svg';
import servings from '@/images/icons/icon-servings.svg';
import prep from '@/images/icons/icon-prep-time.svg';
import cook from '@/images/icons/icon-cook-time.svg';
import { useContext } from 'react';
import { RecipesContext } from '@/context/recipesContext';

export default function Recipes() {
  const { plates } = useContext(RecipesContext);

  const { filteredProducts, setinputQuery, filters, setFilters } = usePlateFilter({ plates });

  function changePrepTime(newPrepTime) {
    setFilters((prevState) => ({
      ...prevState,
      prepTime: newPrepTime,
    }));
  }
  function changeCookTime(newCookTime) {
    setFilters((prevState) => ({
      ...prevState,
      cookTime: newCookTime,
    }));
  }

  return (
    <main className="mx-auto flex flex-col items-center max-w-[1200px] w-full">
      <section className="text-center flex flex-col gap-3 p-[80px_0_64px_0] max-md:p-[48px_8px]">
        <h1 className="text-5xl/[57px] max-md:text-[40px]/[48px] max-md:max-w-full w-full tracking-[-2px] text-primary-Neutral-900 font-extrabold">
          Explore our simple, healthy recipes
        </h1>
        <p className="font-Secundary text-xl/[30px] tracking-[-0.4px] font-normal max-w-[724px] max-md:max-w-full">
          Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to
          find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.
        </p>
      </section>
      <section className="w-full">
        <search className="flex items-center justify-between w-full mb-6 max-lg:p-[0_32px] max-md:p-[0_8px] max-md:flex-col max-md:max-w-full max-md:gap-3">
          <div className="flex gap-4 max-md:flex-col w-full">
            <MenuFilter
              times={plates}
              filters={filters}
              onPrepTimeChange={changePrepTime}
              onCookTimeChange={changeCookTime}
            />
          </div>
          <div className="flex gap-2 max-w-[310px] max-md:max-w-full w-full bg-primary-Neutral-0 p-[10px_16px] rounded-lg border border-primary-Neutral-300 group focus-within:border-primary-Neutral-900">
            <img src={searchIcon} alt="Search icon" />
            <input
              type="text"
              placeholder="Search by name or ingredient…"
              onChange={(e) => setinputQuery(e.target.value)}
              className="w-full outline-0 placeholder:text-primary-Neutral-900/70 text-primary-Neutral-900 font-semibold"
            />
          </div>
        </search>
      </section>
      <section className="flex content-start items-start self-stretch gap-9 flex-wrap max-lg:p-[0_32px] max-md:p-[0_8px] max-md:max-w-full ">
        {filteredProducts.map((p) => (
          <Plate
            key={p.id}
            images={{
              imgLarge: p.image.large,
              imgSmall: p.image.small,
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
      </section>
    </main>
  );
}
