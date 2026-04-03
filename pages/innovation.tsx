
import React from 'react';
import { useLanguage } from '../hooks/use-language';
import { motion } from 'framer-motion';
import { Lightbulb, Anchor, Cpu, History, CheckCircle2, TrendingUp, Ship, Download, Box, Briefcase } from 'lucide-react';

const Innovation: React.FC = () => {
  const { t } = useLanguage();

  const catalogs = [
    {
      id: 'general',
      title: t.catalogs.items.general,
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      file: '/catalogs/catalogo-institucional.pdf'
    },
    {
      id: 'naval',
      title: t.catalogs.items.naval,
      icon: <Anchor className="w-8 h-8 text-blue-400" />,
      file: '/catalogs/catalogo-buzinas-cabecos.pdf'
    },
    {
      id: 'storage',
      title: t.catalogs.items.storage,
      icon: <Box className="w-8 h-8 text-amber-500" />,
      file: '/catalogs/catalogo-racks.pdf'
    },
    {
      id: 'water',
      title: t.catalogs.items.water,
      icon: <div className="w-8 h-8 text-cyan-400"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg></div>,
      file: '/catalogs/catalogo-saneamento.pdf'
    },
    {
      id: 'screens',
      title: t.catalogs.items.screens,
      icon: <div className="w-8 h-8 text-purple-400"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg></div>,
      file: '/catalogs/catalogo-peneiras.pdf'
    }
  ];

  const specializedProjects = [
    {
      image: "https://i.imgur.com/6mroVyI.png",
      title: t.specializedProjects.mechTitle,
      desc: t.specializedProjects.mechDesc,
      color: "border-l-4 border-primary"
    },
    {
      image: "https://i.imgur.com/5Lt2A5z.png",
      title: t.specializedProjects.propTitle,
      desc: t.specializedProjects.propDesc,
      color: "border-l-4 border-primary"
    },
    {
      image: "https://i.imgur.com/e2DxpZR.png",
      title: t.specializedProjects.kortTitle,
      desc: t.specializedProjects.kortDesc,
      color: "border-l-4 border-slate-700"
    },
    {
      image: "https://i.imgur.com/XokpqCF.png",
      title: t.specializedProjects.bladeTitle,
      desc: t.specializedProjects.bladeDesc,
      color: "border-l-4 border-primary"
    },
    {
      image: "https://i.imgur.com/5tgvitk.png",
      title: t.specializedProjects.propDetailTitle,
      desc: t.specializedProjects.propDetailDesc,
      color: "border-l-4 border-emerald-600"
    },
    {
      image: "https://i.imgur.com/jylVu1I.png",
      title: t.specializedProjects.kortDetailTitle,
      desc: t.specializedProjects.kortDetailDesc,
      color: "border-l-4 border-amber-600"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 opacity-10">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
           </svg>
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-4 text-accent font-bold tracking-widest uppercase text-sm">
               <Lightbulb className="w-5 h-5" />
               <span>R&D e Tecnologia</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
              {t.innovation.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              {t.innovation.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro & Expertise */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
                 {t.innovation.introTitle}
               </h2>
               <p className="text-lg text-slate-600 leading-relaxed mb-6">
                 {t.innovation.introText}
               </p>
               <p className="text-lg text-slate-600 leading-relaxed">
                 {t.innovation.expertiseText}
               </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
               <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                 <Cpu className="w-5 h-5 text-primary" /> Stack Tecnológico
               </h3>
               <ul className="space-y-4">
                  <li className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                     <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                     <span className="font-medium text-slate-700">Cálculo Estrutural Avançado</span>
                  </li>
                  <li className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                     <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                     <span className="font-medium text-slate-700">Análise por Elementos Finitos (FEA)</span>
                  </li>
                  <li className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                     <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                     <span className="font-medium text-slate-700">Hidrodinâmica Computacional</span>
                  </li>
                  <li className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                     <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                     <span className="font-medium text-slate-700">AutoCAD & Modelagem 3D</span>
                  </li>
               </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Naval Solutions & Kort Nozzle */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative"
               >
                  <div className="absolute -inset-4 bg-white rounded-2xl shadow-xl rotate-2 opacity-50"></div>
                  <img 
                    src="https://i.imgur.com/JhVqRaq.png" 
                    alt="Kort Nozzle System" 
                    className="relative rounded-2xl shadow-2xl w-full h-auto z-10"
                  />
               </motion.div>
               
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-4">
                     <Anchor className="w-4 h-4" /> Engenharia Naval
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
                    {t.innovation.navalTitle}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {t.innovation.navalText1}
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {t.innovation.navalText2}
                  </p>
               </motion.div>
            </div>

            {/* Kort Benefits Stats */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
               <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold font-heading text-slate-900">{t.innovation.kortTitle}</h3>
                  <div className="h-1 w-20 bg-accent mx-auto mt-4 rounded-full"></div>
               </div>
               
               <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/30 transition-colors">
                     <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-4" />
                     <div className="text-4xl font-bold text-slate-900 mb-2 font-heading">50%</div>
                     <p className="text-slate-600 font-medium">{t.innovation.kortBenefits.b1.replace('50%', '')}</p>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/30 transition-colors">
                     <Anchor className="w-10 h-10 text-primary mx-auto mb-4" />
                     <div className="text-4xl font-bold text-slate-900 mb-2 font-heading">40%</div>
                     <p className="text-slate-600 font-medium">{t.innovation.kortBenefits.b2.replace('40%', '')}</p>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/30 transition-colors">
                     <Ship className="w-10 h-10 text-accent mx-auto mb-4" />
                     <div className="text-4xl font-bold text-slate-900 mb-2 font-heading">+1 nó</div>
                     <p className="text-slate-600 font-medium">{t.innovation.kortBenefits.b3.replace('1 nó', '')}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
               <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">{t.innovation.historySubtitle}</span>
               <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">{t.innovation.historyTitle}</h2>
               <p className="max-w-3xl mx-auto text-lg text-slate-600">{t.innovation.historyIntro}</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
               {/* Timeline Content */}
               <div className="lg:col-span-7 relative">
                  <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200"></div>
                  <div className="space-y-12">
                     {t.innovation.timeline.map((item, index) => (
                        <motion.div 
                           key={index}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: index * 0.1 }}
                           className="relative pl-24"
                        >
                           <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg border-4 border-white z-10">
                              {item.year}
                           </div>
                           <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                              <p className="text-slate-700 leading-relaxed">{item.text}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>

               {/* History Image (Sticky) */}
               <div className="lg:col-span-5">
                  <div className="sticky top-24">
                     <div className="relative">
                        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                        <img 
                           src="https://i.imgur.com/iZzmUYi.png" 
                           alt="Metalúrgica Daniela History" 
                           className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                        />
                     </div>
                     <div className="mt-8 bg-slate-900 text-white p-6 rounded-xl shadow-lg">
                        <History className="w-8 h-8 text-accent mb-4" />
                        <h4 className="text-xl font-bold mb-2">Legado de Excelência</h4>
                        <p className="text-slate-300 text-sm">Mais de duas décadas transformando desafios industriais em soluções de engenharia de ponta.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Catalog Downloads Section */}
      <section className="py-20 bg-accent relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-[80px] transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
              Downloads
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              {t.catalogs.sectionTitle}
            </h2>
            <p className="text-slate-300 text-lg">
              {t.catalogs.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {catalogs.map((catalog, index) => (
              <motion.div 
                key={catalog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {catalog.icon}
                </div>
                
                <h3 className="text-white font-bold font-heading text-lg mb-2 min-h-[56px] flex items-center justify-center">
                  {catalog.title}
                </h3>
                
                <div className="mt-auto pt-6 w-full">
                  <a 
                    href={catalog.file} 
                    download
                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-black/20"
                  >
                    <Download className="w-4 h-4" />
                    {t.catalogs.downloadBtn}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Projects Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
             <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
               Tecnologia Avançada
             </span>
             <h2 className="text-4xl md:text-6xl font-bold font-heading text-slate-900 leading-tight">
               Softwares & Cálculos
             </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specializedProjects.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`group flex flex-col bg-slate-50 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 overflow-hidden relative`}
              >
                {/* Image Section - Maximized Visibility */}
                <div className="h-80 md:h-96 p-8 flex items-center justify-center bg-white relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain filter drop-shadow-xl transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* Content Section */}
                <div className={`p-8 flex-1 flex flex-col relative bg-slate-50 ${item.color}`}>
                  <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              {t.innovation.navalText2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
