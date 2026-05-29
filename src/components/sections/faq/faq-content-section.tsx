"use client";

import { useState } from "react";
import { Package, Truck, ChevronDown } from "lucide-react";
import Link from "next/link";

type FaqItem = {
  question: string;
  answer: string;
};

const orderFaqs: FaqItem[] = [
  { question: "ARE THERE ANY SHIPPING CHARGES?", answer: "Shipping charges vary depending on your location and order value. Orders above a certain amount qualify for free standard shipping. Exact charges will be calculated and displayed at checkout before you complete your purchase." },
  { question: "WHAT HAPPENS IF MY ORDER IS DELAYED?", answer: "If your order is delayed, our support team will keep you updated via email or phone. You can track your shipment in real time using the tracking link shared after dispatch. For further assistance, reach out to us with your order ID." },
  { question: "CAN I PLACE BULK OR CUSTOM ORDERS?", answer: "Yes, we accept bulk and custom orders. Please contact our sales team with your requirements, and we will provide a tailored quote along with estimated delivery timelines. Discounts are available for larger quantities." },
  { question: "WHAT PAYMENT METHODS DO YOU ACCEPT?", answer: "We accept all major credit and debit cards, UPI, net banking, and popular digital wallets. All transactions are processed through secure payment gateways to ensure your information is protected." },
];

const shippingFaqs: FaqItem[] = [
  { question: "HOW LONG DOES SHIPPING TAKE?", answer: "Standard shipping takes 3-5 business days. Express shipping options are available at checkout." },
  { question: "DO YOU SHIP ACROSS INDIA?", answer: "Yes, we ship to all major cities and towns across India." },
  { question: "WHAT HAPPENS IF MY SHIPMENT IS DELAYED?", answer: "If your shipment is delayed, please contact our support team with your order ID." },
  { question: "WHAT IF I MISS MY DELIVERY?", answer: "Our delivery partners will attempt delivery up to three times before returning the package to us." },
];

function AccordionItem({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-onx-near-black/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group outline-none"
      >
        <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-onx-near-black group-hover:text-onx-red transition-colors">
          {item.question}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-onx-near-black transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[13px] md:text-sm text-onx-near-black/70 leading-[1.6]">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FaqContentSection() {
  return (
    <section className="bg-onx-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        
        {/* Intro Header */}
        <div className="flex flex-col items-center text-center max-w-full mx-auto mb-24 md:mb-32">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-onx-near-black"></div>
            <span className="text-[10px] md:text-xs uppercase font-normal tracking-tight text-onx-near-black">
              ABOUT THIS COLLECTION
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-bold uppercase leading-[1.1] text-onx-near-black mb-8 tracking-tight">
            FREQUENTLY ASKED<br/>QUESTIONS
          </h2>

          <p className="text-sm md:text-xl text-onx-near-black leading-[1.6] mb-12">
            Find answers to the most common questions about our products, orders, and services. This section is designed to help you get clear, quick information so you can focus on performance without any hassle.
          </p>

          <div className="flex items-center justify-center">
            <button className="mt-2 bg-onx-white border border-onx-near-black text-onx-black px-10 py-4 text-sm uppercase font-bold tracking-[0.15em] hover:bg-onx-black hover:text-white transition-colors shadow-sm">
            Contact Us
          </button>
          </div>
        </div>

        {/* Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Order Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Package size={24} className="text-onx-near-black" strokeWidth={1.5} />
              <h3 className="text-base md:text-2xl uppercase font-bold tracking-[0.2em] text-onx-near-black">
                ORDER
              </h3>
            </div>
            <div className="flex flex-col border-t border-onx-near-black/20">
              {orderFaqs.map((faq, index) => (
                <AccordionItem key={`order-${index}`} item={faq} />
              ))}
            </div>
          </div>

          {/* Shipping Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Truck size={24} className="text-onx-near-black" strokeWidth={1.5} />
              <h3 className="text-base md:text-2xl uppercase font-bold tracking-[0.2em] text-onx-near-black">
                SHIPPING
              </h3>
            </div>
            <div className="flex flex-col border-t border-onx-near-black/20">
              {shippingFaqs.map((faq, index) => (
                <AccordionItem key={`shipping-${index}`} item={faq} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
