import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/use-language';
import { motion } from 'framer-motion';
import { sectorsData, getImageUrl } from '../lib/data';
import { ArrowRight, Anchor, Pickaxe, Factory, FlaskConical, Container, Hammer, Zap } from 'lucide-react';

const MarketsIndex: React.FC = () => {
  const { t } = useLanguage();

  // Helper to map icons to slugs for the card display
  const getIcon = (slug: string) => {
    switch(slug) {
      case 'naval': return <Anchor className="w-8 h-8 text-white" />;
      case 'mineracao': return <Pickaxe className="w-8 h-8 text-white" />;
      case 'siderurgia': return <Factory className="w-8 h-8 text-white" />;
      case 'quimica': return <FlaskConical className="w-8 h-8 text-white" />;
      case 'mecanica': return <Hammer className="w-8 h-8 text-white" />;
      case 'armazenagem': return <Container className="w-8 h-8 text-white" />;
      default: return <Zap className="w-8 h-8 text-white" />;
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/media/cubes.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-3xl rounded-full translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
              {t.home.marketsTitle}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              {t.home.marketsSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectorsData.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/atuacao/${sector.slug}`} className="group relative h-[450px] block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={getImageUrl(sector.heroImageId)} 
                      alt={sector.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="mb-4 p-3 bg-white/20 backdrop-blur-md rounded-xl w-fit border border-white/10">
                         {getIcon(sector.slug)}
                      </div>
                      <h3 className="text-2xl font-bold text-white font-heading mb-3">{sector.title}</h3>
                      <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3 leading-relaxed">
                        {sector.description}
                      </p>
                      <div className="flex items-center text-accent font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {t.home.btnDetails} <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-200">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              Não encontrou o que procura?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Desenvolvemos projetos personalizados para demandas específicas. Entre em contato com nossa equipe de engenharia.
            </p>
            <Link 
              to="/contato" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-200"
            >
              Fale com um Especialista
            </Link>
         </div>
      </section>
    </div>
  );
};

export default MarketsIndex;