// file placeholder

import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaSection({ onWhatsAppClick }) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a9c470b957504da2a4dfe4/119e795f6_image.png"
              alt="Valens Cestas Logo"
              className="h-16 mx-auto mb-6 object-contain"
            />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para fazer alguém 
              <span className="block text-yellow-300">muito feliz?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Entre em contato conosco e vamos criar juntos a cesta perfeita para sua ocasião especial!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
            >
              <Heart className="w-6 h-6 text-red-300" />
              <span className="font-semibold">Feito com amor</span>
            </motion.div>
            
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
            >
              <Sparkles className="w-6 h-6 text-yellow-300" />
              <span className="font-semibold">100% personalizado</span>
            </motion.div>
            
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
            >
              <MessageCircle className="w-6 h-6 text-green-300" />
              <span className="font-semibold">Atendimento rápido</span>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => onWhatsAppClick()}
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Conversar no WhatsApp
            </Button>
          </motion.div>

          <p className="mt-6 text-emerald-200">
            📱 Resposta garantida • 🚚 Entrega rápida • ❤️ Satisfação garantida
          </p>
        </motion.div>
      </div>
    </section>
  );
}
