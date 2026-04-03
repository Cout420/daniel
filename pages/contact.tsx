
import React, { useState } from 'react';
import { useLanguage } from '../hooks/use-language';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { submitContactForm } from '../lib/contact-actions';
import { CheckCircle2, Clock, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Email inválido." }),
  phone: z.string().min(8, { message: "Telefone inválido." }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // 1. Simula o salvamento dos dados (Log no servidor/console)
      await submitContactForm(data);

      // 2. Formata a mensagem para o WhatsApp
      const whatsappMessage = `*Novo Pedido de Orçamento via Site*\n\n` +
        `*Nome:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `*Telefone:* ${data.phone}\n\n` +
        `*Mensagem:*\n${data.message}`;

      // 3. Número do WhatsApp da empresa (Conforme contexto anterior)
      const companyPhone = "551146442969"; 
      
      // 4. Cria o link e redireciona
      const url = `https://wa.me/${companyPhone}?text=${encodeURIComponent(whatsappMessage)}`;
      
      setIsSuccess(true);
      reset();
      
      // Pequeno delay para mostrar o feedback visual antes de abrir a nova aba
      setTimeout(() => {
        window.open(url, '_blank');
        setIsSuccess(false);
      }, 1500);

    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      
      {/* Container Principal */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        
        {/* Cabeçalho Institucional */}
        <div className="mb-16 border-b border-gray-200 pb-8">
           <h1 className="text-4xl font-bold font-heading text-slate-900 mb-6 uppercase tracking-tight">
             {t.contact.title}
           </h1>
           <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
             {t.contact.intro}
           </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Coluna Esquerda: Informações de Contato + Imagem */}
          <div className="lg:col-span-1 space-y-10">
             
             {/* Bloco de Informações */}
             <div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-l-4 border-primary pl-4">
                  {t.contact.infoTitle}
                </h3>
                
                <div className="space-y-8 text-slate-700">
                   <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="font-medium">{t.contact.hoursLabel}</p>
                   </div>
                   
                   <div>
                      <p className="font-bold text-lg text-slate-900">+55 (11) 4644-2969</p>
                      <p className="font-bold text-lg text-slate-900">+55 (11) 4644-2977</p>
                   </div>
                   
                   <div>
                      <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{t.contact.emailLabel}</span>
                      <div className="flex flex-col gap-1">
                        <p className="font-medium break-all">vendas@metalurgicadaniela.com.br</p>
                      </div>
                   </div>
                   
                   <div>
                      <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{t.contact.addressLabel}</span>
                      <p className="font-medium">Rua Alfa, nº 299, Bairro Una</p>
                      <p className="font-medium">Itaquaquecetuba/SP 08599-670</p>
                   </div>
                </div>
             </div>

             {/* Imagem Call Center */}
             <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=600&auto=format&fit=crop" 
                  alt="Customer Service" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>

          </div>

          {/* Coluna Direita: Formulário */}
          <div className="lg:col-span-2 bg-slate-50 p-8 md:p-10 rounded-xl border border-gray-100">
             <div className="mb-8">
               <p className="text-slate-600 text-lg">
                 {t.contact.formTitle}
               </p>
             </div>

             {isSuccess ? (
                <div className="bg-green-100 border border-green-200 rounded-lg p-8 text-center h-full flex flex-col justify-center items-center">
                  <CheckCircle2 className="h-16 w-16 text-green-600 mb-6" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Redirecionando para o WhatsApp...</h3>
                  <p className="text-green-700 text-lg">Sua mensagem foi formatada e está pronta para envio.</p>
                </div>
             ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-800">{t.contact.name}</label>
                      <Input 
                        {...register('name')} 
                        placeholder="Seu nome completo"
                        className="bg-white border-gray-300 h-12 text-lg"
                      />
                      {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-800">{t.contact.phone}</label>
                      <Input 
                        {...register('phone')} 
                        placeholder="(00) 00000-0000"
                        className="bg-white border-gray-300 h-12 text-lg"
                      />
                      {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-800">{t.contact.email}</label>
                    <Input 
                      type="email"
                      {...register('email')} 
                      placeholder="seu@email.com"
                      className="bg-white border-gray-300 h-12 text-lg"
                    />
                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-800">{t.contact.message}</label>
                    <Textarea 
                      {...register('message')} 
                      placeholder="Descreva sua solicitação..."
                      className="bg-white border-gray-300 min-h-[180px] text-lg p-4"
                    />
                    {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded text-lg w-full md:w-auto min-w-[200px] flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? t.contact.submitting : (
                        <>
                          {t.contact.submit} <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-slate-500 mt-3">
                      Ao clicar em enviar, você será redirecionado para o WhatsApp da nossa equipe.
                    </p>
                  </div>
                </form>
             )}
          </div>

        </div>
      </div>

      {/* Seção Mapa - Full Width */}
      <section className="w-full h-[500px] relative bg-slate-200 border-t border-gray-300">
         <iframe 
            width="100%" 
            height="100%" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Rua%20Alfa%2C%20299%2C%20Itaquaquecetuba%2C%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0}
            title="Localização Metalúrgica Daniela"
            className="w-full h-full"
         ></iframe>
      </section>

    </div>
  );
};

export default Contact;
