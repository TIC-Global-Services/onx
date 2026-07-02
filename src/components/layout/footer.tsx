import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import {
  footerColumns,
  footerAbout,
  footerNewsletter,
} from "@/data/footer";

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.875 2.5463C14.0727 1.73614 13.1171 1.09377 12.0641 0.656614C11.011 0.219461 9.88145 -0.00373027 8.74125 4.71582e-05C3.96375 4.71582e-05 0.0700001 3.8938 0.0700001 8.6713C0.0700001 10.2025 0.4725 11.69 1.225 13.0025L0 17.5L4.59375 16.2925C5.8625 16.9838 7.28875 17.3513 8.74125 17.3513C13.5187 17.3513 17.4125 13.4575 17.4125 8.68005C17.4125 6.3613 16.5112 4.18255 14.875 2.5463ZM8.74125 15.8813C7.44625 15.8813 6.1775 15.5313 5.06625 14.875L4.80375 14.7175L2.07375 15.435L2.8 12.775L2.625 12.5038C1.90535 11.355 1.52331 10.0269 1.5225 8.6713C1.5225 4.6988 4.76 1.4613 8.7325 1.4613C10.6575 1.4613 12.4687 2.2138 13.825 3.5788C14.4967 4.24718 15.0289 5.04227 15.3909 5.91796C15.7529 6.79365 15.9374 7.7325 15.9338 8.68005C15.9513 12.6525 12.7137 15.8813 8.74125 15.8813ZM12.6962 10.4913C12.4775 10.3863 11.41 9.8613 11.2175 9.78255C11.0162 9.71255 10.8762 9.67755 10.7275 9.88755C10.5787 10.1063 10.1675 10.5963 10.045 10.7363C9.9225 10.885 9.79125 10.9025 9.5725 10.7888C9.35375 10.6838 8.65375 10.4475 7.83125 9.71255C7.18375 9.13505 6.755 8.4263 6.62375 8.20755C6.50125 7.9888 6.60625 7.87505 6.72 7.7613C6.81625 7.66505 6.93875 7.50755 7.04375 7.38505C7.14875 7.26255 7.1925 7.1663 7.2625 7.0263C7.3325 6.87755 7.2975 6.75505 7.245 6.65005C7.1925 6.54505 6.755 5.47755 6.58 5.04005C6.405 4.62005 6.22125 4.67255 6.09 4.6638H5.67C5.52125 4.6638 5.29375 4.7163 5.0925 4.93505C4.9 5.1538 4.34 5.6788 4.34 6.7463C4.34 7.8138 5.11875 8.8463 5.22375 8.9863C5.32875 9.13505 6.755 11.3225 8.925 12.2588C9.44125 12.4863 9.84375 12.6175 10.1587 12.7138C10.675 12.88 11.1475 12.8538 11.5237 12.8013C11.9437 12.74 12.81 12.2763 12.985 11.7688C13.1687 11.2613 13.1687 10.8325 13.1075 10.7363C13.0462 10.64 12.915 10.5963 12.6962 10.4913Z"
      fill="currentColor"
    />
  </svg>
);

const FacebookIcon = ({ size = 20, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const socialIcons = {
  WhatsApp: WhatsAppIcon,
  Mail,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
} as const;

const socialLinks = [
  { label: "WhatsApp", href: "#", icon: "WhatsApp" as const },
  { label: "Email", href: "mailto:hello@arcandbore.com", icon: "Mail" as const },
  { label: "Facebook", href: "#", icon: "Facebook" as const },
  { label: "Instagram", href: "#", icon: "Instagram" as const },
];

export function Footer() {
  return (
    <footer className="bg-onx-white p-2 sm:p-4 md:p-6 mt-0 md:mt-0">
      <div className="bg-onx-warm-light rounded-[24px] md:rounded-[40px] pt-16 md:pt-24 px-8 md:px-16 overflow-hidden max-w-[1440px] mx-auto">
        {/* Columns */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-12 mb-4 md:mb-8">
          {/* About column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5 pr-0 md:pr-12">
            <h4 className="text-xl uppercase font-semibold tracking-wider text-onx-near-black">
              {footerAbout.title}
            </h4>
            <p className="mt-6 text-base text-onx-near-black font-normal leading-[1.375]">
              {footerAbout.description}
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="col-span-1 md:col-span-2">
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

          {/* Newsletter column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 md:-ml-8 lg:-ml-16">
            <h4 className="text-xl uppercase font-semibold tracking-wider text-onx-near-black">
              {footerNewsletter.title}
            </h4>
            <p className="mt-6 text-base text-onx-near-black leading-[1.375]">
              {footerNewsletter.description}
            </p>
            <NewsletterForm
              placeholder={footerNewsletter.placeholder}
              buttonLabel={footerNewsletter.buttonLabel}
              light={true}
            />

            {/* Social icons */}
            <div className="mt-8 flex gap-5">
              {socialLinks.map((social) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons]
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex h-[24px] w-[24px] items-center justify-center text-onx-near-black hover:text-onx-red transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} strokeWidth={1.5} />
                  </Link>
                );
              })}
            </div>
          </div>
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
