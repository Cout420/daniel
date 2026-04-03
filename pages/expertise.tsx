
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sectorsData, getImageUrl, placeholderImages } from '../lib/data';
import { useLanguage } from '../hooks/use-language';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Anchor, Pickaxe, Cog, Download, FileText, Factory, ChevronRight, X, ZoomIn, FileBarChart2, Briefcase, Box, Ship, Settings, Compass, ShieldCheck, Cpu, Zap, Thermometer, Flame } from 'lucide-react';

// Reusable Components
const DownloadsSection = () => {
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

  return (
    <section className="py-20 bg-accent relative overflow-hidden w-full">
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
  );
};

const GallerySection = () => {
  const images = placeholderImages.slice(0, 4); // Just picking some random images for the mock
  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-l-4 border-accent pl-4">Galeria de Projetos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} className="overflow-hidden rounded-lg shadow-md aspect-square bg-slate-200">
             <img src={img.imageUrl} alt="Gallery" className="object-cover w-full h-full hover:scale-110 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const NavalPropellersSection = () => {
  const images = [
    "https://i.imgur.com/vVV7vuD.jpeg",
    "https://i.imgur.com/XMcA87w.jpeg",
    "https://i.imgur.com/VUyry66.jpeg",
    "https://i.imgur.com/APcQ5p7.jpeg",
    "https://i.imgur.com/cvPhK1z.jpeg",
    "https://i.imgur.com/9a4X5h5.jpeg",
    "https://i.imgur.com/31hLGA6.jpeg",
    "https://i.imgur.com/1QIZRTP.jpeg",
    "https://i.imgur.com/Th6KzkE.jpeg"
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Settings className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Propulsão Naval
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Propulsores e Hélices Navais
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Desenvolvemos Hélices e componentes para a indústria Naval a fim de garantir melhor qualidade na propulsão.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
           {/* Video Section - Larger and Vertical */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-5 relative"
           >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-black aspect-[9/16] w-full max-w-md mx-auto relative">
                {/* Overlay to prevent interaction if needed, but allow clicks for unmuting if browser blocks autoplay with sound */}
                <div className="absolute inset-0 pointer-events-none z-10 bg-transparent"></div>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/59JpSaISmgk?autoplay=1&mute=1&loop=1&playlist=59JpSaISmgk&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                  title="Propulsores e Hélices Navais"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover scale-[1.02]" // Slight scale to hide potential thin borders
                ></iframe>
              </div>
           </motion.div>

           {/* Images Grid */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4"
           >
              {images.map((imgSrc, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-md aspect-square bg-slate-100 group relative">
                  <img
                    src={imgSrc}
                    alt={`Hélice Naval ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              ))}
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const NavalHornsSection = () => {
  const items = [
    {
      title: "Buzina Panamá (Borda Falsa)",
      image: "https://i.imgur.com/7BfvtNs.jpeg"
    },
    {
      title: "Buzina Panamá (Convés)",
      image: "https://i.imgur.com/4aQXjyM.jpeg"
    },
    {
      title: "Buzina de Reboque Triangular",
      image: "https://i.imgur.com/qSzYmPo.png"
    },
    {
      title: "Buzina de Reboque Adicional",
      image: "https://i.imgur.com/WLfPKZ1.jpeg"
    },
    {
      title: "Sistema de Reboque Naval",
      image: "https://i.imgur.com/t2wj814.jpeg"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Ship className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Amarração e Ancoragem
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Buzinas e Sistemas de Reboque
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Equipamentos de guia de cabos de alta resistência, projetados para suportar cargas extremas e reduzir o desgaste dos cabos de amarração.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 p-4 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NavalAnchorsSection = () => {
  const images = [
    "https://i.imgur.com/2drTHTP.jpeg",
    "https://i.imgur.com/wccI0SW.jpeg",
    "https://i.imgur.com/EYu9l98.jpeg"
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Anchor className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Ancoragem e Fundeio
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Sistema de Ancoras
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Utilizando engenharia de ponta, validamos cada componente através de simulações e análises técnicas detalhadas para garantir performance e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {images.map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group"
              >
                 <div className="aspect-[4/3] overflow-hidden">
                   <img 
                     src={imgSrc} 
                     alt={`Sistema de Ancoras ${index + 1}`} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const KortNozzleManufacturingSection = () => {
  const steps = [
    {
      title: "Construção Inicial",
      images: [
        "https://i.imgur.com/u3rAFfr.jpeg",
        "https://i.imgur.com/t7RR8jH.jpeg"
      ]
    },
    {
      title: "Kort Nozzle Concluído",
      images: [
        "https://i.imgur.com/ep4u8ui.jpeg",
        "https://i.imgur.com/AOGs6ws.jpeg"
      ]
    },
    {
      title: "Kort Nozzle e Túnel Telescópico",
      images: [
        "https://i.imgur.com/lMwJ1Tx.jpeg"
      ]
    },
    {
      title: "Aplicação em Navios-Sonda",
      images: [
        "https://i.imgur.com/voENzBA.jpeg"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Settings className="w-6 h-6 text-accent" />
            <span className="text-accent font-bold tracking-widest uppercase text-sm">
              Processo Produtivo
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Fabricação do Kort Nozzle
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Acompanhe visualmente todas as etapas do desenvolvimento do Kort Nozzle, desde a construção inicial até a aplicação final em sistemas navais de alta performance.
          </p>
        </div>

        <div className="space-y-20 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 -z-10"></div>

          {steps.map((step, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="relative lg:pl-24"
             >
                <div className="flex items-center gap-6 mb-8">
                  <div className="absolute left-0 lg:left-0 top-0 lg:top-0 w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white z-10 hidden lg:flex">
                    {index + 1}
                  </div>
                  {/* Mobile Number Badge */}
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-lg lg:hidden flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-800">
                    Etapa {index + 1}: <span className="text-primary">{step.title}</span>
                  </h3>
                </div>
                
                <div className={`grid gap-6 ${step.images.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                  {step.images.map((img, imgIdx) => (
                    <div key={imgIdx} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[300px] md:h-[450px] bg-slate-100 border border-slate-200 group">
                      <img 
                        src={img} 
                        alt={`${step.title} - Imagem ${imgIdx + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  ))}
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WhatsAppCTASection = () => {
  const whatsappUrl = "https://wa.me/551146442969?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.";

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full translate-x-1/2"></div>
       <div className="absolute bottom-0 left-0 w-1/2 h-full bg-accent/5 blur-3xl rounded-full -translate-x-1/2"></div>

       <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
             <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
               Vamos Conversar Sobre a Sua Necessidade?
             </h2>
             <p className="text-xl text-slate-300 mb-10 leading-relaxed">
               Nossa equipe de especialistas está pronta para entender seu projeto e oferecer a solução em aço ideal para você. Clique no botão abaixo e fale conosco diretamente pelo WhatsApp.
             </p>
             
             <a 
               href={whatsappUrl} 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
             >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Iniciar Conversa no WhatsApp
             </a>
          </motion.div>
       </div>
    </section>
  );
};

const SpecializedProjectsSection = () => {
  const { t } = useLanguage();
  
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
  );
};

const PropulsionAssemblySection = () => {
  const images = [
    "https://i.imgur.com/HYAIT6f.jpeg",
    "https://i.imgur.com/CMoYelf.jpeg",
    "https://i.imgur.com/CbmOpeb.jpeg",
    "https://i.imgur.com/GNTP8IJ.jpeg",
    "https://i.imgur.com/f69XqzY.jpeg"
  ];
  
  const videos = [
    "https://res.cloudinary.com/dhsn2oxv5/video/upload/v1767758738/n_aqwurb.mp4",
    "https://res.cloudinary.com/dhsn2oxv5/video/upload/v1767758738/n1_tiluhk.mp4"
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Anchor className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Serviços Especializados
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Montagem e Desmontagem de Propulsão dentro d'agua
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Fabricamos conjuntos estruturais complexos e montagens de precisão que são a base para equipamentos navais de alta performance.
          </p>
        </div>

        {/* Videos Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videos.map((videoSrc, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.2 }}
               className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-black aspect-video relative group"
             >
                <video 
                  src={videoSrc} 
                  controls 
                  className="w-full h-full object-cover"
                />
             </motion.div>
          ))}
        </div>

        {/* Images Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
           {images.map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-md h-48 md:h-64 cursor-pointer group"
              >
                 <img 
                   src={imgSrc} 
                   alt={`Propulsão ${index + 1}`} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                 />
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const NavalPropulsionShaftSection = () => {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 md:order-1"
           >
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-6 h-6 text-accent" />
                <span className="text-accent font-bold tracking-widest uppercase text-sm">
                  Engenharia de Precisão
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                Linha de eixo para propulsão Naval
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Eixo propulsor em aço inoxidável ou aço carbono, conforme norma J755 com mancais de aço inoxidável AISI 316L.
              </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 md:order-2"
           >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://i.imgur.com/wkhn0pm.png" 
                  alt="Linha de eixo para propulsão Naval" 
                  className="w-full h-auto object-cover"
                />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const NavalInstalledPropulsionSection = () => {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Finalização
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Propulsão instalada
          </h2>
        </div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
        >
           <img 
             src="https://i.imgur.com/Kvtmeej.png" 
             alt="Propulsão instalada" 
             className="w-full h-auto object-cover"
           />
        </motion.div>
      </div>
    </section>
  );
};

const NavalSteeringSystemSection = () => {
  const images = [
    "https://i.imgur.com/5oCOYwQ.jpeg",
    "https://i.imgur.com/iyXsPoM.jpeg",
    "https://i.imgur.com/6Srbjgp.jpeg",
    "https://i.imgur.com/kPB0W4c.jpeg",
    "https://i.imgur.com/FH1sCah.jpeg"
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Compass className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Controle e Manobrabilidade
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Sistema de Governo
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Componentes usinados de alta resistência para sistemas de governo naval, responsáveis pelo controle do leme.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
           {images.map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-md h-48 md:h-64 cursor-pointer group"
              >
                 <img 
                   src={imgSrc} 
                   alt={`Sistema de Governo ${index + 1}`} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                 />
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const ManganesePhosphateSection = () => {
  const images = [
    "https://i.imgur.com/33pNBvu.jpeg",
    "https://i.imgur.com/V5X7htx.jpeg"
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Tratamento de Superfície
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Fosfato de Manganês
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Revestimento técnico de alta performance que proporciona resistência ao desgaste, proteção contra corrosão e propriedades autolubrificantes para componentes críticos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {images.map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group"
              >
                 <div className="aspect-[4/3] overflow-hidden">
                   <img 
                     src={imgSrc} 
                     alt={`Aplicação de Fosfato de Manganês ${index + 1}`} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const NavalPropulsionEngineeringSection = () => {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 lg:order-1"
           >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://i.imgur.com/5uBXXZ1.png" 
                  alt="Engenharia de Propulsão Naval" 
                  className="w-full h-auto object-cover"
                />
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 lg:order-2"
           >
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-6 h-6 text-accent" />
                <span className="text-accent font-bold tracking-widest uppercase text-sm">
                  Tecnologia de Ponta
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                Engenharia Propulsão Naval
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Utilizando softwares especiais baseados em hidrodinâmica para área Naval, softwares para cálculos de análises de vessels, projeto do plano de linhas, cálculo de velocidade, bollard pull (força de cada item propulsivo) e resistência ao avanço da Hidrocomp Inc.
              </p>
              <p className="text-lg text-slate-600 font-medium mt-4 border-l-4 border-primary pl-4">
                 Chegamos a fortes soluções para a Indústria Naval Brasileira, um diferencial em um mercado bastante concorrido.
              </p>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const SiderurgiaFurnacePartsSection = () => {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 md:order-1"
           >
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Siderurgia
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
                Peças para Forno de Barras, Entrada e Saída, Carga e Descarga
              </h2>
              <h3 className="text-xl font-bold text-primary mb-4">
                ROLOS DE CARGA E DESCARGA COM E SEM REFRIGERAÇÃO.
              </h3>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
                Rolos revestidos (Coated) e não revestidos (uncoated) para otimizar a vida útil e para minimizar o pick-up (aderência).
              </p>
              
              <a 
                href="https://wa.me/551146442969?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20Rolos%20de%20Carga%20e%20Descarga%20para%20Forno%20de%20Barras."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Solicite seu Orçamento Agora
              </a>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 md:order-2"
           >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://i.imgur.com/28cnqjU.png" 
                  alt="Rolos de Carga e Descarga" 
                  className="w-full h-auto object-cover"
                />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const SiderurgiaGalvanizationSection = () => {
  const images = [
    "https://i.imgur.com/qdpfn4q.png",
    "https://i.imgur.com/KZhCZ6S.png",
    "https://i.imgur.com/DLNl2Zu.png"
  ];

  const differentials = [
    "Rolos de Imersão, Estabilizadores, Braços, Berços e Bicos fundidos em peça única.",
    "Ligas TOTALMENTE LIVRES DE FERRITA para desempenho superior.",
    "Mancais (Buchas) bi-metálicas com desempenho de 3 a 7 vezes maior."
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           {/* Content Side */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 lg:order-1"
           >
              <div className="flex items-center gap-2 mb-4">
                <Factory className="w-6 h-6 text-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Galvanização
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
                LINHAS DE GALVANIZAÇÃO POR IMERSÃO A QUENTE (POTE)
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
                Componentes de alta performance submersos em banhos de Zinco, Zincalume e Alumínio+Si, e galvalume com ligas especiais que garantem durabilidade superior.
              </p>
              
              <div className="space-y-4 mb-8">
                {differentials.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-slate-700 font-medium pt-2">{item}</p>
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/551146442969?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20Linhas%20de%20Galvaniza%C3%A7%C3%A3o%20por%20Imers%C3%A3o%20a%20Quente."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Solicite seu Orçamento Agora
              </a>
           </motion.div>

           {/* Images Side - Collage */}
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 lg:order-2 grid grid-cols-2 gap-4"
           >
              <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
                 <img src={images[0]} alt="Galvanização Destaque" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white group">
                 <img src={images[1]} alt="Galvanização 2" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white group">
                 <img src={images[2]} alt="Galvanização 3" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const SiderurgiaHighPerformanceComponentsSection = () => {
  const images = [
    "https://i.imgur.com/jb8OSXW.jpeg",
    "https://i.imgur.com/VDThB8y.jpeg",
    "https://i.imgur.com/1LtOK33.jpeg",
    "https://i.imgur.com/pAXdsZz.jpeg"
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Componentes para Fornos de Alta Performance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Engenharia de precisão para garantir a máxima durabilidade e eficiência em processos de tratamento térmico.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {images.map((img, idx) => (
             <motion.div 
               key={idx} 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white aspect-square group"
             >
                <img 
                  src={img} 
                  alt={`Componente de Alta Performance ${idx+1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const SiderurgiaProcessesInActionSection = () => {
  const videos = [
    "https://res.cloudinary.com/dhsn2oxv5/video/upload/v1766405901/WhatsApp_Video_2025-12-21_at_14.38.20_cixbdt.mp4",
    "https://res.cloudinary.com/dhsn2oxv5/video/upload/v1766401871/WhatsApp_Video_2025-12-21_at_14.38.17_kdg7wu.mp4"
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Processos em Ação
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Veja de perto a precisão e a tecnologia envolvida na fabricação de nossos componentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((vid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl bg-black aspect-video relative"
            >
              <video 
                src={vid} 
                controls 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SiderurgiaDiagramsSection = () => {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-4"
           >
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">Diagrama de Processo</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <img src="https://i.imgur.com/l02lMO7.png" alt="Diagrama de Processo" className="w-full h-auto" />
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-4"
           >
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">Diagrama Final</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <img src="https://i.imgur.com/xzITFPj.png" alt="Diagrama Final" className="w-full h-auto" />
              </div>
           </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
        >
           <img src="https://i.imgur.com/kEaXgoe.jpg" alt="Imagem Final" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

const SiderurgiaWalkingBeamFurnaceSection = () => {
  const images = [
    "https://i.imgur.com/SFJgJ8n.png",
    "https://i.imgur.com/CtVYp6i.png",
    "https://i.imgur.com/yAYFE9y.jpeg",
    "https://i.imgur.com/J91uT5W.jpeg",
    "https://i.imgur.com/m06SxmN.jpeg"
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            FORNOS DE VIGAS MÓVEIS PARA TRATAMENTO TÉRMICO DE TUBOS
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            <span className="font-bold text-primary">VIGAS MÓVEIS, COLUNAS:</span> Projeto e ligas especiais para otimizar a vida útil e minimizar o pick-up (aderência de material).
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
           {images.map((img, idx) => (
             <motion.div 
               key={idx} 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white aspect-square group"
             >
                <img 
                  src={img} 
                  alt={`Vigas Móveis ${idx+1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const SiderurgiaHSPRollsSection = () => {
  const highlights = [
    {
      title: "Processo Bi-metálico",
      desc: "Microestrutura de aço inoxidável martensítico e ferrítico com camada externa dura e interna com menor dureza e resistente."
    },
    {
      title: "Garantia de Performance",
      desc: "Redução máxima de runout de 0,5 mm (mono-metálica) ou 0,3 mm (bi-metálica) por milhão de tonelada processada."
    },
    {
      title: "Aplicações Críticas",
      desc: "Para rolos (pinch rollers), utilizamos uma mesa bi-metálica centrifugada para garantir o melhor desempenho."
    }
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 lg:order-1"
           >
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Transporte a Quente
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
                ROLOS PARA TRANSPORTE DE TIRAS A QUENTE (HSP)
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
                Nova geração de rolos para MESA DE TRANSFERÊNCIA, MESA DE SAÍDA, LOOPER, TENSION (tensão), PINCH (aperto) e WRAPPER (enrolador).
              </p>

              <div className="space-y-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed pl-7">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 lg:order-2 space-y-6"
           >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
                <img 
                  src="https://i.imgur.com/zNJQB1c.png" 
                  alt="Exemplo de Rolo HSP" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
                <img 
                  src="https://i.imgur.com/q9bgdTE.png" 
                  alt="Detalhe técnico do Rolo HSP" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const SiderurgiaContinuousCastingNewSection = () => {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 md:order-1"
           >
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Lingotamento
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                LINGOTAMENTO CONTÍNUO
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-6">
                <span className="font-bold text-primary">Rolos para Máquinas de Lingotamento Contínuo:</span> Rolos monometálicos e bi-metálicos e rolos padrão revestidos por soldagem (welded).
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Estes rolos de aço inoxidável martensíticos (42 a 48 HRC), através do controle de enxofre, carbono e fósforo, garantem a ausência de trincas térmicas quando em contato com as placas do lingotamento contínuo. Estes rolos estão em funcionamento nas máquinas de lingotamento brasileiras e no exterior e produzem cerca de 3,5 milhões de toneladas de placas sem qualquer necessidade de troca ou repasse (re-usinagem) dos rolos.
              </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 md:order-2"
           >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                <img 
                  src="https://i.imgur.com/CuvRRvb.png" 
                  alt="Lingotamento Contínuo" 
                  className="w-full h-auto object-cover"
                />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const SiderurgiaFurnaceRollsSection = () => {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 lg:order-1"
           >
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Fornos Industriais
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                ROLOS PARA FORNOS
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Rolos resfriados (cooled) e não resfriados (uncooled). Até o momento, mais de 800 rolos foram fornecidos a Clientes de alto potencial. Podemos fornecer tanto projetos próprios quanto projetos conforme o Cliente.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">
                    Soluções Especiais e Rolo Refrigerado
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Foram desenvolvidas soluções especiais para lidar com problemas de aderência de carepa (scale pick-up). O rolo molhado (wet roll) é equipado com anéis (rodas/tyrerings) fabricados por processo centrífugo (anéis tri-metálicos) ou por fundição estática. O isolamento térmico aprimorado permite bom desempenho e perdas de calor limitadas. Os rolos resfriados garantem o trabalho por um período não inferior a 18 meses de serviço contínuo até uma temperatura de 1.300°C limite.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">
                    Rolo Seco
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    O rolo seco é fundido usando uma superliga que minimiza a aderência de carepa (scale pick-up) e suporta temperaturas mais elevadas, de até 1.280°C.
                  </p>
                </div>
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 lg:order-2"
           >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white sticky top-24">
                <img 
                  src="https://i.imgur.com/gbNL57g.png" 
                  alt="Rolos para Fornos" 
                  className="w-full h-auto object-cover"
                />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const SiderurgiaBarTransportRollsSection = () => {
  const highlights = [
    "Tubos radiantes (tipos 'W', 'U', 'P' simples e duplo) com recuperadores de calor.",
    "Rolos de forno revestidos (coated) e não revestidos (uncoated).",
    "Tecnologia HVOF ou SUPER D-GUN para rolos revestidos.",
    "Rolos Brush (escova)."
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 lg:order-1"
           >
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  CAPL & CGL
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
                ROLOS DO FORNO PARA TRANSPORTE DE BARRAS
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
                Soluções completas para Linhas de Recozimento e Processamento Contínuo e Linhas de Galvanização Contínua.
              </p>

              <ul className="space-y-4">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 lg:order-2"
           >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <img 
                  src="https://i.imgur.com/iYTJsbZ.png" 
                  alt="Rolos do Forno para Transporte de Barras" 
                  className="w-full h-auto object-cover"
                />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

/* --- SPECIFIC SECTOR COMPONENTS --- */

const SiderurgiaIntroSection = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://i.imgur.com/XJLum1h.png" 
          alt="Aceros Centrifugados" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">ACEROS CENTRIFUGADOS</h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed text-slate-200">
          A Aceros projeta e fabrica produtos de liga de aço inoxidável de alto desempenho para auxiliar seus clientes nacionais e internacionais, aumentando a eficiência de seus processos.
        </p>
      </div>
    </section>
  );
};

const SiderurgiaContinuousCastingSection = () => {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Lingotamento Contínuo
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                Rolos para Máquinas de Lingotamento Contínuo
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-6">
                Rolos monometálicos e bi-metálicos e rolos padrão revestidos por soldagem (welded). Estes rolos de aço inoxidável martensíticos (42 a 48 HRC), através do controle de enxofre, carbono e fósforo, garantem a ausência de trincas térmicas quando em contato com as placas do lingotamento contínuo.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="font-bold text-slate-800 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Performance Comprovada
                </p>
                <p className="text-slate-600 mt-2">
                  Estes rolos produzem cerca de 3,5 milhões de toneladas de placas sem qualquer necessidade de troca ou repasse.
                </p>
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://i.imgur.com/CuvRRvb.png" 
                  alt="Rolos para Lingotamento Contínuo" 
                  className="w-full h-auto object-cover"
                />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const SiderurgiaCooledRollsSection = () => {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 md:order-1"
           >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <img 
                  src="https://i.imgur.com/gbNL57g.png" 
                  alt="Rolos Resfriados" 
                  className="w-full h-auto object-cover"
                />
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 md:order-2"
           >
              <div className="flex items-center gap-2 mb-4">
                <Thermometer className="w-6 h-6 text-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Alta Temperatura
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                Rolos resfriados e não resfriados
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-6">
                Mais de 800 rolos fornecidos. Soluções especiais para aderência de carepa (scale pick-up). O rolo molhado (wet roll) é equipado com anéis fabricados por processo centrífugo.
              </p>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <p className="font-bold text-slate-800 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  Resistência Extrema
                </p>
                <p className="text-slate-600 mt-2">
                  Rolos resfriados garantem trabalho por no mínimo 18 meses até 1.300°C.
                </p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const SiderurgiaNewGenerationRollsSection = () => {
  const images = [
    "https://i.imgur.com/zNJQB1c.png",
    "https://i.imgur.com/q9bgdTE.png"
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Inovação
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Nova geração de rolos
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Para Mesa de Transferência, Saída, Looper, Tension, Pinch e Wrapper.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
           <div className="space-y-6">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">Diferenciais Técnicos</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-slate-800">Processo Bi-metálico:</span>
                      <p className="text-slate-600">Camada externa dura e interna resistente.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-slate-800">Precisão Dimensional:</span>
                      <p className="text-slate-600">Redução de runout de 0,3 mm por milhão de tonelada processada.</p>
                    </div>
                  </li>
                </ul>
              </div>
           </div>
           
           <div className="grid gap-6">
             {images.map((img, idx) => (
               <motion.div 
                 key={idx}
                 whileHover={{ scale: 1.02 }}
                 className="rounded-xl overflow-hidden shadow-lg border border-slate-100"
               >
                 <img src={img} alt={`Nova Geração de Rolos ${idx+1}`} className="w-full h-auto" />
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

const SiderurgiaAnnealingSection = () => {
  const techImages = [
    "https://i.imgur.com/gGt4dzi.png",
    "https://i.imgur.com/0NIZVe4.png",
    "https://i.imgur.com/NzQiUxM.png",
    "https://i.imgur.com/7BdleZD.png"
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Factory className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Tratamento Térmico
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Soluções para Linhas de Recozimento e Galvanização Contínua
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Tubos radiantes tipos 'W', 'U', 'P'; tecnologia HVOF ou SUPER D-GUN para rolos revestidos.
          </p>
        </div>

        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 max-w-4xl mx-auto">
           <img src="https://i.imgur.com/iYTJsbZ.png" alt="Linhas de Recozimento" className="w-full h-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {techImages.map((img, idx) => (
             <motion.div 
               key={idx}
               whileHover={{ y: -5 }}
               className="rounded-xl overflow-hidden shadow-md bg-white border border-slate-100"
             >
               <img src={img} alt={`Detalhe Técnico ${idx+1}`} className="w-full h-full object-cover" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const SiderurgiaSubmergedComponentsSection = () => {
  const images = [
    "https://i.imgur.com/qdpfn4q.png",
    "https://i.imgur.com/KZhCZ6S.png",
    "https://i.imgur.com/DLNl2Zu.png"
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div>
              <div className="flex items-center gap-2 mb-4">
                <Box className="w-6 h-6 text-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Componentes Especiais
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                Componentes submersos
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
                Componentes submersos em banhos de Zinco, Zincalume e Alumínio+Si. Rolos de imersão, estabilizadores, braços, berços e bicos fundidos em peça única.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full font-bold">
                <ShieldCheck className="w-5 h-5" />
                Ligas totalmente livres de ferrita
              </div>
           </div>

           <div className="grid gap-6">
              {images.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                   <img src={img} alt={`Componente Submerso ${idx+1}`} className="w-full h-auto" />
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

const SiderurgiaBeamsAndSealsSection = () => {
  const images = [
    "https://i.imgur.com/SFJgJ8n.png",
    "https://i.imgur.com/CtVYp6i.png",
    "https://i.imgur.com/yAYFE9y.jpeg",
    "https://i.imgur.com/J91uT5W.jpeg",
    "https://i.imgur.com/m06SxmN.jpeg"
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Vigas móveis, colunas e vedantes
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Projeto e ligas especiais para otimizar a vida útil e minimizar o pick-up (aderência).
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
           {images.map((img, idx) => (
             <motion.div 
               key={idx}
               whileHover={{ scale: 1.05 }}
               className="rounded-xl overflow-hidden shadow-md bg-white border border-slate-200 aspect-square"
             >
               <img src={img} alt={`Viga/Vedante ${idx+1}`} className="w-full h-full object-cover" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const SiderurgiaLoadUnloadRollsSection = () => {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img src="https://i.imgur.com/28cnqjU.png" alt="Rolos de Carga e Descarga" className="w-full h-auto" />
              </div>
           </div>
           <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                Rolos de carga e descarga
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Rolos de carga e descarga com e sem refrigeração. Otimização para minimizar o pick-up.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

const SiderurgiaMediaSection = () => {
  const galleryImages = [
    "https://i.imgur.com/jb8OSXW.jpeg",
    "https://i.imgur.com/VDThB8y.jpeg",
    "https://i.imgur.com/1LtOK33.jpeg",
    "https://i.imgur.com/pAXdsZz.jpeg"
  ];

  const videos = [
    "https://res.cloudinary.com/dhsn2oxv5/video/upload/v1766405901/WhatsApp_Video_2025-12-21_at_14.38.20_cixbdt.mp4",
    "https://res.cloudinary.com/dhsn2oxv5/video/upload/v1766401871/WhatsApp_Video_2025-12-21_at_14.38.17_kdg7wu.mp4"
  ];

  const diagrams = [
    "https://i.imgur.com/l02lMO7.png",
    "https://i.imgur.com/xzITFPj.png"
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Galeria e Processos
          </h2>
        </div>

        {/* Videos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videos.map((vid, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-xl bg-black aspect-video">
              <video src={vid} controls className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Diagrams */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {diagrams.map((img, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-200">
              <img src={img} alt={`Diagrama ${idx+1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-md aspect-square bg-white">
              <img src={img} alt={`Galeria ${idx+1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Final Image */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
           <img src="https://i.imgur.com/kEaXgoe.jpg" alt="Final" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

const NavalProductCatalog: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const productImages = [
    "https://i.imgur.com/K4AOAqT.png",
    "https://i.imgur.com/g30ZZD7.png",
    "https://i.imgur.com/dhaq41f.png",
    "https://i.imgur.com/ucQWgAD.png",
    "https://i.imgur.com/1hQVsFR.png",
    "https://i.imgur.com/bPaH8gW.png",
    "https://i.imgur.com/q2tLnlY.png",
    "https://i.imgur.com/BAovbvy.png",
    "https://i.imgur.com/oZPZzBG.png",
    "https://i.imgur.com/mjt4zjj.png",
    "https://i.imgur.com/fdALLpI.png",
    "https://i.imgur.com/6mroVyI.png",
    "https://i.imgur.com/xlGJ17Z.png",
    "https://i.imgur.com/ygnSTSo.png",
    "https://i.imgur.com/IAu5VbA.png",
    "https://i.imgur.com/hEohJuh.png",
    "https://i.imgur.com/yfLLpTM.png",
    "https://i.imgur.com/bOwW15H.png"
  ];

  return (
    <>
      <section className="w-full bg-slate-50 py-24 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 uppercase leading-tight">
              EQUIPAMENTOS DE CONVÉS, ATRACAÇÃO, REBOQUE E FUNDEIO
            </h2>
            <div className="w-24 h-2 bg-accent mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Explore nossa linha completa. Clique nas imagens para ampliar e ver detalhes técnicos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {productImages.map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedImage(src)}
                className="group relative aspect-square bg-white rounded-xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden cursor-zoom-in transition-all duration-300 hover:-translate-y-1"
              >
                {/* Reduced padding (p-2) to make image larger and clearer */}
                <div className="absolute inset-0 bg-white flex items-center justify-center p-2">
                   <img 
                     src={src} 
                     alt={`Produto Naval ${idx + 1}`} 
                     className="w-full h-full object-contain filter group-hover:contrast-105 transition-all duration-300" 
                     loading="lazy"
                   />
                </div>
                
                {/* Hover Overlay with Icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                   <div className="bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <ZoomIn className="w-6 h-6 text-primary" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking the image itself
            >
              <img 
                src={selectedImage} 
                alt="Detalhe do Produto" 
                className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MiningContent: React.FC = () => {
  const products = [
    {
      title: "ROLOS PARA DECK DE PENEIRAMENTO",
      description: "Rolos para peneiras, cada um acionado individualmente por motorredutor ou por corrente, com a possibilidade de variar automaticamente o vão entre rolos sem a necessidade de parar a máquina. Fabricados com revestimento de WC-carbonetos e também rolos sem revestimento.",
      image: "https://i.imgur.com/ar6UjAB.png"
    },
    {
      title: "DECKS DE PENEIRAMENTO A QUENTE E A FRIO",
      description: "Decks de peneiramento resistentes ao desgaste, com diferentes formatos e perfis; furos fundidos pelo processo de moldagem em casca (shell molding) em desenho “espinha-de-peixe”, para otimizar a área aberta e o efeito de “autolimpeza”. Superligas para operação em temperaturas muito elevadas (até 1.100 °C).",
      image: "https://i.imgur.com/DplqLep.png"
    },
    {
      title: "PAREDES LATERAIS SUPERIORES E INFERIORES PARA CARROS DE PELOTIZAÇÃO E SINTERIZAÇÃO",
      description: "Projeto especial e ligas específicas para otimizar a vida útil e evitar a pré-queima no perfil superior.",
      image: "https://i.imgur.com/6PXQpdh.png"
    },
    {
      title: "BARRAS DE GRELHA PARA CARROS DE PELOTIZAÇÃO",
      description: "Fundidas em ligas totalmente austeníticas para otimizar a resistência à corrosão e ao calor em altas temperaturas.",
      image: "https://i.imgur.com/V533gec.png"
    },
    {
      title: "CARROS COMPLETOS DE PELOTIZAÇÃO E SINTERIZAÇÃO PARA PEQUENAS PLANTAS",
      description: "A CIS projeta, desenvolve e produz carros completos de pelotização e sinterização (estrutura, paredes laterais, barras de grelha, rodas).",
      image: "https://i.imgur.com/DieDlTI.png"
    },
    {
      title: "ALTO-FORNO: BLINDAGEM E PLACAS DE DESGASTE",
      description: "Blindagens e placas de desgaste tanto para altos-fornos do tipo Paul Wurth quanto do tipo Double Bell (duplo sino).",
      image: "https://i.imgur.com/4xGfBFm.png"
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Pickaxe className="w-8 h-8 text-primary" />
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Soluções em Mineração
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold font-heading text-slate-900 mb-6">
          Produtos em Destaque
        </h2>
        <div className="w-32 h-2 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="space-y-24">
        {products.map((product, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
               <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 aspect-[4/3]">
                 <div className="absolute inset-0 bg-slate-50/50"></div>
                 <img 
                   src={product.image} 
                   alt={product.title} 
                   className="relative w-full h-full object-contain p-8 transform group-hover:scale-110 transition-transform duration-700"
                 />
               </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                 <span className="text-6xl font-black text-slate-100 font-heading select-none">
                   0{index + 1}
                 </span>
                 <div className="h-px flex-1 bg-slate-200"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 leading-tight">
                {product.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                {product.description}
              </p>
              <a 
                href={`https://wa.me/551146442969?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20${encodeURIComponent(product.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Solicite um Orçamento via WhatsApp
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};;

// Generic Content for sectors that don't have a specific component yet
const GenericSectorContent: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <motion.div className="my-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
       <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 mb-12">
          <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">Visão Geral do Setor</h2>
          <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            Atuamos neste segmento com foco total em qualidade e durabilidade. Nossos engenheiros desenvolvem soluções customizadas para atender os desafios específicos da indústria {title}, garantindo conformidade com normas técnicas e prazos de entrega rigorosos.
          </p>
       </div>
       
       <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
            <Factory className="w-8 h-8 text-slate-400 mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">Produção Customizada</h3>
            <p className="text-sm text-slate-500">Desenvolvimento de peças sob medida conforme desenho técnico.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
            <CheckCircle className="w-8 h-8 text-slate-400 mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">Controle de Qualidade</h3>
            <p className="text-sm text-slate-500">Testes rigorosos de dureza, ultrassom e dimensional.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
             <Cog className="w-8 h-8 text-slate-400 mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">Suporte Técnico</h3>
            <p className="text-sm text-slate-500">Acompanhamento desde o projeto até a instalação.</p>
          </div>
       </div>
    </motion.div>
  )
}

const MiningScreensSection = () => {
  const images = [
    "https://i.imgur.com/GwRqaf7.jpeg",
    "https://i.imgur.com/8xF58F6.jpeg",
    "https://i.imgur.com/rXlJ1Dr.jpeg",
    "https://i.imgur.com/HYQgpph.jpeg",
    "https://i.imgur.com/15Ik7R7.jpeg"
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Settings className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Classificação de Minério
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Peneiras de Rolos para Classificação de Pelotas de Minério
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
           {images.map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-md aspect-square bg-slate-100 group relative"
              >
                 <img 
                   src={imgSrc} 
                   alt={`Peneira de Rolos ${index + 1}`} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const MiningPelletScreensSection = () => {
  const images = [
    "https://i.imgur.com/WnOxyac.png",
    "https://i.imgur.com/6V2Oxzm.png"
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Settings className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Pelotização
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-2">
            PENEIRAS DE ROLOS PARA A CLASSIFICAÇÃO DE PELLETS
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
            TIPOS TPC E TDE: A MELHOR SOLUÇÃO EM PELOTIZAÇÃO
          </h3>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
           {images.map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
              >
                 <img 
                   src={imgSrc} 
                   alt={`Peneira de Pellets ${index + 1}`} 
                   className="w-full h-auto" 
                 />
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const MiningEquipmentVideoSection = () => {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Pickaxe className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Tecnologia em Ação
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Equipamentos para Mineração
          </h2>
        </div>

        <div className="max-w-md mx-auto">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-black aspect-[9/16] relative"
           >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/EJXZ1_MYIzU"
                title="Equipamentos para Mineração"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
           </motion.div>

           <div className="mt-12 text-center">
              <a 
                href="https://wa.me/551146442969?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20equipamentos%20de%20minera%C3%A7%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Falar com Especialista
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

const MiningCTASection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full translate-x-1/2"></div>
       <div className="absolute bottom-0 left-0 w-1/2 h-full bg-accent/5 blur-3xl rounded-full -translate-x-1/2"></div>

       <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
             <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
               Pronto para elevar seu projeto?
             </h2>
             <p className="text-xl text-slate-300 mb-10 leading-relaxed">
               Nossa equipe está pronta para atender sua demanda. Tire suas dúvidas, consulte orçamentos ou agende uma reunião técnica.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <a 
                 href="https://wa.me/551146442969?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20sobre%20um%20projeto." 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 w-full sm:w-auto justify-center"
               >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Falar no WhatsApp
               </a>
               
               <Link 
                 to="/contato" 
                 className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-white/20 hover:-translate-y-1 w-full sm:w-auto justify-center"
               >
                 <FileText className="w-5 h-5" />
                 Solicitar Orçamento
               </Link>
             </div>
          </motion.div>
       </div>
    </section>
  );
};

const Expertise: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const sector = sectorsData.find(s => s.slug === slug);

  if (!sector) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.markets.notFound}</h2>
        <Link to="/atuacao" className="text-primary hover:underline flex items-center justify-center gap-2">
          <ArrowLeft className="h-4 w-4" /> {t.markets.back}
        </Link>
      </div>
    );
  }

  const heroImage = getImageUrl(sector.heroImageId);

  return (
    <div className="min-h-screen pb-0 bg-white">
      {/* Hero Section - Full Width */}
      <div className="relative h-[40vh] md:h-[50vh] w-full bg-gray-900 overflow-hidden">
        <img 
          src={heroImage} 
          alt={sector.title} 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center container mx-auto px-4">
          <div className="text-center">
             <Link to="/atuacao" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-medium transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para Mercados
             </Link>
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-bold font-heading text-white tracking-wider"
             >
               {sector.title}
             </motion.h1>
             <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* TOP SECTION: Descriptions & Specific Intro Content (Siderurgia/Mineracao) */}
      <div className="container mx-auto px-4 md:px-6 mt-12 max-w-5xl mb-12">
        {/* Description Section - Hidden for Naval, Mining, and Siderurgia */}
        {slug !== 'naval' && slug !== 'mineracao' && slug !== 'siderurgia' && (
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="text-center mb-16"
          >
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              {sector.description}
            </p>
          </motion.div>
        )}

        {/* Specific Sector Intro Content */}
        {slug === 'mineracao' && <MiningContent />}
        {/* Fallback for other sectors */}
        {!['siderurgia', 'naval', 'mineracao'].includes(slug || '') && (
          <GenericSectorContent title={sector.title} description={sector.description} />
        )}
      </div>

      {/* MIDDLE SECTION: Full Width Catalog for Naval OR Boxed Gallery for others */}
      {slug === 'naval' ? (
        <NavalProductCatalog />
      ) : slug !== 'mineracao' && slug !== 'siderurgia' ? (
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
           <GallerySection />
        </div>
      ) : null}

      {/* FULL WIDTH DOWNLOADS SECTION */}
      {slug !== 'siderurgia' && <DownloadsSection />}

      {/* MINING SCREENS SECTION (Rendered only for Mining) */}
      {slug === 'mineracao' && <MiningScreensSection />}

      {/* MINING PELLET SCREENS SECTION (Rendered only for Mining) */}
      {slug === 'mineracao' && <MiningPelletScreensSection />}

      {/* MINING EQUIPMENT VIDEO SECTION (Rendered only for Mining) */}
      {slug === 'mineracao' && <MiningEquipmentVideoSection />}

      {/* MINING CTA SECTION (Rendered only for Mining) */}
      {slug === 'mineracao' && <MiningCTASection />}

      {/* NAVAL PROPELLERS SECTION (Rendered only for Naval) */}
      {slug === 'naval' && <NavalPropellersSection />}

      {/* NAVAL HORNS SECTION (Rendered only for Naval) */}
      {slug === 'naval' && <NavalHornsSection />}
      
      {/* NAVAL ANCHORS SECTION (Rendered only for Naval) */}
      {slug === 'naval' && <NavalAnchorsSection />}
      
      {/* KORT NOZZLE MANUFACTURING SECTION (Rendered only for Naval) */}
      {slug === 'naval' && <KortNozzleManufacturingSection />}

      {/* Naval Process Diagram Image */}
      {slug === 'naval' && (
        <section className="w-full bg-white pb-12">
          <div className="container mx-auto px-4 md:px-6">
            <img 
              src="https://i.imgur.com/eLO0hTB.png" 
              alt="Esquema Técnico Naval" 
              className="w-full h-auto rounded-xl shadow-lg border border-slate-200"
            />
          </div>
        </section>
      )}

      {/* WHATSAPP CTA SECTION (Rendered only for Naval) */}
      {slug === 'naval' && <WhatsAppCTASection />}

      {/* SPECIALIZED PROJECTS SECTION (Rendered only for Naval) */}
      {slug === 'naval' && <SpecializedProjectsSection />}

      {/* PROPULSION ASSEMBLY SECTION (Rendered only for Naval) */}
      {slug === 'naval' && <PropulsionAssemblySection />}

      {/* PROPULSION SHAFT SECTION (Rendered only for Naval) */}
      {slug === 'naval' && <NavalPropulsionShaftSection />}

      {/* INSTALLED PROPULSION (Rendered only for Naval) */}
      {slug === 'naval' && <NavalInstalledPropulsionSection />}

      {/* STEERING SYSTEM SECTION (Rendered only for Naval) */}
      {slug === 'naval' && <NavalSteeringSystemSection />}

      {/* MANGANESE PHOSPHATE SECTION (Rendered only for Naval) */}
      {slug === 'naval' && <ManganesePhosphateSection />}

      {/* NEW SECTION HERE: Naval Propulsion Engineering */}
      {slug === 'naval' && <NavalPropulsionEngineeringSection />}

      {/* SIDERURGIA SECTIONS */}
      {slug === 'siderurgia' && <SiderurgiaFurnacePartsSection />}
      {slug === 'siderurgia' && <SiderurgiaHighPerformanceComponentsSection />}
      {slug === 'siderurgia' && <SiderurgiaProcessesInActionSection />}
      {slug === 'siderurgia' && <SiderurgiaDiagramsSection />}
      {slug === 'siderurgia' && <SiderurgiaWalkingBeamFurnaceSection />}
      {slug === 'siderurgia' && <SiderurgiaHSPRollsSection />}
      {slug === 'siderurgia' && <SiderurgiaContinuousCastingNewSection />}
      {slug === 'siderurgia' && <SiderurgiaFurnaceRollsSection />}
      {slug === 'siderurgia' && <SiderurgiaBarTransportRollsSection />}
      {slug === 'siderurgia' && <SiderurgiaGalvanizationSection />}
      {slug === 'siderurgia' && <DownloadsSection />}

      {/* BOTTOM LINKS CTA */}
      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-12">
        <div className="flex justify-between items-center">
             <Link to="/atuacao" className="text-slate-500 hover:text-primary font-medium flex items-center gap-2">
               <ArrowLeft className="w-4 h-4" /> Outros Mercados
             </Link>
             <Link to="/contato" className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
               Solicitar Orçamento
             </Link>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
