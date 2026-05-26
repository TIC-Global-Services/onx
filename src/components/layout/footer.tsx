import Link from "next/link";
import { MessageCircle, Mail, Globe, Camera } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import {
  footerColumns,
  footerAbout,
  footerNewsletter,
} from "@/data/footer";

const socialIcons = {
  MessageCircle,
  Mail,
  Globe,
  Camera,
} as const;

const socialLinks = [
  { label: "WhatsApp", href: "#", icon: "MessageCircle" as const },
  { label: "Email", href: "mailto:hello@onxsports.com", icon: "Mail" as const },
  { label: "Facebook", href: "#", icon: "Globe" as const },
  { label: "Instagram", href: "#", icon: "Camera" as const },
];

export function Footer() {
  return (
    <footer className="bg-onx-white p-2 sm:p-4 md:p-6">
      <div className="bg-onx-black rounded-[24px] md:rounded-[40px] pt-16 md:pt-24 px-8 md:px-16 overflow-hidden max-w-[1440px] mx-auto">
        {/* Columns */}
        <div className="grid gap-12 md:grid-cols-12 mb-4 md:mb-8">
          {/* About column */}
          <div className="md:col-span-4 lg:col-span-5 pr-0 md:pr-12">
            <h4 className="text-body uppercase font-semibold tracking-wider text-onx-white">
              {footerAbout.title}
            </h4>
            <p className="mt-6 text-body-sm text-onx-white/70 leading-[1.375]">
              {footerAbout.description}
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="md:col-span-2">
              <h4 className="text-body uppercase font-semibold tracking-wider text-onx-white">
                {column.title}
              </h4>
              <ul className="mt-6 flex flex-col gap-[17px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-onx-white/70 hover:text-onx-red transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-body uppercase font-semibold tracking-wider text-onx-white">
              {footerNewsletter.title}
            </h4>
            <p className="mt-6 text-body-sm text-onx-white/70 leading-[1.375]">
              {footerNewsletter.description}
            </p>
            <NewsletterForm
              placeholder={footerNewsletter.placeholder}
              buttonLabel={footerNewsletter.buttonLabel}
            />

            {/* Social icons */}
            <div className="mt-8 flex gap-5">
              {socialLinks.map((social) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons] || socialIcons.Globe;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex h-[24px] w-[24px] items-center justify-center text-onx-white hover:text-onx-red transition-colors"
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
          <img src="/images/onxfooter.png" alt="ONX Logo" className="w-full h-auto object-contain" />
        </div>
      </div>
    </footer>
  );
}
