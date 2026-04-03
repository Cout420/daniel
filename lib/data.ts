
import { ImagePlaceholder, SectorData } from '../types';

export const placeholderImages: ImagePlaceholder[] = [
  { id: 'img-hero-steel', imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop', description: 'Steel Plant Interior' },
  { id: 'img-gallery-1', imageUrl: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=600&auto=format&fit=crop', description: 'Worker welding' },
  { id: 'img-gallery-2', imageUrl: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=600&auto=format&fit=crop', description: 'Heavy Machinery' },
  { id: 'img-gallery-3', imageUrl: 'https://images.unsplash.com/photo-1621905251189-fc015e8c4837?q=80&w=600&auto=format&fit=crop', description: 'Sparks flying' },
  { id: 'img-gallery-4', imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop', description: 'Control room' },
  { id: 'img-hero-naval', imageUrl: '/media/5AsJUxh.png', description: 'Shipyard' },
  { id: 'img-tech-rollers', imageUrl: 'https://images.unsplash.com/photo-1565035010268-a3816f98589a?q=80&w=600&auto=format&fit=crop', description: 'Precision Rollers' },
  { id: 'img-hero-mining', imageUrl: '/media/Dk4icbD.png', description: 'Mining Excavator' },
  { id: 'img-naval-detail-1', imageUrl: 'https://images.unsplash.com/photo-1599587440406-89b5336e78db?q=80&w=600&auto=format&fit=crop', description: 'Propeller' },
  { id: 'img-naval-detail-2', imageUrl: 'https://images.unsplash.com/photo-1569263979104-565b63418962?q=80&w=600&auto=format&fit=crop', description: 'Cargo Ship' },
  { id: 'img-mining-detail-1', imageUrl: 'https://images.unsplash.com/photo-1518386427320-b4beaf72eb04?q=80&w=600&auto=format&fit=crop', description: 'Coal' },
  { id: 'img-mining-detail-2', imageUrl: 'https://images.unsplash.com/photo-1599939571322-792a326991f2?q=80&w=600&auto=format&fit=crop', description: 'Excavation' },
  { id: 'img-hero-chem', imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop', description: 'Chemical Plant' },
  { id: 'img-hero-mech', imageUrl: 'https://images.unsplash.com/photo-1581093458791-9f302e6d8359?q=80&w=1200&auto=format&fit=crop', description: 'Mechanical Engineering' },
  { id: 'img-hero-storage', imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop', description: 'Warehouse Storage' },
];

export const sectorsData: SectorData[] = [
  {
    id: 'sec-1',
    slug: 'siderurgia',
    title: 'Siderurgia',
    description: 'Soluções completas para laminação a quente e a frio, garantindo eficiência máxima e durabilidade extrema em ambientes hostis.',
    heroImageId: 'img-hero-steel'
  },
  {
    id: 'sec-2',
    slug: 'naval',
    title: 'Soluções para Área Naval',
    description: 'Engenharia de alta performance para a construção e manutenção de embarcações e plataformas de petróleo com resistência à corrosão marinha.',
    heroImageId: 'img-hero-naval'
  },
  {
    id: 'sec-3',
    slug: 'mineracao',
    title: 'Mineração',
    description: 'Equipamentos robustos e peças de desgaste para extração mineral em condições extremas de abrasão e impacto.',
    heroImageId: 'img-hero-mining'
  }
];

export const getImageUrl = (id: string) => {
  return placeholderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/600/400';
};
