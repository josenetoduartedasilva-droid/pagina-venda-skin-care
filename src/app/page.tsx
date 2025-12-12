"use client";

import { Sparkles, CheckCircle2, Clock, Wallet, Users, Star, ArrowRight, Shield, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const benefits = [
    {
      icon: Clock,
      title: "Resultados em 7 dias",
      description: "Veja sua pele transformada em apenas uma semana"
    },
    {
      icon: Wallet,
      title: "Produtos acessíveis",
      description: "Recomendações que cabem no seu bolso"
    },
    {
      icon: Users,
      title: "Para todos os tipos",
      description: "Rotinas personalizadas para cada tipo de pele"
    },
    {
      icon: Heart,
      title: "Masculino e feminino",
      description: "Dicas específicas para homens e mulheres"
    }
  ];

  const features = [
    "Identificação completa do seu tipo de pele",
    "Rotina matinal e noturna passo a passo",
    "Lista de produtos acessíveis e eficazes",
    "Ordem correta de aplicação dos produtos",
    "Técnicas de massagem facial profissional",
    "Dicas de skincare masculino e feminino",
    "Tratamentos caseiros econômicos",
    "Guia de ingredientes ativos essenciais"
  ];

  const testimonials = [
    {
      name: "Mariana Silva",
      rating: 5,
      text: "Em 10 dias minha pele estava irreconhecível! Finalmente entendi a ordem certa dos produtos e não gasto mais dinheiro à toa.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Carlos Mendes",
      rating: 5,
      text: "Como homem, sempre achei skincare complicado. Esse guia simplificou tudo e agora tenho uma rotina que funciona de verdade!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Juliana Costa",
      rating: 5,
      text: "Economizei muito dinheiro! Antes comprava produtos caros sem saber se eram adequados. Agora sei exatamente o que minha pele precisa.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  const handleCTA = () => {
    // Aqui você pode adicionar a lógica de checkout/redirecionamento
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50 -z-10" />
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Guia Completo de Skincare</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Sua pele mais bonita em{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                7 dias
              </span>
              {" "}– sem gastar caro, sem complicação e direto da sua casa.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra o método inteligente para cuidar da sua pele com produtos acessíveis e resultados comprovados
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                onClick={handleCTA}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
              >
                Quero Minha Rotina Estética Inteligente
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-600" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-600" />
                <span>+2.000 pessoas satisfeitas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
              Você já se sentiu perdida(o) com tantas opções de produtos?
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg">
              <Card className="border-l-4 border-pink-500 shadow-lg">
                <CardContent className="p-6">
                  <p className="leading-relaxed">
                    <strong className="text-pink-600">O problema:</strong> Você entra na farmácia ou navega online e se depara com centenas de produtos. Qual escolher? Qual a ordem certa? Será que esse produto é para o meu tipo de pele?
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500 shadow-lg">
                <CardContent className="p-6">
                  <p className="leading-relaxed">
                    <strong className="text-purple-600">O resultado:</strong> Você gasta dinheiro em produtos que não funcionam, usa na ordem errada ou simplesmente desiste de ter uma rotina de cuidados porque parece complicado demais.
                  </p>
                </CardContent>
              </Card>

              <div className="text-center pt-6">
                <p className="text-xl md:text-2xl font-semibold text-gray-900">
                  E se existisse um guia simples que te mostrasse exatamente o que fazer?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Apresentamos: Rotina Estética Smart
              </h2>
              <p className="text-xl text-gray-600">
                O manual completo que vai transformar sua rotina de skincare
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-pink-300 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded-lg">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  O que você vai receber:
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Veja o que nossos clientes dizem
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Mais de 2.000 pessoas já transformaram sua pele
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Comece sua transformação hoje
            </h2>
            <p className="text-xl md:text-2xl text-pink-100">
              Invista na sua pele e veja resultados reais em apenas 7 dias
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 my-8">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                R$ 47,00
              </div>
              <p className="text-pink-100 text-lg">
                Pagamento único • Acesso vitalício
              </p>
            </div>

            <Button 
              onClick={handleCTA}
              size="lg"
              className="w-full sm:w-auto bg-white text-pink-600 hover:bg-pink-50 px-12 py-8 text-xl font-bold shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
            >
              Quero Minha Rotina Estética Inteligente
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>

            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6 text-pink-100">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © 2024 Rotina Estética Smart. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2">
            Este produto é um guia informativo. Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </footer>
    </div>
  );
}
