
import React, { useState } from 'react';

import HeroSection from '../components/home/HeroSection';
import ProductGrid from '../components/home/ProductGrid';
import AboutSection from '../components/home/AboutSection';
import CtaSection from '../components/home/CtaSection';
import Footer from '../components/home/Footer';

const products = [
  {
    id: 1,
    name: "Display",
    price: 150,
    items: 15,
    description: "Cesta completa com variedade de itens selecionados",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b8ca15e28cbf0328efb847/872a5b14b_image.png",
    popular: false,
    itemList: ["1 suco de laranja", "1 achocolatado", "1 iogurte", "1 cookie", "1 torrada", "1 bolo (fatiado)", "1 pão de coco", "1 geleia", "1 pão de creme", "1 baguete parmesão", "4 pão de frios", "3 fatias de presunto", "3 fatias de queijo", "1 bombom", "biscoitos amanteigados"],
    includes: ["Caixa display", "Balão personalizado", "3 fotos polaroid", "Cartãozinho personalizado"]
  },
  {
    id: 2,
    name: "Mini Bag",
    price: 125,
    items: 10,
    description: "Opção compacta e carinhosa para demonstrar afeto",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b8ca15e28cbf0328efb847/28f715427_image.png",
    popular: false,
    itemList: ["1 suco de laranja", "1 achocolatado", "1 cookie", "1 bis", "1 pão de mel", "1 bolinho", "1 pão de creme", "1 baguete recheada", "3 pães de frios", "1 bombom"],
    includes: ["Caixa", "Balão personalizado (pequeno)", "1 foto polaroid", "Cartãozinho personalizado"]
  },
  {
    id: 3,
    name: "Supreme 1",
    price: 170,
    items: 15,
    description: "Cesta premium com frutas frescas e variedades especiais",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b8ca15e28cbf0328efb847/229f185c3_image.png",
    popular: true,
    itemList: ["1 suco de laranja", "1 achocolatado", "1 iogurte", "1 cookie", "2 fatias de bolo", "1 pão de coco", "1 pão de creme", "1 fruta da época", "4 pão de frios", "1 baguete parmesão", "2 fatias de queijo", "2 fatias de presunto", "1 pão de mel", "1 choco biscuit", "1 barra de chocolate"],
    includes: ["Caixa", "Balão personalizado", "3 fotos polaroid", "Cartãozinho personalizado"]
  },
  {
    id: 4,
    name: "Redonda Luxo",
    price: 165,
    items: 14,
    description: "Apresentação elegante em caixa de MDF redonda",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b8ca15e28cbf0328efb847/50243de4d_image.png",
    popular: false,
    itemList: ["1 suco de laranja", "1 iogurte", "1 baguete", "1 waffle", "2 pães de frios", "3 bolachas de chocolate", "1 fruta da época", "1 café solúvel", "2 biscoitos amanteigados", "1 bolo caseiro", "1 rosa de salame", "1 geleia", "1 bombom", "queijo minas padrão (formato coração)"],
    includes: ["Caixa de MDF", "3 fotos polaroid", "Cartãozinho personalizado"]
  },
  {
    id: 5,
    name: "Bom Dia",
    price: 165,
    items: 15,
    description: "Perfeita para começar o dia com muito carinho",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b8ca15e28cbf0328efb847/2ee22e983_image.png",
    popular: false,
    itemList: ["1 suco de laranja", "1 achocolatado", "1 iogurte", "1 cookie", "2 fatias de bolo", "1 pão de coco", "1 pão de creme", "1 fruta da época", "4 pão de frios", "1 baguete parmesão", "2 fatias de queijo", "2 fatias de presunto", "1 pão de mel", "1 choco biscuit", "1 bis em barra"],
    includes: ["Caixa", "Balão personalizado", "3 fotos polaroid", "Cartãozinho personalizado"]
  },
  {
    id: 6,
    name: "Supreme 2",
    price: 195,
    items: 14,
    description: "Nossa opção mais premium com Coca-Cola de vidro",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b8ca15e28cbf0328efb847/a5ae3260d_image.png",
    popular: false,
    itemList: ["1 suco de laranja", "1 achocolatado", "1 coca (de vidro)", "1 cookie", "2 fatias de bolo", "1 pão de coco", "1 pão de creme", "1 fruta da época", "4 pão de frios", "1 baguete parmesão", "2 fatias de queijo", "2 fatias de presunto", "1 pão de mel", "1 barra de chocolate"],
    includes: ["Caixa", "Balão personalizado", "3 fotos polaroid", "Cartãozinho personalizado"]
  }
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleWhatsAppClick = (productName = '') => {
    const phoneNumber = "5513991243214"; // Número corrigido
    const message = productName 
      ? `Olá! Estou interessado na cesta ${productName}.`
      : `Olá! Gostaria de conhecer melhor as cestas da Valens Cestas. Podem me ajudar?`;
    
    // Detecta se é mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let whatsappUrl;
    if (isMobile) {
      // Para mobile usa o protocolo whatsapp://
      whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    } else {
      // Para desktop usa o web.whatsapp.com
      whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    }
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-50">
      <HeroSection onWhatsAppClick={handleWhatsAppClick} />
      
      <AboutSection />
      
      <ProductGrid 
        products={products} 
        onProductClick={setSelectedProduct}
        onWhatsAppClick={handleWhatsAppClick}
      />
      
      <CtaSection onWhatsAppClick={handleWhatsAppClick} />
      
      <Footer onWhatsAppClick={handleWhatsAppClick} />
    </div>
  );
}
