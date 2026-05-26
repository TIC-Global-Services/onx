import Link from "next/link";

const cards = [
  {
    id: "burn",
    text:"A word from the founder",
    title: "BURN",
    action: "EXPLORE",
    image: "/images/story/story-burn.png",
    bgClass: "bg-onx-near-black",
    textClass: "text-onx-white",
    squareClass: "bg-onx-white",
    btnClass: "bg-onx-white text-onx-near-black hover:bg-gray-200"
  },
  {
    id: "faq",
    text: "every step is guided by purpose",
    title: "FAQ",
    action: "READ",
    bgClass: "bg-[#F5F5F5]",
    textClass: "text-onx-near-black",
    squareClass: "bg-onx-near-black",
    btnClass: "bg-onx-near-black text-onx-white hover:bg-black"
  },
  {
    id: "out",
    text: "built with purpose, driven to go beyond limits",
    title: "OUT",
    action: "FIND OUT",
    image: "/images/story/story-out.png",
    bgClass: "bg-onx-near-black",
    textClass: "text-onx-white",
    squareClass: "bg-onx-white",
    btnClass: "bg-onx-white text-onx-near-black hover:bg-gray-200"
  }
];

export function StoryCardsSection() {
  return (
    <section className="bg-onx-white w-full">
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[600px] lg:h-[800px]">
        {cards.map((card) => (
          <div key={card.id} className={`w-full md:w-1/3 h-[400px] sm:h-[500px] md:h-full relative flex flex-col items-center justify-between p-12 lg:p-16 overflow-hidden group ${card.bgClass}`}>
            
            {card.image && (
              <img 
                src={card.image} 
                alt={card.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 z-0" 
              />
            )}
            
            <div className="relative z-10 flex items-center gap-2">
              <div className={`w-2 h-2 ${card.squareClass}`}></div>
              <span className={`text-[10px] md:text-[12px] uppercase tracking-tight font-normal ${card.textClass}`}>
                {card.text}
              </span>
            </div>

            <h2 className={`relative z-10 text-[60px] sm:text-[80px] md:text-[60px] lg:text-[100px] xl:text-[120px] font-bold uppercase leading-[1] tracking-tight ${card.textClass}`}>
              {card.title}
            </h2>

            <Link href="#" className={`relative z-10 px-8 py-4 text-[12px] md:text-[13px] font-bold uppercase tracking-wider transition-colors ${card.btnClass}`}>
              {card.action}
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
}
