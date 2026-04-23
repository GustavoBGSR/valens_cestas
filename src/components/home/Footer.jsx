// file placeholder

import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, Instagram } from 'lucide-react';

export default function Footer({ onWhatsAppClick }) {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a9c470b957504da2a4dfe4/119e795f6_image.png"
              alt="Valens Cestas Logo"
              className="h-12 mx-auto md:mx-0 mb-4 object-contain"
            />
            <p className="text-gray-300 leading-relaxed">
              Especialistas em transformar momentos especiais em memórias inesquecíveis através de cestas personalizadas e feitas com muito amor.
            </p>
          </div>

          {/* Informações de Contato */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-emerald-400">Contato</h3>
            <div className="space-y-4">
              <Button 
                onClick={() => onWhatsAppClick()}
                variant="outline"
                className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <p className="text-gray-400 text-sm">
                📍 Entregamos em Guarujá-SP e regiões<br />
                🕒 Atendimento: Seg-Sáb 11h-19h
              </p>
            </div>
          </div>

          {/* Nossas Cestas */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-emerald-400">Nossas Cestas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Display - R$150</li>
              <li>• Mini Bag - R$125</li>
              <li>• Supreme 1 - R$170</li>
              <li>• Redonda Luxo - R$165</li>
              <li>• Bom Dia - R$165</li>
              <li>• Supreme 2 - R$195</li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Valens Cestas. Todos os direitos reservados.
              <div className="flex items-center gap-2 text-gray-400 mt-2 justify-center md:justify-start">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Feito com amor pela Valens Cestas</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-gray-300 text-sm mb-1">Acesse nosso Instagram para mais fotos:</p>
              <a 
                href="https://www.instagram.com/valenscestas?igsh=dTVuYTVvZHl6dWMw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors"
              >
                  <Instagram className="w-5 h-5" />
                  <span className="font-semibold">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
