import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CpcCubeProps {
  activePillar?: 'atrair' | 'converter' | 'relacionar' | null;
  onSelectPillar?: (pillar: 'atrair' | 'converter' | 'relacionar') => void;
  interactive?: boolean;
  className?: string;
}

export const CpcCube: React.FC<CpcCubeProps> = ({
  activePillar,
  onSelectPillar,
  interactive = true,
  className = '',
}) => {
  const [hoveredFace, setHoveredFace] = useState<'coral' | 'yellow' | 'teal' | null>(null);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Luz radial de fundo */}
      <div className="absolute inset-0 -m-10 rounded-full bg-gradient-to-tr from-brand-coral/15 via-brand-yellow/15 to-brand-teal/15 blur-3xl pointer-events-none opacity-80" />

      {/* Órbitas animadas com satélites luminosos nas cores da marca CPC */}
      {/* Órbita 1: Externa (Amarelo / Conversão) */}
      <motion.div
        className="absolute w-[340px] h-[340px] md:w-[430px] md:h-[430px] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full border border-line/60 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <span className="absolute w-4 h-4 rounded-full bg-brand-yellow/30 animate-ping" />
            <span className="w-3 h-3 rounded-full bg-brand-yellow shadow-[0_0_14px_#ffbd2d]" />
          </div>
        </div>
      </motion.div>

      {/* Órbita 2: Intermediária Tracejada (Teal / Relacionamento) */}
      <motion.div
        className="absolute w-[275px] h-[275px] md:w-[345px] md:h-[345px] pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full border border-dashed border-line/50 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-teal shadow-[0_0_12px_#00b9bb]" />
          </div>
        </div>
      </motion.div>

      {/* Órbita 3: Interna Fina (Coral / Atração) */}
      <motion.div
        className="absolute w-[210px] h-[210px] md:w-[265px] md:h-[265px] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full border border-brand-coral/25 relative">
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-brand-coral shadow-[0_0_10px_#f24764]" />
          </div>
        </div>
      </motion.div>

      {/* SVG Isométrico do Cubo CPC */}
      <motion.div
        className="relative z-10 w-[240px] h-[260px] md:w-[290px] md:h-[320px] drop-shadow-[0_24px_38px_rgba(0,0,0,0.35)]"
        animate={{
          y: [-4, 4, -4],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          viewBox="0 0 200 220"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradientes refinados para dar volume e aspecto editorial de luxo */}
            <linearGradient id="grad-coral" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff5a77" />
              <stop offset="100%" stopColor="#d83652" />
            </linearGradient>
            <linearGradient id="grad-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffcd48" />
              <stop offset="100%" stopColor="#e8a816" />
            </linearGradient>
            <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#18d1d3" />
              <stop offset="100%" stopColor="#009ea0" />
            </linearGradient>

            <filter id="cube-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Sombra de apoio no chão */}
          <ellipse cx="100" cy="208" rx="65" ry="12" fill="rgba(0,0,0,0.22)" />

          {/* Face 1: Amarela (Superior / Converter) */}
          <g
            className={interactive ? 'cursor-pointer transition-all duration-200' : ''}
            onMouseEnter={() => setHoveredFace('yellow')}
            onMouseLeave={() => setHoveredFace(null)}
            onClick={() => onSelectPillar?.('converter')}
          >
            <polygon
              points="100,12 178,57 178,142 100,97"
              fill="url(#grad-yellow)"
              stroke="#131615"
              strokeWidth="4"
              strokeLinejoin="round"
              className={`transition-all duration-200 ${
                activePillar === 'converter' || hoveredFace === 'yellow'
                  ? 'brightness-110 drop-shadow-[0_0_12px_rgba(255,189,45,0.7)]'
                  : 'hover:brightness-105'
              }`}
            />
          </g>

          {/* Face 2: Coral (Esquerda / Atrair) */}
          <g
            className={interactive ? 'cursor-pointer transition-all duration-200' : ''}
            onMouseEnter={() => setHoveredFace('coral')}
            onMouseLeave={() => setHoveredFace(null)}
            onClick={() => onSelectPillar?.('atrair')}
          >
            <polygon
              points="100,12 22,57 22,142 100,97"
              fill="url(#grad-coral)"
              stroke="#131615"
              strokeWidth="4"
              strokeLinejoin="round"
              className={`transition-all duration-200 ${
                activePillar === 'atrair' || hoveredFace === 'coral'
                  ? 'brightness-110 drop-shadow-[0_0_12px_rgba(242,71,100,0.7)]'
                  : 'hover:brightness-105'
              }`}
            />
          </g>

          {/* Face 3: Teal (Inferior / Relacionar) */}
          <g
            className={interactive ? 'cursor-pointer transition-all duration-200' : ''}
            onMouseEnter={() => setHoveredFace('teal')}
            onMouseLeave={() => setHoveredFace(null)}
            onClick={() => onSelectPillar?.('relacionar')}
          >
            <polygon
              points="100,97 178,142 100,187 22,142"
              fill="url(#grad-teal)"
              stroke="#131615"
              strokeWidth="4"
              strokeLinejoin="round"
              className={`transition-all duration-200 ${
                activePillar === 'relacionar' || hoveredFace === 'teal'
                  ? 'brightness-110 drop-shadow-[0_0_12px_rgba(0,185,187,0.7)]'
                  : 'hover:brightness-105'
              }`}
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};
