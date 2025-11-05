import initialRecipes from '@/lib/mock/data.json';
import Plate from '@/components/Plate';
import { useState } from 'react';
import usePlateFilter from '../hooks/usePlateFilter';
import MenuFilter from '../components/MenuFilter';

export default function Recipes() {
  const [plates] = useState(initialRecipes);

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
      <section className="text-center flex flex-col gap-3 p-[80px_0_64px_0]">
        <h1 className="text-5xl/[57px] tracking-[-2px] text-primary-Neutral-900 font-extrabold">
          Explore our simple, healthy recipes
        </h1>
        <p className="font-Secundary text-xl/[30px] tracking-[-0.4px] font-normal max-w-[724px]">
          Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to
          find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.
        </p>
      </section>
      <section className="w-full">
        <search className="flex items-center justify-between w-full mb-6">
          <div className="flex gap-4">
            <MenuFilter filters={{ filters }} onPrepTimeChange={changePrepTime} onCookTimeChange={changeCookTime} />
          </div>
          <input
            type="text"
            placeholder="Search by name or ingredient…"
            onChange={(e) => setinputQuery(e.target.value)}
          />
        </search>
      </section>
      <section className="flex content-start items-start self-stretch gap-9 flex-wrap">
        {filteredProducts.map((p) => (
          <Plate
            key={p.id}
            images={{
              imgLarge: p.image.large,
              imgSmall: p.image.small,
            }}
            desc={{
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
