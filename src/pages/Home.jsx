import { Link } from "react-router-dom";
import foodBg from "../assets/images/food-bg.jpg";
import FieldsetCard from "../components/FieldsetCard";
import { RiRobot3Fill } from "react-icons/ri";
import { BiSolidDish } from "react-icons/bi";
import { RiFeedbackFill } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";

export default function Home() {
  const stats = [
    { id: 1, icon: <RiRobot3Fill />, number: `300,000+`, name: `Users` },
    { id: 2, icon: <BiSolidDish />, number: `6,123`, name: `Recipes` },
    { id: 3, icon: <RiFeedbackFill />, number: `261,548`, name: `Feedback` },
  ];

  const statElements = stats.map(function (item) {
    return (
      <div
        key={item.id}
        className="flex flex-col items-center gap-2 p-8 bg-white rounded-card shadow-card transition-[box-shadow,transform] duration-200 hover:shadow-card-hover hover:-translate-y-[3px]"
      >
        <div className="text-[2.5rem] text-primary">{item.icon}</div>
        <span className="text-[1.6rem] font-extrabold">{item.number}</span>
        <span className="text-[0.9rem] text-muted font-medium">
          {item.name}
        </span>
      </div>
    );
  });

  return (
    <main className="w-full flex flex-col items-center">
      {/* ── Hero ── */}
      <section className="container px-3 md:px-8 my-6 w-full">
        <div
          className="relative bg-center bg-cover bg-no-repeat rounded-3xl overflow-hidden"
          style={{ backgroundImage: `url(${foodBg})` }}
        >
          <div className="bg-[linear-gradient(135deg,oklch(0.1_0.01_150/0.60)_0%,oklch(0.18_0.12_150/0.60)_100%)] rounded-3xl px-8 py-20 md:py-36 grid grid-cols-2">
            <div className="col-span-2 md:col-span-1 flex flex-col gap-5 text-white">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-white/10 backdrop-blur px-3 py-1 rounded-full w-fit">
                AI-Powered Chef
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Finding a recipe has
                <br className="hidden md:block" /> never been easier!
              </h1>
              <p className="text-white/75 text-base md:text-lg max-w-md">
                Our AI chef, Claude, will help you find a perfect recipe with
                whatever ingredients you have on hand.
              </p>
              <Link
                to="/claude-recipe"
                className="inline-flex items-center gap-2 font-semibold text-[0.9rem] px-[1.4rem] py-[0.6rem] rounded-xl cursor-pointer transition-all duration-[180ms] bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-800 hover:-translate-y-px self-start mt-2"
              >
                Give Me a Recipe! <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Guide ── */}
      <section className="w-full py-16 px-3 md:px-8 bg-white">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            How it works
          </p>
          <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold tracking-tight text-center mb-12">
            Quick Guide
          </h2>
          <div className="grid grid-cols-3 gap-6 w-full">
            <FieldsetCard />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="container py-16 px-3 md:px-8 w-full">
        <div className="flex flex-col items-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            By the numbers
          </p>
          <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold tracking-tight text-center mb-12">
            Our data don't lie!
          </h2>
          <div className="grid grid-cols-3 gap-6 w-full">{statElements}</div>
        </div>
      </section>
    </main>
  );
}
