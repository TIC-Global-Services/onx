import Link from "next/link";
import { footerColumns, footerAbout } from "@/data/footer";

export function Footer() {
  return (
    <footer className="bg-onx-white p-2 sm:p-4 md:p-6 mt-0 md:mt-0">
      <div className="bg-onx-warm-light rounded-[24px] md:rounded-[40px] pt-16 md:pt-24 px-8 md:px-16 overflow-hidden max-w-[1440px] mx-auto">
        {/* Columns */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-12 mb-4 md:mb-8">
          {/* About column */}
          <div className="col-span-2 md:col-span-6 pr-0 md:pr-12">
            <h4 className="text-xl uppercase font-semibold tracking-wider text-onx-near-black">
              {footerAbout.title}
            </h4>
            <p className="mt-6 text-base text-onx-near-black font-normal leading-[1.375]">
              {footerAbout.description}
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="col-span-1 md:col-span-3">
              <h4 className="text-xl uppercase font-semibold tracking-wider text-onx-near-black">
                {column.title}
              </h4>
              <ul className="mt-6 flex flex-col gap-[17px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-onx-near-black hover:text-onx-red transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand graphic at bottom */}
        <div className="px-4 md:px-4 mb-4 md:mb-8 border-t-0">
          <img src="/images/arc-and-bore-enhanced-footer.png" alt="Arc & Bore Logo" className="w-full h-auto object-contain" />
        </div>

        <p className="text-xs text-onx-near-black/60 pb-8 px-4 md:px-4">
          Designed and Developed by TIC Global Services
        </p>
      </div>
    </footer>
  );
}
