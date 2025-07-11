import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Copy,
  Search,
  CheckCircle,
  Rocket,
  Link,
  Camera,
  Edit3,
  Zap,
} from "lucide-react";

export function AdCreationStepper() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-sm font-medium mb-4">
            <Zap className="h-4 w-4 mr-1" />
            Super Rápido
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Já tem um anúncio em outro site? Copie em segundos!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cole o link do seu anúncio do OLX, ZAP ou VivaReal e deixe a mágica
            acontecer
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Stepper Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <span className="ml-2 text-sm font-medium text-blue-900 hidden md:block">
                  Cole o Link
                </span>
              </div>
              <div className="w-8 h-0.5 bg-blue-200"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <span className="ml-2 text-sm font-medium text-blue-900 hidden md:block">
                  Busca Automática
                </span>
              </div>
              <div className="w-8 h-0.5 bg-blue-200"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <span className="ml-2 text-sm font-medium text-blue-900 hidden md:block">
                  Revisar
                </span>
              </div>
              <div className="w-8 h-0.5 bg-blue-200"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <span className="ml-2 text-sm font-medium text-green-600 hidden md:block">
                  Publicar
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Steps Description */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Copy className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    1. Cole o link do seu anúncio
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Copie o link do seu anúncio que já está no OLX, ZAP Imóveis
                    ou VivaReal e cole aqui.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600">
                    <strong>Exemplo:</strong>{" "}
                    https://www.olx.com.br/imovel/apartamento-3-quartos...
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Search className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    2. Buscamos as informações automaticamente
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Nossa inteligência artificial lê o anúncio e extrai todas as
                    informações: fotos, preço, descrição, localização.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Fotos
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Preço
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Localização
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Descrição
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Edit3 className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    3. Revise e ajuste se quiser
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Tudo já vem preenchido! Você só precisa revisar e pode fazer
                    pequenos ajustes se necessário.
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    ✓ Na maioria das vezes, não precisa mudar nada!
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Rocket className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    4. Publique em todos os sites
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Clique em &quot;Publicar&quot; e seu anúncio aparece
                    automaticamente em todos os portais conectados.
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    ⚡ Processo completo em menos de 1 minuto!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Interface Mockup */}
            <div className="space-y-6">
              {/* Step 1 Interface */}
              <Card className="shadow-lg border-2 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      1
                    </div>
                    <h4 className="font-semibold text-blue-900">
                      Cole o Link do Anúncio
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Link do seu anúncio existente
                    </label>
                    <div className="flex">
                      <div className="flex-1 h-10 bg-gray-100 rounded-l-md flex items-center px-3 text-gray-600 text-sm">
                        https://www.olx.com.br/imovel/apartamento-centro...
                      </div>
                      <Button className="rounded-l-none bg-blue-900 hover:bg-blue-800 text-white">
                        <Link className="h-4 w-4" color="white" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Cole aqui o link do OLX, ZAP Imóveis ou VivaReal
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 Interface */}
              <Card className="shadow-lg border-2 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      2
                    </div>
                    <h4 className="font-semibold text-blue-900">
                      Extraindo Informações...
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 bg-green-50 rounded">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm text-green-700">
                        Fotos encontradas (8 imagens)
                      </span>
                    </div>
                    <div className="flex items-center p-2 bg-green-50 rounded">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm text-green-700">
                        Preço: R$ 350.000
                      </span>
                    </div>
                    <div className="flex items-center p-2 bg-green-50 rounded">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm text-green-700">
                        Localização: Centro, São Paulo
                      </span>
                    </div>
                    <div className="flex items-center p-2 bg-green-50 rounded">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm text-green-700">
                        Descrição completa extraída
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 Interface */}
              <Card className="shadow-lg border-2 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      3
                    </div>
                    <h4 className="font-semibold text-blue-900">
                      Revisar Informações
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Tipo
                        </label>
                        <div className="h-8 bg-gray-100 rounded flex items-center px-2 text-sm">
                          Apartamento
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Quartos
                        </label>
                        <div className="h-8 bg-gray-100 rounded flex items-center px-2 text-sm">
                          3 quartos
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Preço
                      </label>
                      <div className="h-8 bg-gray-100 rounded flex items-center px-2 text-sm">
                        R$ 350.000
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Camera className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        8 fotos importadas
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4 Interface */}
              <Card className="shadow-lg border-2 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      4
                    </div>
                    <h4 className="font-semibold text-blue-900">
                      Publicar em Todos os Sites
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center p-2 bg-orange-50 rounded text-xs">
                        <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                        OLX ✓
                      </div>
                      <div className="flex items-center p-2 bg-blue-50 rounded text-xs">
                        <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                        ZAP ✓
                      </div>
                      <div className="flex items-center p-2 bg-red-50 rounded text-xs">
                        <div className="w-4 h-4 bg-red-600 rounded mr-2"></div>
                        VivaReal ✓
                      </div>
                      <div className="flex items-center p-2 bg-blue-50 rounded text-xs">
                        <div className="w-4 h-4 bg-blue-800 rounded mr-2"></div>
                        Facebook ✓
                      </div>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <a href="#waiting-list">
                        <Rocket className="h-4 w-4 mr-2" />
                        Publicar Agora
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Economize horas de trabalho!
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ao invés de criar anúncios do zero em cada site, simplesmente
              copie um link e deixe nossa IA fazer o resto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                <a href="#waiting-list">Testar Gratuitamente</a>
              </Button>
              <p className="text-sm text-gray-500">
                Funciona com links do OLX, ZAP e VivaReal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
