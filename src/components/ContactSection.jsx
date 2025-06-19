import { useRef } from "react"; // 1. Adicionado useRef
import emailjs from "@emailjs/browser"; // 2. Adicionado a biblioteca do EmailJS
import { Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState, useEffect } from "react";

// Nenhuma alteração necessária neste componente auxiliar.
function EmailLink() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = "cicerojr10";
    const domain = "gmail.com";
    setEmail(`${user}@${domain}`);
  }, []);

  return (
    <div>
      <h4 className="font-medium">Email</h4>
      {email && (
        <a
          href={`mailto:${email}`}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {email}
        </a>
      )}
    </div>
  );
}

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef(); // 3. Criada a referência para o formulário

  // 4. Função handleSubmit foi COMPLETAMENTE SUBSTITUÍDA pela lógica do EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log("EmailJS SUCCESS!", result.text);
          toast({
            title: "Mensagem Enviada!",
            description: "Obrigado pela mensagem. Retornarei em breve!",
          });
          form.current.reset(); // Limpa o formulário
        },
        (error) => {
          console.log("EmailJS FAILED...", error.text);
          toast({
            variant: "destructive",
            title: "Uh oh! Algo deu errado.",
            description:
              "Houve um problema ao enviar a sua mensagem. Por favor, tente novamente.",
          });
        }
      )
      .finally(() => {
        // Garante que o botão seja reativado após o sucesso ou falha
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary">Contato</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Em busca de talentos para sua equipe ou novas oportunidades de
          colaboração? Entre em contato! Estou pronto para agregar valor e
          impulsionar seus objetivos de negócio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <EmailLink />
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <span className="text-muted-foreground">
                    Curitiba, Paraná, Brasil
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Redes Sociais</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/cicerojr-techprofessional/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/ciceroqjunior/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>

            {/* 5. Adicionado ref={form} ao formulário */}
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome..."
                  disabled={isSubmitting} // Desativa o campo durante o envio
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="seuemail@email.com"
                  disabled={isSubmitting} // Desativa o campo durante o envio
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4} // Aumentar um pouco a altura padrão
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Olá, gostaria de conversar sobre..."
                  disabled={isSubmitting} // Desativa o campo durante o envio
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};