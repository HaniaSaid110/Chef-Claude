export default function FieldsetCard() {
  const fieldsets = [
    { step: 1, description: `Go to "Claude Recipe" page` },
    { step: 2, description: `List as many ingredients as you desire` },
    { step: 3, description: `Click "Get a Recipe" and enjoy your meal!` },
  ];

  const fieldsetElements = fieldsets.map(function (item) {
    return (
      <div
        key={item.step}
        className="col-span-3 md:col-span-1 flex flex-col items-center text-center gap-4 py-10 px-6 bg-white rounded-card shadow-card border-t-4 border-primary transition-[box-shadow,transform] duration-200 hover:shadow-card-hover hover:-translate-y-[3px]"
      >
        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-[1.1rem]">
          {item.step}
        </div>
        <p className="text-base leading-relaxed">{item.description}</p>
      </div>
    );
  });

  return <>{fieldsetElements}</>;
}
