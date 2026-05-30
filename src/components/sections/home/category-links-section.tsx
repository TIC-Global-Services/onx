import Link from "next/link";
import type { Category } from "@/data/types";

interface CategoryLinksSectionProps {
  categories: Category[];
}

export function CategoryLinksSection({ categories }: CategoryLinksSectionProps) {
  return (
    <section id="category-links" className="bg-onx-white py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="w-full">

          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-onx-red"></div>
            <span className="text-xs uppercase font-normal tracking-[0.3em] text-onx-near-black font-montserrat">
              Explore Collections
            </span>
          </div>

          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.slug}
              className="group flex items-center justify-start gap-4 md:gap-8 py-8 md:py-12 border-b border-onx-border-light hover:border-onx-red/40 transition-colors"
            >
              {/* Leading image (for Rifles, Archery, Darts) */}
              <div className="w-[60px] h-[40px] md:w-[100px] md:h-[60px] flex-shrink-0 flex items-center justify-center rounded overflow-hidden mix-blend-multiply">
                {category.name.toLowerCase() === 'rifles & guns' && (
                  <img src="/images/explore/revolver.png" alt="Rifles" className="w-full h-full object-contain" />
                )}
                {category.name.toLowerCase() === 'archery' && (
                  <img src="/images/explore/arrow.png" alt="Archery" className="w-full h-full object-contain" />
                )}
                {category.name.toLowerCase() === 'darts' && (
                  <img src="/images/explore/archery.png" alt="Darts" className="w-full h-full object-contain" />
                )}
              </div>

              {/* Category Name */}
              <span className="inline-flex items-center gap-4 group/name">
                <span className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[100px] font-normal uppercase leading-[1] text-onx-near-black group-hover:text-onx-red transition-colors duration-300 tracking-wider">
                  {category.name}
                </span>
                <span className="hidden md:flex w-[40px] h-[28px] md:w-[60px] md:h-[40px] flex-shrink-0 items-center justify-center mix-blend-multiply transition-all duration-300 group-hover:translate-y-2">
                  {category.name.toLowerCase() === 'rifles & guns' && (
                    <img src="/images/explore/revolver.png" alt="" className="w-full h-full object-contain" />
                  )}
                  {category.name.toLowerCase() === 'archery' && (
                    <img src="/images/explore/arrow.png" alt="" className="w-full h-full object-contain" />
                  )}
                  {category.name.toLowerCase() === 'darts' && (
                    <img src="/images/explore/archery.png" alt="" className="w-full h-full object-contain" />
                  )}
                </span>
              </span>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
