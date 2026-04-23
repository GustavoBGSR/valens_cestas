// file placeholder

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Gift, Heart, Eye, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function ProductGrid({ products, onWhatsAppClick }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossas <span className="text-emerald-600">Cestas Especiais</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada cesta é cuidadosamente montada com ingredientes selecionados e muito carinho. 
              Escolha a opção perfeita para sua ocasião especial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                  {product.popular && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-emerald-500 text-white px-3 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {product.name}
                      </CardTitle>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">
                          R${product.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          {product.items} itens
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {product.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.includes.slice(0, 2).map((include, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          <Gift className="w-3 h-3 mr-1" />
                          {include}
                        </Badge>
                      ))}
                      {product.includes.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.includes.length - 2} mais
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedProduct(product)}
                        className="flex-1 group-hover:border-emerald-500 transition-colors"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Detalhes
                      </Button>
                      <Button
                        onClick={() => onWhatsAppClick(product.name)}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Pedir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a9c470b957504da2a4dfe4/119e795f6_image.png"
                    alt="Logo"
                    className="h-8 w-auto"
                  />
                  Cesta {selectedProduct.name}
                  {selectedProduct.popular && (
                    <Badge className="bg-emerald-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-bold text-emerald-600">
                      R${selectedProduct.price},00
                    </div>
                    <div className="text-gray-500">
                      {selectedProduct.items} itens inclusos
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    📋 Itens inclusos:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProduct.itemList.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    🎁 Cortesias incluídas:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProduct.includes.map((include, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-emerald-600">
                        <Heart className="w-4 h-4" />
                        {include}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    ℹ️ Informações importantes:
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Estampas variadas (masculino e feminino)</li>
                    <li>• Fotos polaroid adicionais por R$5,00</li>
                    <li>• Consulte taxa de entrega para seu bairro</li>
                    <li>• Cada cesta é produzida de forma única</li>
                  </ul>
                </div>

                <Button
                  onClick={() => {
                    onWhatsAppClick(selectedProduct.name);
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Pedir via WhatsApp
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
