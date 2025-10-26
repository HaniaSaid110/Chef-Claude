import { Link } from "react-router-dom";
import foodBg from "../assets/images/food-bg.png";
import FieldsetCard from "../components/FieldsetCard";
import { RiRobot3Fill } from "react-icons/ri";
import { BiSolidDish } from "react-icons/bi";
import { RiFeedbackFill } from "react-icons/ri";

export default function Home() {
  const stats = [
    { id: 1, icon: <RiRobot3Fill />, number: `300,000+`, name: `users` },
    { id: 2, icon: <BiSolidDish />, number: `6123`, name: `Recipes` },
    { id: 3, icon: <RiFeedbackFill />, number: `261,548`, name: `Feedback` },
  ];

  const statElements = stats.map(function (item) {
    return (
      <div
        className="col-span-3 md:col-span-1 flex flex-col gap-2 items-center"
        key={item.id}
      >
        <div className="text-primary text-4xl">{item.icon}</div>
        <span className="font-bold text-lg">{item.number}</span>
        <span className="text-lg">{item.name}</span>
      </div>
    );
  });

  return (
    <main className="w-full flex flex-col items-center">
      <section className="container px-3 md:px-30 my-4">
        <div
          className="grid grid-cols-2 bg-center bg-cover bg-no-repeat rounded-3xl py-15 md:py-30 px-6"
          style={{ backgroundImage: `url(${foodBg})` }}
        >
          <div className="col-span-1 col-end-3 flex flex-col justify-start gap-2 md:gap-5 text-secondary">
            <h2 className="font-bold text-lg md:text-4xl">
              Finding a recipe has never been easier!
            </h2>
            <p className="text-sm text-gray-300 italic md:text-lg">
              Our AI chef, Claude, will help you find a recipe with ingredients
              you got at hand.
            </p>
            <p className="text-xl">Ready for a recipe?</p>
            <button className="self-center md:self-start text-sm rounded-lg border-2 border-primary font-semibold px-4 py-2 cursor-pointer md:text-base">
              <Link to="/claude-recipe">Give Me a Recipe!</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="w-full py-10 px-3 md:px-30 my-4 bg-gray-100 flex flex-col items-center">
        <div className="container flex flex-col items-center">
          <h2 className="text-lg md:text-3xl font-semibold my-10">
            Quick Guide
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <FieldsetCard />
          </div>
        </div>
      </section>
      <section className="container py-10 px-3 md:px-30 my-4">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg md:text-3xl font-semibold my-10">
              Our data don't lie!
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10 p-4">{statElements}</div>
        </div>
      </section>
    </main>
  );
}
