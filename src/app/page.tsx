import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  MessageSquare,
  BarChart3,
  Zap,
  Check,
  Star,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
} from "lucide-react";
// Removed: import Image from "next/image";
// Removed: import Link from "next/link";
import { AddOnsSection } from "./components/add-ons-section";
import { OnboardingPreviewSection } from "./components/onboarding-preview-section";
import { AdCreationStepper } from "./components/ad-creation-stepper";
import WaitingListSection from "./components/waiting-list-section";

export default function MultiImovelLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">MultiImóvel</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#recursos"
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                Recursos
              </a>
              <a
                href="#como-funciona"
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                Como Funciona
              </a>
              <a
                href="#precos"
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                Preços
              </a>
              <a
                href="#depoimentos"
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                Depoimentos
              </a>
              <a
                href="#waiting-list"
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Experimente Grátis
                </Button>
              </a>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 sm:pt-24 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="absolute inset-0 opacity-10">
          <img
            src="/placeholder.svg?height=800&width=1200"
            alt="Pessoa gerenciando imóveis no laptop"
            style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", inset: 0 }}
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Anuncie seus imóveis mais rápido e sem complicação
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Publique em vários sites ao mesmo tempo e responda interessados
              automaticamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              >
                Experimente Grátis
              </Button>
              <a
                href="#precos"
                className="text-blue-900 hover:text-blue-700 font-semibold text-lg underline underline-offset-4"
              >
                Ver Planos e Preços
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="waiting-list" className="bg-gray-50 scroll-mt-20">
        <WaitingListSection />
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Recursos Poderosos para Seu Negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar seus imóveis de forma
              eficiente
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-blue-900" />
                </div>
                <CardTitle className="text-blue-900">
                  Painel Único de Anúncios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Conecte OLX, ZAP Imóveis, VivaReal e Facebook. Tudo em uma
                  tela só.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-blue-900">
                  Respostas Automáticas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Perguntas como &quot;tem piscina?&quot; ou &quot;aceita
                  financiamento?&quot; são respondidas sozinhas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-900" />
                </div>
                <CardTitle className="text-blue-900">
                  Analytics Detalhado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Veja quantas pessoas viram seu anúncio e de onde vêm os
                  interessados.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-blue-900">
                  Central de Mensagens Inteligente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Todas as mensagens dos interessados ficam organizadas em um só
                  lugar.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comece a usar em apenas 3 passos simples
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Adicione seu imóvel
              </h3>
              <p className="text-gray-600">
                Cadastre seu imóvel com fotos e informações básicas
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Publique em vários sites
              </h3>
              <p className="text-gray-600">
                Seu anúncio aparece no OLX, ZAP, VivaReal e Facebook
                automaticamente
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Receba mensagens e venda
              </h3>
              <p className="text-gray-600">
                Todas as mensagens chegam em um lugar só. Respostas automáticas
                para perguntas comuns
              </p>
            </div>
          </div>
        </div>
      </section>

      <OnboardingPreviewSection />

      <AdCreationStepper />

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Planos e Preços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Freemium Plan */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-900">
                  Freemium
                </CardTitle>
                <div className="text-4xl font-bold text-blue-900 mt-4">
                  Grátis
                </div>
                <CardDescription>Para começar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>1 imóvel</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Até 2 sites de venda</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Suporte por email</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>

            {/* Basic Plan */}
            <Card className="relative border-green-600 border-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white px-4 py-1">
                  Mais Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-900">Básico</CardTitle>
                <div className="text-4xl font-bold text-blue-900 mt-4">
                  R$ 49<span className="text-lg font-normal">/mês</span>
                </div>
                <CardDescription>Para profissionais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Até 25 imóveis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Todos os sites de venda</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Respostas automáticas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Relatórios de desempenho</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Assinar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-900">Pro</CardTitle>
                <div className="text-4xl font-bold text-blue-900 mt-4">
                  R$ 99<span className="text-lg font-normal">/mês</span>
                </div>
                <CardDescription>Para empresas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Imóveis ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Todos os recursos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Relatórios avançados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Integrações personalizadas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Assinar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <AddOnsSection />

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Histórias reais de sucesso com MultiImóvel
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;Economizei 5 horas por semana! Agora consigo focar no
                  que realmente importa: fechar negócios.&quot;
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="João"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-blue-900">João Silva</p>
                    <p className="text-sm text-gray-500">
                      Proprietário de 3 imóveis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;Minhas respostas viraram instantâneas. Os interessados
                  ficam impressionados com a agilidade!&quot;
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Maria"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-blue-900">Maria Santos</p>
                    <p className="text-sm text-gray-500">
                      Investidora imobiliária
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;O analytics me ajudou a entender qual portal gera mais
                  leads. Otimizei meus investimentos!&quot;
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Carlos"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-blue-900">
                      Carlos Oliveira
                    </p>
                    <p className="text-sm text-gray-500">Corretor de imóveis</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre o MultiImóvel
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Como funciona o teste grátis?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Você pode testar todos os recursos por 14 dias, sem pagar
                  nada. Não precisa nem colocar cartão de crédito.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Posso parar de usar quando quiser?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Claro! Você pode cancelar quando quiser, direto no seu painel.
                  Não tem multa nem taxa para cancelar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Em quais sites meu anúncio vai aparecer?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seu imóvel aparece no OLX, ZAP Imóveis, VivaReal e Facebook.
                  Estamos sempre adicionando novos sites.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Como funciona a resposta automática?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  É bem fácil! Você configura as respostas para perguntas comuns
                  como &quot;tem garagem?&quot; ou &quot;aceita pet?&quot;. O
                  sistema responde sozinho.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Vocês ajudam se eu tiver dúvidas?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim! Nossa equipe brasileira te ajuda por email, chat ou
                  telefone. Tudo em português e de forma bem simples.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">MultiImóvel</h3>
              <p className="text-blue-200 mb-6 max-w-md">
                A plataforma completa para gerenciar seus anúncios de imóveis em
                todos os portais de forma inteligente e automatizada.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
            <p>&copy; 2025 MultiImóvel. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
