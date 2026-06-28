import Link from "next/link";

export function ContactInfoSection() {
  return (
    <section className="bg-onx-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col lg:flex-row gap-16 lg:gap-8">

        {/* Left Column */}
        <div className="w-full lg:w-1/4">
          <p className="text-base md:text-xl leading-[1.6] text-onx-near-black max-w-[250px]">
            For bookings, enquiries, or just to take your first shot get in touch with ONX.
          </p>
        </div>

        {/* Middle Column Grid */}
        <div className="w-full lg:w-2/4 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

          {/* Bookings */}
          <div>
            <h4 className="text-base md:text-xl uppercase font-bold tracking-tight mb-4 text-onx-near-black">BOOKINGS</h4>
            <div className="flex flex-col gap-1 text-sm md:text-base text-onx-near-black/70">
              <a href="mailto:book@onxsportz.com" className="hover:text-onx-red transition-colors">book@onxsportz.com</a>
              <a href="tel:XXXXX XXXXX" className="hover:text-onx-red transition-colors">XXXXX XXXXX</a>
            </div>
          </div>

          {/* General Enquiries */}
          <div>
            <h4 className="text-base md:text-xl uppercase font-bold tracking-tight mb-4 text-onx-near-black">GENERAL ENQUIRIES</h4>
            <div className="flex flex-col gap-1 text-sm md:text-base text-onx-near-black/70">
              <a href="mailto:hello@onxsportz.com" className="hover:text-onx-red transition-colors">hello@onxsportz.com</a>
              <a href="tel:XXXXX XXXXX" className="hover:text-onx-red transition-colors">XXXXX XXXXX</a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-base md:text-xl uppercase font-bold tracking-tight mb-4 text-onx-near-black">LOCATION</h4>
            <div className="text-sm md:text-base text-onx-near-black/70 leading-[1.5]">
              ONX Target Sportz<br />
              Anna Nagar, Chennai<br />
              Tamil Nadu
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-base md:text-xl uppercase font-bold tracking-tight mb-4 text-onx-near-black">WORKING HOURS</h4>
            <div className="text-sm md:text-base text-onx-near-black/70 leading-[1.5]">
              Tue - Sat: 9:00 AM - 9:00 PM<br />
              Sun: 9:00 AM - 12:30 PM<br />
              Mon: Closed
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base md:text-xl uppercase font-bold tracking-tight mb-4 text-onx-near-black">SOCIAL</h4>
            <div className="flex flex-col gap-1 text-sm md:text-base text-onx-near-black/70">
              <Link href="#" className="hover:text-onx-red transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-onx-red transition-colors">WhatsApp</Link>
            </div>
          </div>

        </div>

        {/* Right Column Image */}
        <div className="w-full lg:w-1/4 h-[300px] lg:h-[400px] bg-onx-near-black/5 relative overflow-hidden">
          <img
            src="/images/contact/contact-gun.png"
            alt="Handgun closeup"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </div>

      </div>
    </section>
  );
}
