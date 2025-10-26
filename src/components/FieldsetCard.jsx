export default function FieldsetCard() {
  const fieldsets = [
    { step: 1, description: `Go to "Claude Recipe" page` },
    { step: 2, description: `List as many ingredients as you desire` },
    { step: 3, description: `Click on "Get a Recipe" and get your recipe!` },
  ];

  const fieldsetElements = fieldsets.map(function (item) {
    return (
      <fieldset
        className="col-span-3 md:col-span-1 flex flex-col items-center rounded-2xl py-15 px-10 mx-8 text-center bg-secondary"
        key={item.step}
      >
        <legend className="font-press-start text-xl md:text-2xl border border-primary text-primary rounded-lg p-4 bg-secondary">
          {item.step}
        </legend>
        <p className="md:text-lg">{item.description}</p>
      </fieldset>
    );
  });
  return <>{fieldsetElements}</>;
}
