
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/use-language';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import { MessageCircle } from 'lucide-react';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Expertise from './pages/expertise';
import MarketsIndex from './pages/markets-index';
import Innovation from './pages/innovation';
import ScrollToTop from './components/scroll-to-top';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/atuacao" element={<MarketsIndex />} />
              <Route path="/atuacao/:slug" element={<Expertise />} />
              <Route path="/inovacao" element={<Innovation />} />
            </Routes>
          </main>
          
          {/* CTA Section */}
          <section className="py-20 bg-primary text-white text-center">
              <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                  <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Vamos Conversar Sobre a Sua Necessidade?</h2>
                  <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">Nossa equipe de especialistas está pronta para entender seu projeto e oferecer a solução em aço ideal para você. Clique nos botões abaixo e fale conosco diretamente pelo WhatsApp.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <a href="https://wa.me/551146442969" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg">
                          <MessageCircle className="w-6 h-6" />
                          WhatsApp (11) 4644-2969
                      </a>
                      <a href="https://wa.me/551146442977" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg">
                          <MessageCircle className="w-6 h-6" />
                          WhatsApp (11) 4644-2977
                      </a>
                  </div>
              </div>
          </section>

          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
