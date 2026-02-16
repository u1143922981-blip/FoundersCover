
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ARTICLES } from '../data/articles';
import { Header, Footer, MobileStickyCTA } from '../components/Layout';
import { Button, SectionTitle } from '../components/UI';
import { ArrowLeft, Shield, Clock, Calendar, User } from 'lucide-react';

const ArticleDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    // Find article
    const article = ARTICLES.find(a => a.slug === slug);

    // SEO Update
    useEffect(() => {
        if (article) {
            document.title = `${article.seo.metaTitle} | FoundersCover`;
            // Start window at top
            window.scrollTo(0, 0);
        }
    }, [article, slug]);

    if (!article) {
        return (
            <div className="min-h-screen bg-background flex flex-col justify-between">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center pt-32">
                    <h1 className="text-4xl font-display font-bold text-white mb-4">404 - Artikel nicht gefunden</h1>
                    <p className="text-slate-400 mb-8">Dieser Guide existiert (noch) nicht oder wurde verschoben.</p>
                    <Link to="/wissen" className="text-primary font-bold hover:underline flex items-center gap-2">
                        <ArrowLeft size={16} /> Zurück zur Wissensseite
                    </Link>
                </div>
                <Footer />
                <MobileStickyCTA />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* HERO SECTION */}
            <section className="pt-32 pb-16 md:pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

                <div className="max-w-3xl mx-auto">
                    {/* Breadcrumb / Back Link */}
                    <Link to="/wissen" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest mb-12">
                        <ArrowLeft size={14} /> Zur Wissensseite
                    </Link>

                    {/* Tags */}
                    <div className="flex items-center gap-3 mb-8">
                        <span className="px-3 py-1 bg-surface/30 border border-white/5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                            {article.category}
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                            {article.heroTag}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                        {article.title}
                    </h1>

                    <p className="text-xl text-slate-400 leading-relaxed mb-8">
                        {article.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium border-t border-white/10 pt-6">
                        <div className="flex items-center gap-2">
                            <Clock size={14} className="text-primary" /> {article.readingTime} lesen
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={14} /> Aktualisiert: {article.updatedAt}
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={14} /> {article.author}
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="px-6 pb-16 md:pb-32">
                <div className="max-w-3xl mx-auto">
                    <article className="prose prose-invert prose-lg max-w-[760px] mx-auto prose-headings:font-display prose-headings:font-bold prose-headings:text-white prose-p:text-slate-400 prose-p:leading-[1.7] prose-li:text-slate-400 prose-strong:text-white prose-a:text-primary prose-blockquote:border-l-primary prose-blockquote:bg-surface/20 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-h2:mt-[32px] prose-h2:mb-[12px] prose-p:m-0 prose-p:mb-[14px] prose-ul:mt-[10px] prose-ul:mb-[18px] prose-ul:pl-[18px] prose-li:my-[8px] prose-h3:mt-[18px] prose-h3:mb-[8px]">
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </article>

                    {/* BOTTOM CTA (Article Specific) */}
                    <div className="mt-24 pt-12 border-t border-white/10">
                        <div className="glass p-10 md:p-14 rounded-[2.5rem] border-white/5 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-5 text-primary pointer-events-none"><Shield size={120} /></div>

                            <h3 className="text-2xl font-display font-bold text-white mb-4">Unsicher bei der Umsetzung?</h3>
                            <p className="text-slate-400 mb-8 max-w-md mx-auto">
                                Lass uns in 20 Minuten prüfen, was für deine Phase wirklich relevant ist. Kein Verkaufsdruck.
                            </p>
                            <div className="flex justify-center">
                                <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="px-10">Risiko-Check buchen (20 Min)</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <MobileStickyCTA />
        </div>
    );
};

export default ArticleDetail;
