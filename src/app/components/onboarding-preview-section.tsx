import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  ArrowRight,
  Upload,
  MapPin,
  DollarSign,
  Home,
  MessageSquare,
  Eye,
  Clock,
} from "lucide-react";

export function OnboardingPreviewSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium mb-4">
            Veja como é fácil
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Primeiros Passos Super Simples
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja como é fácil começar. Tão simples quanto postar no Chaves na Mão!
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Step 1: Add Property */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Adicione seu imóvel
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Preencha um formulário simples com as informações básicas do seu
                imóvel. Igual quando você posta algo para vender no Chaves na Mão.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Home className="h-5 w-5 text-green-600 mr-3" />
                  <span>Tipo do imóvel (casa, apartamento, etc.)</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-3" />
                  <span>Endereço ou bairro</span>
                </li>
                <li className="flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-3" />
                  <span>Preço de venda ou aluguel</span>
                </li>
                <li className="flex items-center">
                  <Upload className="h-5 w-5 text-green-600 mr-3" />
                  <span>Fotos do imóvel</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-blue-900 text-white p-4 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span className="text-sm">
                      MultiImóvel - Adicionar Imóvel
                    </span>
                  </div>
                  <div className="p-6 bg-white">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">
                      Cadastrar Novo Imóvel
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Tipo do Imóvel
                        </label>
                        <div className="w-full h-10 bg-gray-100 rounded-md flex items-center px-3 text-gray-600">
                          Apartamento
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Endereço
                        </label>
                        <div className="w-full h-10 bg-gray-100 rounded-md flex items-center px-3 text-gray-600">
                          Rua das Flores, 123 - Centro
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Preço
                          </label>
                          <div className="w-full h-10 bg-gray-100 rounded-md flex items-center px-3 text-gray-600">
                            R$ 350.000
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Quartos
                          </label>
                          <div className="w-full h-10 bg-gray-100 rounded-md flex items-center px-3 text-gray-600">
                            3 quartos
                          </div>
                        </div>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          Arraste suas fotos aqui
                        </p>
                      </div>
                      <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <a href="#waiting-list">
                          Continuar
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="h-8 w-8 text-blue-900" />
          </div>

          {/* Step 2: Auto Publishing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-blue-900 text-white p-4 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span className="text-sm">
                      MultiImóvel - Publicação Automática
                    </span>
                  </div>
                  <div className="p-6 bg-white">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">
                      Publicando seu imóvel...
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                            CM
                          </div>
                          <span className="text-sm font-medium">Chaves na Mão</span>
                        </div>
                        <Badge className="bg-green-600 text-white">
                          Publicado ✓
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                            IW
                          </div>
                          <span className="text-sm font-medium">
                            ImóvelWeb
                          </span>
                        </div>
                        <Badge className="bg-green-600 text-white">
                          Publicado ✓
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                            VR
                          </div>
                          <span className="text-sm font-medium">VivaReal</span>
                        </div>
                        <Badge className="bg-green-600 text-white">
                          Publicado ✓
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                            OLX
                          </div>
                          <span className="text-sm font-medium">OLX</span>
                        </div>
                        <Badge className="bg-green-600 text-white">
                          Publicado ✓
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                            ZI
                          </div>
                          <span className="text-sm font-medium">Zap Imóveis</span>
                        </div>
                        <Badge className="bg-green-600 text-white">
                          Publicado ✓
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
                      <p className="text-sm text-blue-800 font-medium">
                        🎉 Seu imóvel está no ar em 5 sites!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Publicação automática
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Pronto! Seu imóvel aparece automaticamente no Chaves na Mão, ImóvelWeb,
                VivaReal, OLX e Zap Imóveis. Você não precisa fazer mais nada.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-3" />
                  <span>Publicação em menos de 2 minutos</span>
                </li>
                <li className="flex items-center">
                  <Eye className="h-5 w-5 text-green-600 mr-3" />
                  <span>Seu anúncio fica visível em 5 sites</span>
                </li>
                <li className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-green-600 mr-3" />
                  <span>Mensagens chegam todas em um lugar</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="h-8 w-8 text-blue-900" />
          </div>

          {/* Step 3: Message Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Gerencie as mensagens
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Todas as mensagens dos interessados chegam organizadas em um só
                lugar. Igual ao WhatsApp, mas com todas as conversas juntas.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-green-600 mr-3" />
                  <span>Mensagens de todos os sites em um lugar</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-3" />
                  <span>Respostas automáticas para perguntas comuns</span>
                </li>
                <li className="flex items-center">
                  <Eye className="h-5 w-5 text-green-600 mr-3" />
                  <span>Histórico completo de cada conversa</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-blue-900 text-white p-4 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span className="text-sm">
                      MultiImóvel - Central de Mensagens
                    </span>
                  </div>
                  <div className="p-6 bg-white">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">
                      Mensagens dos Interessados
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 cursor-pointer">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                          CM
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            Maria Silva
                          </p>
                          <p className="text-xs text-gray-600">
                            Tem garagem? Aceita financiamento?
                          </p>
                        </div>
                        <div className="text-xs text-gray-500">10:30</div>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 cursor-pointer">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                          IW
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            João Santos
                          </p>
                          <p className="text-xs text-gray-600">
                            Posso agendar uma visita?
                          </p>
                        </div>
                        <div className="text-xs text-gray-500">09:45</div>
                      </div>
                      <div className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 cursor-pointer">
                        <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                          OLX
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            Ana Costa
                          </p>
                          <p className="text-xs text-gray-600">
                            Ainda está disponível?
                          </p>
                        </div>
                        <div className="text-xs text-gray-500">08:20</div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-xs text-yellow-800">
                        💡 <strong>Resposta automática enviada:</strong>{" "}
                        &quot;Sim, tem garagem para 2 carros e aceita
                        financiamento!&quot;
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Viu como é simples? Comece agora mesmo!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
          >
            <a href="#waiting-list">
              Experimente Grátis por 14 Dias
            </a>
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            Não precisa cartão de crédito • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
}
