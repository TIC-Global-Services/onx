export function ContactMapSection() {
  return (
    <section className="bg-onx-white py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-onx-near-black/5 overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.033502852504!2d80.2039236!3d13.0891515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265df5df4d859%3A0xcb1b51e44f84c988!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="ONX Target Sportz Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
