import React, { useState } from "react";
import { cn } from "../../utils/cn";


export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "md:rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden",
      "h-120 md:h-120 w-full transition-transform duration-300 ease-out",
      hovered === index && "scale-105"
    )}
  >
    <img
      src={card.img}   // card.img es la URL
      alt={`Imagen ${card.index}`}
      className="object-cover absolute inset-0 w-full h-full"
    />
  </div>
));

Card.displayName = "Card";


export function FocusCards({ cards, texto }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <h2 className="text-center text-4xl pt-32 font-thin tracking-widest">
        {texto}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 max-w-5xl mx-auto md:px-8 w-full mt-10">
        {cards.map((card, index) => (
          <Card
            key={card.index}
            card={card} // Le pasamos el objeto completo
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}