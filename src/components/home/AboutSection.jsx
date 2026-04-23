// file placeholder
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Gift, Users, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada cesta é montada com carinho e atenção aos detalhes"
    },
    {
      icon: Gift,
      title: "100% Personalizado",
      description: "Balão personalizado, fotos polaroid e cartão como cortesia"
    },
    {
      icon: Star,
      title: "Qualidade Premium",
      description: "Ingredientes selecionados e produtos da melhor qualidade"
    },
    {
      icon: Users,
      title: "Atendimento Especial",
      description: "Suporte completo via WhatsApp para uma experiência única"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Processo ágil para você receber sua cesta no tempo certo"
    },
    {
      icon: MapPin,
      title: "Entrega Local",
      description: "Atendemos toda a região com taxa de entrega acessível"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher a <span className="text-emerald-600">Valens Cestas</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em transformar momentos especiais em memórias inesquecíveis através de cestas únicas e personalizadas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center h-full bg-emerald-50/50 border-emerald-100 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Informações Importantes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Na falta de estoque de algum item, substituímos por similar ou superior</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Cada cesta é única - cores e posições podem variar das fotos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Pedido confirmado apenas após pagamento</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Precisamos de todas as informações via WhatsApp</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Balão, carta personalizada e fotos polaroid são cortesias</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Consulte taxa de entrega para seu bairro</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}