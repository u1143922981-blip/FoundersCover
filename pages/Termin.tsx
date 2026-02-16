
import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import { Button } from '../components/UI';
import { BOOKING_STEPS } from '../constants';
import { CheckCircle2, ArrowLeft, Calendar, ShieldCheck, Lock } from 'lucide-react';

const Termin: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleOptionSelect = (option: string) => {
    const newAnswers = { ...answers, [BOOKING_STEPS[currentStep].id]: option };
    setAnswers(newAnswers);
    
    if (currentStep < BOOKING_STEPS.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setIsCompleted(true);
    }
  };

  const progress = ((currentStep + 1) / BOOKING_STEPS.length) * 100;

  if (isCompleted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6 pt-32">
          <div className="max-w-xl w-full glass rounded-[3rem] p-12 text-center fade-in-up border-white/10">
            <div className="w-24 h-24 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-10 border border-primary/30 shadow-[0_0_40px_rgba(18,201,255,0.2)]">
              <CheckCircle2 size={48} />
            </div>
            <h1 className="font-display font-bold text-4xl text-white mb-6">Hervorragend!</h1>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              Wir haben dein Profil verarbeitet. Bitte wähle nun einen passenden 20-Minuten-Slot für das Gespräch mit unseren Experten.
            </p>
            <div className="p-8 glass rounded-3xl border border-white/5 mb-10 flex flex-col items-center">
              <Calendar className="text-primary mb-4" size={32} />
              <p className="text-slate-500 text-sm font-medium italic">Kalender-Integration lädt...</p>
            </div>
            <Button to="/" variant="secondary">Zurück zur Übersicht</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const step = BOOKING_STEPS[currentStep];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">
              Profil-Sektion {currentStep + 1} / {BOOKING_STEPS.length}
            </span>
            <div className="px-3 py-1 glass rounded-full text-[10px] font-bold text-slate-400">
               {Math.round(progress)}% ANALYSIERT
            </div>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_15px_rgba(18,201,255,0.5)]" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="glass rounded-[3rem] p-8 md:p-16 border-white/10 shadow-2xl fade-in-up relative overflow-hidden">
          {currentStep > 0 && (
            <button 
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="flex items-center text-slate-500 hover:text-white transition-colors mb-10 text-xs font-bold uppercase tracking-widest"
            >
              <ArrowLeft size={14} className="mr-2" /> Vorheriger Schritt
            </button>
          )}

          <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-12 leading-tight max-w-xl">
            {step.question}
          </h2>

          <div className="grid grid-cols-1 gap-4 mt-8">
            {step.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleOptionSelect(option)}
                className={`
                  text-left p-6 rounded-2xl border transition-all flex items-center justify-between group
                  ${answers[step.id] === option 
                    ? 'border-primary bg-primary/10' 
                    : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'}
                `}
              >
                <span className={`font-semibold text-lg ${answers[step.id] === option ? 'text-primary' : 'text-slate-300'}`}>
                  {option}
                </span>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                   answers[step.id] === option ? 'border-primary bg-primary shadow-[0_0_10px_rgba(18,201,255,0.5)]' : 'border-white/20'
                }`}>
                   {answers[step.id] === option && <CheckCircle2 size={16} className="text-background" />}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap gap-8 items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Lock size={14} className="text-primary" /> 
              Sicher verschlüsselt
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-primary" /> 
              DSGVO / BaFin konform
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-primary" /> 
              Dauer: ca. 2 Minuten
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Termin;
