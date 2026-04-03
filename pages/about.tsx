import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/use-language';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Hammer, Factory, FlaskConical, Container, Award, Target, Zap, CheckCircle2, Download, Box, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const sectors = [
    { name: "Indústria Naval", icon: <Anchor className="w-8 h-8 text-primary" /> },
    { name: "Mecânica", icon: <Hammer className="w-8 h-8 text-primary" /> },
    { name: "Siderúrgica", icon: <Factory className="w-8 h-8 text-primary" /> },
    { name: "Química", icon: <FlaskConical className="w-8 h-8 text-primary" /> },
    { name: "Armazenagem", icon: <Container className="w-8 h-8 text-primary" /> },
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

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section - Minimalista e Direto */}
      <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 opacity-10">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
           </svg>
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight">
              {t.about.title}
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed">
              {t.about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Foco total na Leitura */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Quem Somos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-10 leading-tight">
              {t.about.introTitle}
            </h2>
            
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                {t.about.introText1}
              </p>
            </div>

            {/* Setores - Lista Limpa */}
            <div className="mt-16 pt-12 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-8 uppercase tracking-wide">
                Setores de Atuação
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {sectors.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="mb-4 p-4 rounded-full bg-slate-50 group-hover:bg-primary/10 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-base font-medium text-slate-700 leading-tight">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section - Fundo Suave */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-8">
               Tecnologia & Inovação
             </h2>
             <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light mb-10">
               {t.about.introText2}
             </p>
             
             <div className="grid md:grid-cols-3 gap-6">
               <div className="flex items-start gap-4">
                 <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                 <span className="text-lg text-slate-600">Planejamento preciso</span>
               </div>
               <div className="flex items-start gap-4">
                 <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                 <span className="text-lg text-slate-600">Softwares avançados</span>
               </div>
               <div className="flex items-start gap-4">
                 <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                 <span className="text-lg text-slate-600">Preços competitivos</span>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Section - Machinery Images */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6 max-w-5xl mx-auto leading-tight">
              Usinagem - Equipamentos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "/media/PpVkFgQ.png",
              "/media/iy6OyiJ.png",
              "/media/X95Sw7d.png"
            ].map((src, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={src} 
                    alt={`Infraestrutura Metalúrgica Daniela ${index + 1}`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Certifications Section */}
      <section id="qualidade" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
              Qualidade & Certificações
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Garantia de excelência através de rigorosos processos de controle e certificações internacionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Inovação e Desenvolvimento",
                desc: "Investimos continuamente em pesquisa para aprimorar projetos e a metalurgia de peças fundidas. Desenvolvemos ligas especiais resistentes ao calor, à abrasão e à corrosão para garantir a máxima performance e durabilidade dos nossos produtos.",
                image: "/media/QMNQ7aX.jpeg"
              },
              {
                title: "Certificado ISO 9001:2015",
                desc: "Nosso compromisso com a qualidade é validado pela certificação ISO 9001:2015, garantindo que nossos processos e produtos atendem aos mais altos padrões internacionais de gestão da qualidade.",
                image: "/media/csD7p4i.jpeg"
              },
              {
                title: "Certificado de Calibração",
                desc: "Certificado de revisão / calibração N° 2044 / 19 para o equipamento Spectrometro de Emissão Óptica, garantindo a precisão das nossas análises.",
                image: "/media/CDCl73r.jpeg"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row h-full hover:shadow-xl transition-shadow duration-300"
              >
                <div 
                  className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0 cursor-zoom-in group"
                  onClick={() => setSelectedImage(item.image)}
                >
                   <img 
                     src={item.image} 
                     alt={item.title} 
                     className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                     <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/><path d="M3 16.2V21m0 0h4.8M3 21l6-6"/><path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"/><path d="M3 7.8V3m0 0h4.8M3 3l6 6"/></svg>
                     </div>
                   </div>
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Image Section - Instalações */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
              Nossas Instalações
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Conheça nossa estrutura moderna e equipada para atender as mais diversas demandas do mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-[400px] group"
            >
              <img 
                src="/media/lOKizSW.png" 
                alt="Instalações Aceros - Vista 1" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-[400px] group"
            >
              <img 
                src="/media/LQGMmYF.png" 
                alt="Instalações Aceros - Vista 2" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
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

      {/* Pillars Section - Cards Limpos e Grandes */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900">
              Nossos Pilares
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Experiência */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                {t.about.pillars.experienceTitle}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.about.pillars.experienceText}
              </p>
            </motion.div>

            {/* Profissionalismo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-accent mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                {t.about.pillars.professionalismTitle}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.about.pillars.professionalismText}
              </p>
            </motion.div>

            {/* Motivação */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                {t.about.pillars.motivationTitle}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.about.pillars.motivationText}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para elevar seu projeto?</h2>
           <p className="text-xl text-slate-100 mb-10 leading-relaxed">
             Nossa equipe está pronta para atender sua demanda. Tire suas dúvidas, consulte orçamentos ou agende uma reunião técnica.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <a 
               href="https://wa.me/551146442969?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20sobre%20um%20projeto." 
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-green-900/20"
             >
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
               </svg>
               Falar no WhatsApp
             </a>
             <Link 
               to="/contato" 
               className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
             >
               Solicitar Orçamento
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;