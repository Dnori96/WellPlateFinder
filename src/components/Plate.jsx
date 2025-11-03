import { Link } from 'react-router-dom';

export default function Plate({ images, desc }) {
  return (
    <article className="max-w-[376px]">
      <picture className="max-md:flex max-md:flex-col max-md:items-center">
        <source media="(min-width: 768px)" srcSet={images.imgLarge} />
        <img src={images.imgSmall} alt="Large photo of a woman cooking" />
      </picture>
      <div>
        <h3>{desc.title}</h3>
        <p>{desc.text}</p>
      </div>
      <div>
        <span>{`Servings: ${desc.servings}`}</span>
        <span>{`Prep: ${desc.prepTime} ${desc.prepTime >= 10 ? 'mins' : 'min'}`}</span>
        <span>{`Cook: ${desc.cookTime} ${desc.cookTime >= 10 ? 'mins' : 'min'}`}</span>
      </div>
      <Link>
        <button className="bg-primary-Neutral-900 text-primary-Neutral-0">View Recipe</button>
      </Link>
    </article>
  );
}
