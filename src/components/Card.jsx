import { MdDeleteOutline } from "react-icons/md";

export default function Card(props) {
  return (
    <>
      <div className="md:col-span-1 sm:col-span-2 col-span-4 border rounded-2xl flex flex-row justify-between p-4">
        <h2 className="text-lg cursor-pointer" onClick={props.onShow}>
          {props.recipeTitle}
        </h2>
        <button
          className="text-primary cursor-pointer hover:text-green-600 active:text-green-800"
          onClick={props.unfavorite}
        >
          <MdDeleteOutline className="text-2xl" />
        </button>
      </div>
    </>
  );
}
