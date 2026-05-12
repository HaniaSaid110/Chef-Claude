import { GiCookingPot } from "react-icons/gi";
import { MdStar, MdBookmark, MdAutoAwesome, MdInfo } from "react-icons/md";

const features = [
  {
    icon: <MdAutoAwesome />,
    title: "AI-Powered",
    desc: "Enter your available ingredients and Claude will recommend the perfect recipe.",
  },
  {
    icon: <MdBookmark />,
    title: "Save Favorites",
    desc: "Save any recipe you love to My Picks for quick access later.",
  },
  {
    icon: <MdStar />,
    title: "Instant Results",
    desc: "No waiting — recipes are generated and displayed in seconds.",
  },
];

export default function About() {
  return (
    <section className="w-full pb-16">
      {/* ── Page header ── */}
      <div className="w-full bg-white border-b border-gray-100 py-10 px-4 flex flex-col items-center gap-2 mb-10">
        <MdInfo className="text-5xl text-primary mb-1" />
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-center">
          About Chef Claude
        </h1>
        <p className="text-sm text-gray-400 font-medium text-center max-w-md">
          Your personal AI-powered kitchen companion.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center gap-12">
        {/* Intro text */}
        <div className="max-w-2xl text-center">
          <p className="text-base md:text-lg text-muted leading-relaxed">
            <strong className="text-primary">Chef Claude</strong> is your
            personal AI-powered recipe assistant, who helps you discover
            delicious recipes based on the ingredients you have at home. Simply
            enter your available ingredients, and Chef Claude will suggest
            creative meal ideas tailored to your pantry.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-4 py-10 px-6 bg-white rounded-card shadow-card border-t-4 border-primary transition-[box-shadow,transform] duration-200 hover:shadow-card-hover hover:-translate-y-[3px]"
            >
              <div className="text-primary text-3xl">{f.icon}</div>
              <h3 className="font-bold text-base">{f.title}</h3>
              <p className="text-base leading-relaxed text-muted">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* How to get started */}
        <div className="bg-white border border-border rounded-card shadow-card p-8 w-full max-w-2xl">
          <h2 className="font-bold text-lg mb-4">How to get started</h2>
          <ul className="flex flex-col gap-3 text-muted text-sm">
            {[
              "Enter at least 3 ingredients to get a recipe",
              "Get instant recipe recommendations powered by AI",
              "Save your favorite picks for easy access",
              "Whether cooking something new or using what's in the fridge — Claude has you covered!",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
