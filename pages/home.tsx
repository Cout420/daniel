
import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../hooks/use-language';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Anchor, Zap, Pickaxe, Target, Eye, ShieldCheck, CheckCircle2, Youtube, Play, ExternalLink, ChevronLeft, ChevronRight, Box, ZoomIn, Briefcase, Cpu, MapPin, Settings, Fan, CircleDashed, Download, Monitor, Activity, Scan, Maximize2, PlayCircle, Share2, ThumbsUp, Bell } from 'lucide-react';
import { sectorsData, getImageUrl } from '../lib/data';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // New State for the interactive video gallery
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1;
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  // Helper to map icons to slugs
  const getIcon = (slug: string) => {
    switch(slug) {
      case 'naval': return <Anchor className="w-8 h-8 text-white" />;
      case 'mineracao': return <Pickaxe className="w-8 h-8 text-white" />;
      default: return <Zap className="w-8 h-8 text-white" />;
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400; // Adjusted for wider image cards
      const currentScroll = carouselRef.current.scrollLeft;
      carouselRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Storing icon components directly for better styling control in render
  const valuesCards = [
    {
      Icon: Target,
      title: t.values.missionTitle,
      desc: t.values.missionDesc,
      colorClass: "text-accent"
    },
    {
      Icon: Eye,
      title: t.values.visionTitle,
      desc: t.values.visionDesc,
      colorClass: "text-primary"
    },
    {
      Icon: ShieldCheck,
      title: t.values.valuesTitle,
      desc: t.values.valuesDesc,
      colorClass: "text-accent"
    }
  ];

  // Enhanced Video Data with Titles and Descriptions
  const videos = [
    {
      id: 0,
      url: "https://res.cloudinary.com/dhsn2oxv5/video/upload/v1771347877/YTDown.com_YouTube_Corte-Plasma-Manual_Media_wKjdooVdRz0_001_1080p_c5lqn1.mp4",
      title: "Corte Plasma de Alta Precisão",
      description: "Tecnologia de corte térmico para chapas de aço carbono e inoxidável com acabamento superior.",
      duration: "0:45",
      views: "1.2K"
    },
    {
      id: 1,
      url: "https://res.cloudinary.com/dhsn2oxv5/video/upload/v1771347879/YTDown.com_YouTube_Media_tMVAG_3Pepc_001_1080p_o3rpdi.mp4",
      title: "Soldagem Robótica Industrial",
      description: "Automação avançada garantindo repetibilidade e resistência estrutural em grandes volumes.",
      duration: "1:12",
      views: "850"
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dhsn2oxv5/video/upload/v1771347878/YTDown.com_YouTube_Usinagem-de-diametro-interno-mandrilhand_Media_nW-bzAPvXWk_001_1080p_aosybu.mp4",
      title: "Mandrilhamento Interno",
      description: "Usinagem de grandes diâmetros com tolerâncias centesimais para componentes navais.",
      duration: "0:58",
      views: "2.1K"
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dhsn2oxv5/video/upload/v1771347876/YTDown.com_YouTube_Usinagem-em-eixo-diametro-300mm-e-compri_Media_gfB5lAENo7c_001_720p_y7j95e.mp4",
      title: "Torneamento de Eixos Longos",
      description: "Fabricação de eixos de propulsão com até 300mm de diâmetro e 6 metros de comprimento.",
      duration: "1:30",
      views: "1.5K"
    }
  ];

  const products = [
    {
      id: 1,
      image: "https://i.imgur.com/APcQ5p7.jpeg"
    },
    {
      id: 2,
      image: "https://i.imgur.com/2drTHTP.jpeg"
    },
    {
      id: 3,
      image: "https://i.imgur.com/AOGs6ws.jpeg"
    },
    {
      id: 4,
      image: "https://i.imgur.com/zNJQB1c.png"
    },
    {
      id: 5,
      image: "https://i.imgur.com/DplqLep.png"
    },
    {
      id: 6,
      image: "https://i.imgur.com/4xGfBFm.png"
    },
    {
      id: 7,
      image: "https://i.imgur.com/vVV7vuD.jpeg"
    }
  ];

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
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-black text-center relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dhsn2oxv5/video/upload/v1773699482/Daniela-Home_pbnku9.mp4#t=1" type="video/mp4" />
          </video>
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl space-y-8 z-10 relative px-4"
        >
          <div className="inline-block px-4 py-1.5 mb-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-sm font-semibold text-white tracking-wide uppercase">Inovação Industrial desde 1999</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white tracking-tight leading-[0.9]">
            {t.home.welcome}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            {t.home.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" onClick={() => navigate('/atuacao/siderurgia')}>
              {t.header.markets}
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white text-white hover:bg-white/10 hover:text-white hover:border-white" onClick={() => navigate('/sobre')}>
              {t.header.about}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* History Section - Redesigned (Clean & Modern Split) */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Visual Composition (Left) */}
            <motion.div 
              className="w-full lg:w-1/2 relative px-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Abstract Pattern Background */}
              <div className="absolute -left-4 -top-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4">
                 {/* Image 1 - Vertical Offset */}
                 <div className="col-span-1 mt-12 relative">
                   <div className="absolute -inset-2 bg-white rounded-2xl opacity-50 blur-sm"></div>
                   <img 
                     src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=600&auto=format&fit=crop" 
                     alt="Welding Detail" 
                     className="relative w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 duration-500"
                   />
                 </div>
                 {/* Image 2 - Main */}
                 <div className="col-span-1 relative">
                    <div className="absolute -inset-2 bg-white rounded-2xl opacity-50 blur-sm"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=600&auto=format&fit=crop" 
                      alt="Factory Wide" 
                      className="relative w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl transform transition-transform hover:-translate-y-2 duration-500"
                    />
                 </div>
                 
                 {/* Badge centered */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-2xl z-20">
                    <div className="bg-primary text-white w-24 h-24 rounded-full flex items-center justify-center flex-col border-4 border-white shadow-inner">
                       <span className="font-bold font-heading text-2xl leading-none">25</span>
                       <span className="text-[10px] uppercase tracking-wider font-medium">Anos</span>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Content (Right) */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               <div className="mb-8">
                  <span className="text-accent font-bold tracking-widest uppercase text-xs flex items-center gap-2 mb-3">
                    <span className="w-8 h-[2px] bg-accent"></span>
                    {t.home.historySubtitle}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 leading-tight">
                    {t.home.historyTitle}
                  </h2>
               </div>

               <div className="prose prose-lg text-slate-600 mb-8">
                  <p className="leading-relaxed mb-6 text-lg">
                    {t.home.historyText1}
                  </p>
                  <p className="leading-relaxed mb-6">
                    {t.home.historyText2}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-center gap-3 text-slate-800 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span>Processos certificados ISO 9001</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-800 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span>Equipe em treinamento contínuo</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-800 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span>Atendimento multisectorial</span>
                    </li>
                  </ul>
               </div>

               <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
                  <Button onClick={() => navigate('/sobre')} className="h-12 px-8 shadow-lg shadow-primary/20">
                     {t.home.learnMore}
                  </Button>
                  <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                       <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                         <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Team" className="w-full h-full object-cover" />
                       </div>
                     ))}
                     <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                       +50
                     </div>
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values Section (Mission, Vision, Values) - Clean & Minimalist */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
           <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">{t.home.historyCompany}</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">{t.values.sectionTitle}</h2>
              <div className="flex justify-center items-center gap-2">
                <div className="h-1 w-3 bg-primary rounded-full"></div>
                <div className="h-1 w-12 bg-primary rounded-full"></div>
                <div className="h-1 w-3 bg-primary rounded-full"></div>
              </div>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {valuesCards.map((card, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group relative p-10 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-50 to-transparent rounded-tr-2xl -z-10 group-hover:from-primary/5 transition-colors"></div>

                  <div className="mb-8 relative">
                    {/* Icon container */}
                    <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/30`}>
                      <card.Icon className="w-8 h-8" />
                    </div>
                    {/* Dashed line connecting cards (desktop only) */}
                    {index < valuesCards.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-20 w-[calc(100%+2rem)] h-0.5 border-t-2 border-dashed border-slate-200 -z-10"></div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                  
                  {/* Bottom accent bar on hover */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Markets Section (Original Style Restored) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">{t.home.marketsTitle}</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{t.home.marketsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectorsData.map((sector, index) => (
              <Link to={`/atuacao/${sector.slug}`} key={sector.id} className="group relative h-[500px] w-full block overflow-hidden rounded-2xl shadow-xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={getImageUrl(sector.heroImageId)} 
                    alt={sector.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl w-fit">
                       {getIcon(sector.slug)}
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading mb-3">{sector.title}</h3>
                    <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                      {sector.description}
                    </p>
                    <div className="flex items-center text-accent font-semibold text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {t.home.btnDetails} <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Official YouTube Channel Section - Cinematic Media Center Style */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle red ambiance */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          {/* Section Header with Official Badge */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-100 pb-8">
             <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="w-12 h-12 bg-[#FF0000] rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
                     <Youtube className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-none">Metalúrgica Daniela</h3>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Indústria Mecânica</span>
                  </div>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight">
                  Acompanhe nossa operação no Youtube
                </h2>
             </div>

             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <a 
                  href="https://www.youtube.com/channel/UCICYEL_4Ort9kMtTUMiLI3g" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-slate-900 hover:bg-[#FF0000] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-red-500/25"
                >
                   <span>INSCREVA-SE</span>
                   <Bell className="w-5 h-5 fill-white" />
                </a>
             </motion.div>
          </div>

          {/* Main Cinematic Player */}
          <div className="mb-12">
             <motion.div 
               key={activeVideoIndex}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl shadow-slate-300"
             >
                <video
                  className="w-full h-full object-contain"
                  src={videos[activeVideoIndex].url}
                  controls
                  // Poster removed to show paused video frame
                />
                
                {/* Overlay Title (Hidden when controls might be active, but good for initial load) */}
                <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                   <h3 className="text-white text-xl md:text-2xl font-bold font-heading drop-shadow-md">
                      {videos[activeVideoIndex].title}
                   </h3>
                </div>
             </motion.div>

             {/* Video Actions Bar */}
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div>
                   <h3 className="text-xl font-bold text-slate-900 mb-1">{videos[activeVideoIndex].title}</h3>
                   <p className="text-slate-500 text-sm line-clamp-1">{videos[activeVideoIndex].description}</p>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                   <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-slate-700 hover:bg-gray-50 transition-colors font-medium text-sm">
                      <ThumbsUp className="w-4 h-4" /> {videos[activeVideoIndex].views || '1K'}
                   </button>
                   <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-slate-700 hover:bg-gray-50 transition-colors font-medium text-sm">
                      <Share2 className="w-4 h-4" /> Compartilhar
                   </button>
                </div>
             </div>
          </div>

          {/* Thumbnail Strip / "Up Next" */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {videos.filter((_, idx) => idx !== activeVideoIndex).slice(0, 3).map((video, index) => (
                <motion.button
                   key={video.id}
                   onClick={() => setActiveVideoIndex(video.id)}
                   whileHover={{ y: -5 }}
                   className="text-left group"
                >
                   <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-slate-100 shadow-md group-hover:shadow-xl transition-all">
                      <video src={video.url} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" muted />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                         <PlayCircle className="w-12 h-12 text-white fill-white/20" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                         {video.duration}
                      </div>
                   </div>
                   <h4 className="font-bold text-slate-900 group-hover:text-[#FF0000] transition-colors line-clamp-1">
                      {video.title}
                   </h4>
                   <p className="text-xs text-slate-500 mt-1">Metalúrgica Daniela • {video.views || '1K'} views</p>
                </motion.button>
             ))}
          </div>

        </div>
      </section>

      {/* Product Carousel Section - Images Only */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
                Catálogo
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 leading-tight">
                {t.products.sectionTitle}
              </h2>
              <p className="mt-4 text-slate-600 max-w-lg">
                {t.products.sectionSubtitle}
              </p>
            </div>
            {/* Desktop Navigation Controls */}
            <div className="hidden md:flex gap-2">
              <button 
                onClick={() => scrollCarousel('left')}
                className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white hover:shadow-lg hover:border-primary/50 text-slate-600 hover:text-primary transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scrollCarousel('right')}
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 hover:scale-105 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[280px] md:min-w-[400px] snap-center"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/10 border border-slate-200 transition-all duration-500 group h-[300px] md:h-[400px] relative cursor-pointer">
                  {/* Image */}
                  <img 
                    src={product.image} 
                    alt="Product" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>

                  {/* Icon indicator */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                     <ZoomIn className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
             <span className="text-xs text-slate-400">Deslize para ver mais</span>
          </div>
        </div>
      </section>

      {/* Catalog Downloads Section - New */}
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

      {/* Engineering Section - New */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block p-3 rounded-xl bg-white shadow-sm border border-slate-100 mb-6">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
                {t.engineering.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.engineering.description}
              </p>
            </motion.div>

            {/* Image Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://i.imgur.com/wkhn0pm.png" 
                  alt="Engineering Software Interface" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
                />
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Specialized Projects Section - Redesigned to "Large Image" Style */}
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

      {/* Location Map Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-4">{t.location.title}</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">{t.location.subtitle}</p>
           </div>
           
           <div className="w-full h-[450px] bg-slate-100 rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative">
              <iframe 
                width="100%" 
                height="100%" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Rua%20Alfa%2C%20299%2C%20Itaquaquecetuba%2C%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0}
                title="Map"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              
              {/* Floating Card with Address */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 max-w-xs hidden md:block">
                 <MapPin className="w-8 h-8 text-primary mb-3" />
                 <p className="font-bold text-slate-900 text-lg mb-1">{t.location.title}</p>
                 <p className="text-slate-600 text-sm mb-4">{t.location.address}</p>
                 <a 
                   href="https://www.google.com/maps/search/?api=1&query=Rua+Alfa+299+Itaquaquecetuba+SP" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-primary font-bold text-sm hover:underline flex items-center gap-1"
                 >
                   {t.location.getDirections} <ExternalLink className="w-3 h-3" />
                 </a>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
