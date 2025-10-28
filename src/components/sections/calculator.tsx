"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import DotGrid from "@/components/ui/DotGrid";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartData = {
  name: string;
  Économies: number;
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-white/20 bg-[#1e2247] p-3 shadow-lg">
        <div className="flex flex-col space-y-1">
          <span className="text-xs text-text-secondary-light">
            {label}
          </span>
          <span className="text-lg font-bold text-[#0084FF]">
            {formatCurrency(payload[0].value)}
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export default function Calculator() {
  const [hours, setHours] = useState(1);
  const [employees, setEmployees] = useState(1);
  const [hourlyCost, setHourlyCost] = useState(20);

  const [monthlyHoursSaved, setMonthlyHoursSaved] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);

  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  const WORKING_DAYS_PER_MONTH = 20;

  useEffect(() => {
    const animateBlobs = () => {
      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${Math.sin(Date.now() / 3000) * 50}px, ${Math.cos(Date.now() / 2000) * 50}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${Math.cos(Date.now() / 4000) * 50}px, ${Math.sin(Date.now() / 3500) * 50}px)`;
      }
      requestAnimationFrame(animateBlobs);
    };
    const animation = requestAnimationFrame(animateBlobs);
    return () => cancelAnimationFrame(animation);
  }, []);

  useEffect(() => {
    const dailyHours = hours * employees;
    const monthlyHours = Math.round(dailyHours * WORKING_DAYS_PER_MONTH);
    const savings = Math.round(monthlyHours * hourlyCost);

    setMonthlyHoursSaved(monthlyHours);
    setMonthlySavings(savings);
  }, [hours, employees, hourlyCost]);

  const yearlySavings = monthlySavings * 12;

  const chartData: ChartData[] = useMemo(
    () => [
      { name: "0", Économies: 0 },
      { name: "Mois 1", Économies: monthlySavings * 1 },
      { name: "Mois 3", Économies: monthlySavings * 3 },
      { name: "Mois 6", Économies: monthlySavings * 6 },
      { name: "Mois 12", Économies: yearlySavings },
    ],
    [monthlySavings, yearlySavings]
  );
  
  const handleHoursChange = useCallback((value: number[]) => setHours(Math.max(1, value[0])), []);
  const handleEmployeesChange = useCallback((value: number[]) => setEmployees(Math.max(1, value[0])), []);
  const handleCostChange = useCallback((value: number[]) => setHourlyCost(value[0]), []);

  return (
    <section className="relative py-10 sm:py-13 lg:py-16 bg-background-primary overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={7}
          gap={20}
          baseColor="rgba(37, 38, 84, 0.15)"
          activeColor="#0084FF"
          proximity={96}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div
        ref={blobRef1}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={blobRef2}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Calculez vos{" "}
            <span className="text-[#0084FF]">économies potentielles</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Découvrez l'impact de l'automatisation sur votre rentabilité
          </p>
        </div>

        {/* Main calculator container */}
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#1e2247]/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr_1.3fr] gap-6 lg:gap-8 xl:gap-10">
              
              {/* Column 1: Inputs */}
              <div className="space-y-6">
                <h3 className="text-base lg:text-lg font-bold text-[#0084FF] mb-4">
                  Vos données actuelles
                </h3>
                
                <div className="space-y-5">
                  {/* Heures/jour slider */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center gap-3">
                      <label className="text-white text-sm font-semibold leading-tight flex-1">
                        Heures/jour sur tâches répétitives
                      </label>
                      <span className="bg-[#0084FF] text-white text-sm font-bold py-1 px-3 rounded-full min-w-[50px] text-center shadow-lg">
                        {hours}h
                      </span>
                    </div>
                    <p className="text-xs text-[#94A3B8]">
                      Saisie de données, emails, rapports...
                    </p>
                    <Slider 
                      value={[hours]} 
                      onValueChange={handleHoursChange} 
                      min={1}
                      max={10} 
                      step={0.5} 
                      className="[&>[data-radix-slider-track]]:h-2 [&>[data-radix-slider-track]]:bg-white/20 [&>[data-radix-slider-range]]:bg-[#0084FF] [&>[role=slider]]:h-5 [&>[role=slider]]:w-5 [&>[role=slider]]:border-2 [&>[role=slider]]:border-white [&>[role=slider]]:bg-[#0084FF] [&>[role=slider]]:shadow-lg"
                    />
                  </div>

                  {/* Nombre d'employés slider */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center gap-3">
                      <label className="text-white text-sm font-semibold leading-tight flex-1">
                        Nombre d'employés
                      </label>
                      <span className="bg-[#0084FF] text-white text-sm font-bold py-1 px-3 rounded-full min-w-[50px] text-center shadow-lg">
                        {employees}
                      </span>
                    </div>
                    <Slider 
                      value={[employees]} 
                      onValueChange={handleEmployeesChange} 
                      min={1}
                      max={50} 
                      step={1} 
                      className="[&>[data-radix-slider-track]]:h-2 [&>[data-radix-slider-track]]:bg-white/20 [&>[data-radix-slider-range]]:bg-[#0084FF] [&>[role=slider]]:h-5 [&>[role=slider]]:w-5 [&>[role=slider]]:border-2 [&>[role=slider]]:border-white [&>[role=slider]]:bg-[#0084FF] [&>[role=slider]]:shadow-lg"
                    />
                  </div>

                  {/* Coût horaire slider */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center gap-3">
                      <label className="text-white text-sm font-semibold leading-tight flex-1">
                        Coût horaire moyen
                      </label>
                      <span className="bg-[#0084FF] text-white text-sm font-bold py-1 px-3 rounded-full min-w-[50px] text-center shadow-lg">
                        {hourlyCost}€
                      </span>
                    </div>
                    <p className="text-xs text-[#94A3B8]">
                      Salaire + charges (net × 1.8)
                    </p>
                    <Slider 
                      value={[hourlyCost]} 
                      onValueChange={handleCostChange} 
                      min={10}
                      max={100} 
                      step={1} 
                      className="[&>[data-radix-slider-track]]:h-2 [&>[data-radix-slider-track]]:bg-white/20 [&>[data-radix-slider-range]]:bg-[#0084FF] [&>[role=slider]]:h-5 [&>[role=slider]]:w-5 [&>[role=slider]]:border-2 [&>[role=slider]]:border-white [&>[role=slider]]:bg-[#0084FF] [&>[role=slider]]:shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Column 2: Monthly Impact + Annual Savings */}
              <div className="space-y-4">
                <h3 className="text-base lg:text-lg font-bold text-[#0084FF] mb-4">
                  Impact mensuel
                </h3>
                
                <div className="space-y-2.5">
                  {/* Heures libérées */}
                  <Card className="bg-[#1a2147]/80 border border-[#2d3461] backdrop-blur-sm">
                    <CardContent className="p-2 py-1.5">
                      <p className="text-[#A0AEC0] text-[9px] font-medium mb-0.5 uppercase tracking-wide">
                        Heures libérées
                      </p>
                      <p className="text-xl font-black text-white leading-none">
                        {monthlyHoursSaved}h
                      </p>
                    </CardContent>
                  </Card>

                  {/* Économies */}
                  <Card className="bg-[#1a2147]/80 border border-[#2d3461] backdrop-blur-sm">
                    <CardContent className="p-2 py-1.5">
                      <p className="text-[#A0AEC0] text-[9px] font-medium mb-0.5 uppercase tracking-wide">
                        Économies
                      </p>
                      <p className="text-xl font-black text-white leading-none">
                        {formatCurrency(monthlySavings)}
                      </p>
                    </CardContent>
                  </Card>

                  {/* ROI estimé */}
                  <Card className="bg-[#1a2147]/80 border border-[#2d3461] backdrop-blur-sm">
                    <CardContent className="p-2 py-1.5">
                      <p className="text-[#A0AEC0] text-[9px] font-medium mb-0.5 uppercase tracking-wide">
                        ROI estimé
                      </p>
                      <p className="text-xl font-black text-white leading-none">
                        3-4 mois
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Annual savings card */}
                <Card className="bg-gradient-to-br from-[#0084FF]/15 to-[#7C3AED]/15 border border-[#0084FF]/50 backdrop-blur-sm shadow-md shadow-[#0084FF]/10 mt-4">
                  <CardContent className="p-2.5 py-2">
                    <p className="text-[#94A3B8] text-[9px] font-medium mb-1 uppercase tracking-wide">
                      Économie annuelle
                    </p>
                    <p className="text-[1.75rem] font-black text-[#0084FF] leading-none">
                      {formatCurrency(yearlySavings)}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Column 3: Annual Projection Chart + Button */}
              <div className="flex flex-col">
                <h3 className="text-base lg:text-lg font-bold text-[#0084FF] mb-4">
                  Projection annuelle
                </h3>
                
                {/* Chart */}
                <div className="bg-[#1a2147]/60 rounded-2xl p-4 border border-[#2d3461] backdrop-blur-sm flex-1 mb-4">
                  <ResponsiveContainer width="100%" height="100%" minHeight={280}>
                    <LineChart data={chartData} margin={{ top: 10, right: 10, left: 5, bottom: 5 }}>
                      <defs>
                        <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0084FF" stopOpacity={0.25} />
                          <stop offset="100%" stopColor="#0084FF" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="name" 
                        stroke="rgba(255,255,255,0.4)" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false} 
                        tick={{ fill: 'rgba(255,255,255,0.85)' }}
                        dy={8}
                      />
                      <YAxis 
                        stroke="rgba(255,255,255,0.4)" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false} 
                        tickFormatter={(value) => `${value}€`} 
                        tick={{ fill: 'rgba(255,255,255,0.85)' }}
                        width={60}
                      />
                      <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#0084FF', strokeWidth: 1, strokeDasharray: '4 4' }} />
                      <Line 
                        type="monotone" 
                        dataKey="Économies" 
                        stroke="#0084FF" 
                        strokeWidth={3} 
                        dot={{ r: 5, strokeWidth: 2, stroke: '#0084FF', fill: '#fff' }} 
                        activeDot={{ r: 7, fill: '#0084FF', stroke: '#fff', strokeWidth: 2 }} 
                        fill="url(#savingsGradient)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* CTA Button */}
                <a 
                  href="#calendly" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm sm:text-base font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0084FF] text-white hover:bg-[#0070dd] hover:scale-[1.02] hover:shadow-xl hover:shadow-[#0084FF]/40 h-12 px-6 w-full"
                >
                  Découvrir mes opportunités
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}