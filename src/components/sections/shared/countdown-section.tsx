"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";

interface CountdownSectionProps {
  label: string;
  endDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(endDate: string): TimeLeft {
  const diff = new Date(endDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export function CountdownSection({ label, endDate }: CountdownSectionProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calcTimeLeft(endDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft(endDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0
  ) {
    return null;
  }

  return (
    <section className="bg-onx-dark-gray py-8">
      <Container>
        <p className="text-center text-xs uppercase tracking-wider text-onx-white/60">
          {label}
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <CountdownUnit value={pad(timeLeft.days)} unit="Days" />
          <Separator />
          <CountdownUnit value={pad(timeLeft.hours)} unit="Hrs" />
          <Separator />
          <CountdownUnit value={pad(timeLeft.minutes)} unit="Min" />
          <Separator />
          <CountdownUnit value={pad(timeLeft.seconds)} unit="Sec" />
        </div>
      </Container>
    </section>
  );
}

function CountdownUnit({ value, unit }: { value: string; unit: string }) {
  return (
    <div className="text-center">
      <span className="text-xs text-onx-white">{value}</span>
      <span className="ml-1 text-xs uppercase text-onx-white/60">{unit}</span>
    </div>
  );
}

function Separator() {
  return <span className="text-xs text-onx-red">:</span>;
}
