
import React from 'react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  to?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', to, onClick }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-bold transition-all duration-300 active:scale-95 text-sm uppercase tracking-wider h-14 cursor-pointer relative overflow-hidden group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none";
  const variants = {
    primary: "bg-secondary text-background hover:brightness-110 shadow-[0_0_25px_rgba(255,158,240,0.3)] hover:shadow-[0_0_40px_rgba(255,158,240,0.5)]",
    secondary: "bg-primary text-background hover:brightness-110 shadow-[0_0_25px_rgba(18,201,255,0.3)] hover:shadow-[0_0_40px_rgba(18,201,255,0.5)]",
    outline: "border border-white/20 text-white hover:bg-white/5 hover:border-white/40 backdrop-blur-sm",
    ghost: "text-white/60 hover:text-white transition-colors hover:bg-white/5",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center">
        {children}
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
      {variant !== 'ghost' && variant !== 'outline' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full blur-md" />
      )}
    </>
  );

  if (to) {
    if (to.startsWith('http')) {
      return <a href={to} target="_blank" rel="noopener noreferrer" className={`${baseStyles} ${variants[variant]} ${className}`}>{content}</a>;
    }
    return <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>{content}</Link>;
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export const SectionTitle: React.FC<{
  title: string;
  subtitle?: string;
  centered?: boolean;
}> = ({ title, subtitle, centered = false }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''} fade-in-up`}>
    <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-[1.1] tracking-tight">
      {title}
    </h2>
    {subtitle && <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

export const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => (
  <div className="glass glass-hover p-10 rounded-3xl transition-all duration-300 group relative overflow-hidden cursor-default hover:-translate-y-2">
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors duration-500"></div>
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-8 border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(18,201,255,0.2)] transition-all duration-300">
      {icon}
    </div>
    <h3 className="font-display font-semibold text-2xl mb-4 text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
    <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{description}</p>
  </div>
);

export const AnswerFirstSection: React.FC<{ content: string }> = ({ content }) => (
  <div className="glass p-8 rounded-[2rem] border-l-4 border-primary/50 mb-16 relative overflow-hidden shadow-2xl">
    <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10"></div>
    <div className="flex gap-6 items-start">
      <div className="w-10 h-10 shrink-0 bg-primary/20 rounded-full flex items-center justify-center text-primary border border-primary/30">
        <CheckCircle2 size={20} />
      </div>
      <p className="text-white text-lg font-medium leading-relaxed">
        {content}
      </p>
    </div>
  </div>
);

export const ComparisonRow: React.FC<{ label: string; standard: string; founders: string }> = ({ label, standard, founders }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 border-b border-white/5 py-6 gap-4">
    <div className="col-span-2 md:col-span-1 text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center">{label}</div>
    <div className="flex items-center gap-2 text-slate-400 text-sm">
      <XCircle size={14} className="text-red-500/50" /> {standard}
    </div>
    <div className="flex items-center gap-2 text-white text-sm font-semibold">
      <CheckCircle2 size={14} className="text-primary" /> {founders}
    </div>
  </div>
);
