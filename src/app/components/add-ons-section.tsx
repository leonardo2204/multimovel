import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Sparkles, MessageCircle, Plus } from "lucide-react"

export function AddOnsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Recursos Extras</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deixe seus anúncios ainda mais profissionais com nossos complementos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* AI Images Add-on */}
          <Card className="relative hover:shadow-lg transition-shadow border-2 border-purple-200">
            <div className="absolute -top-3 left-4">
              <Badge className="bg-purple-600 text-white px-3 py-1">
                <Sparkles className="h-4 w-4 mr-1" />
                Novidade
              </Badge>
            </div>
            <CardHeader className="text-center pt-8">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-blue-900">Fotos com Inteligência Artificial</CardTitle>
              <CardDescription className="text-gray-600">
                Transforme ambientes vazios em espaços decorados automaticamente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-900 mb-2">+ R$ 19/mês</p>
                <p className="text-sm text-gray-500">por imóvel</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Plus className="h-4 w-4 text-green-600 mr-2" />
                  <span>Adicione móveis em salas vazias</span>
                </li>
                <li className="flex items-center">
                  <Plus className="h-4 w-4 text-green-600 mr-2" />
                  <span>Decore quartos automaticamente</span>
                </li>
                <li className="flex items-center">
                  <Plus className="h-4 w-4 text-green-600 mr-2" />
                  <span>Fotos mais atrativas = mais visitas</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <a href="#waiting-list">
                  Adicionar ao Plano
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp Business Add-on */}
          <Card className="relative hover:shadow-lg transition-shadow border-2 border-green-200">
            <div className="absolute -top-3 left-4">
              <Badge className="bg-green-600 text-white px-3 py-1">
                <MessageCircle className="h-4 w-4 mr-1" />
                Popular
              </Badge>
            </div>
            <CardHeader className="text-center pt-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-blue-900">WhatsApp Business</CardTitle>
              <CardDescription className="text-gray-600">
                Conecte seu WhatsApp Business para respostas ainda mais rápidas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-900 mb-2">+ R$ 29/mês</p>
                <p className="text-sm text-gray-500">ilimitado</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Plus className="h-4 w-4 text-green-600 mr-2" />
                  <span>Respostas automáticas no WhatsApp</span>
                </li>
                <li className="flex items-center">
                  <Plus className="h-4 w-4 text-green-600 mr-2" />
                  <span>Mensagens organizadas por imóvel</span>
                </li>
                <li className="flex items-center">
                  <Plus className="h-4 w-4 text-green-600 mr-2" />
                  <span>Histórico completo de conversas</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                <a href="#waiting-list">
                  Adicionar ao Plano
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
