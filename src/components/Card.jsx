import { MdDeleteOutline } from "react-icons/md";
import { GiMeal } from "react-icons/gi";

export default function Card(props) {
  return (
    <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white border border-border rounded-card px-5 py-4 flex items-center justify-between gap-3 shadow-card transition-[box-shadow,transform] duration-200 hover:shadow-card-hover hover:-translate-y-[2px]">
      <div className="flex items-center gap-2 min-w-0">
        <GiMeal className="text-primary text-xl flex-shrink-0" />
        <h2
          className="font-semibold text-[0.95rem] cursor-pointer truncate transition-colors duration-150 hover:text-primary"
          onClick={props.onShow}
          title={props.recipeTitle}
        >
          {props.recipeTitle}
        </h2>
      </div>
      <button
        className="text-gray-300 hover:text-red-400 active:text-red-600 transition-colors cursor-pointer flex-shrink-0"
        onClick={props.unfavorite}
        title="Remove from favorites"
      >
        <MdDeleteOutline className="text-2xl" />
      </button>
    </div>
  );
}
