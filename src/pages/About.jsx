export default function About() {
  console.log(`hello`);

  return (
    <section className=" md:px-30 p-6 rounded-lg flex flex-col items-center">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          About Chef Claude
        </h1>
        <div className="my-8 text-lg">
          <p className="mb-3">
            <strong className="text-primary">Chef Claude</strong> is your
            personal AI-powered recipe assistant, who helps you discover
            delicious recipes based on the ingredients you have at home. Simply
            enter your available ingredients, and Chef Claude will suggest
            creative meal ideas tailored to your pantry.
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>Enter at least 3 ingredients to get a recipe</li>
            <li>Get instant recipe recommendations powered by AI</li>
            <li>Save your favorite picks for easy access</li>
          </ul>
          <p>
            Whether you're looking to try something new or make the most of
            what's in your fridge, Chef Claude is here to inspire your next
            meal!
          </p>
        </div>
      </div>
    </section>
  );
}
