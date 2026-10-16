import React from 'react';
import { clients } from '@/data/content';

export const Clients: React.FC = () => {
  return (
    <section id="clientes" className="py-12 border-y border-line bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Label lateral */}
          <div className="md:col-span-3">
            <span className="text-[11px] font-bold tracking-[0.2em] text-muted uppercase block leading-relaxed">
              Experiência prática ao lado de marcas como
            </span>
          </div>

          {/* Marcas clientes com estética tipográfica editorial */}
          <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center sm:justify-items-start">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 hover:scale-105"
                title={`Cliente atendido: ${client.name}`}
              >
                <span
                  className={`text-2xl sm:text-3xl text-fg/80 group-hover:text-fg transition-colors duration-200 ${client.wordmark}`}
                >
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
