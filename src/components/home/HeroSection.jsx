// file placeholder

import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Star, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ onWhatsAppClick }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-10 w-40 h-40 bg-green-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-300/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a9c470b957504da2a4dfe4/119e795f6_image.png"
              alt="Valens Cestas Logo"
              className="h-20 mx-auto md:mx-0 object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cestas de 
              <span className="text-emerald-600"> Café da Manhã</span>
              <br />& Tarde
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0"
          >
            Demonstre seu carinho com cestas especiais, personalizadas e entregues com muito amor. 
            Cada cesta é única e feita especialmente para você.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
          >
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-gray-700">Feito com amor</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">Qualidade premium</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Gift className="w-5 h-5 text-emerald-500" />
              <span className="text-gray-700">100% personalizado</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            <Button 
              onClick={() => onWhatsAppClick()}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Fazer Pedido pelo WhatsApp
            </Button>
            <p className="text-sm text-gray-500">
              📱 Resposta rápida • 🚚 Entrega em toda cidade • ❤️ Feito com carinho
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative">
            {/* Main image */}
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b8ca15e28cbf0328efb847/ad8fcd0d7_529004474_18277476889287824_1283512728684721650_n.jpg"
                alt="Cestas Valens"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            
            {/* Floating cards */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-emerald-500 text-white p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">6+</div>
                <div className="text-sm">Opções</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="text-center">
                <div className="text-2xl">🎁</div>
                <div className="text-sm text-gray-600">Cortesias incluídas</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
