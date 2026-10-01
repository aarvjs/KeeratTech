'use client';

import React from 'react';
import Image from 'next/image';
import { X, MapPin, Calendar, Building2 } from 'lucide-react';
import { ProjectItem } from '@/types';

interface LightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white hover:bg-black rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image */}
        <div className="relative w-full md:w-3/5 h-72 md:h-auto min-h-[350px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
        </div>

        {/* Content */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between text-white">
          <div>
            <span className="inline-block px-3 py-1 bg-[#E3261E]/20 text-[#E3261E] border border-[#E3261E]/30 text-xs font-bold uppercase rounded-full mb-3">
              {project.category}
            </span>
            <h3 className="text-2xl font-extrabold text-white leading-tight mb-4">
              {project.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-white/10 text-sm">
              <div className="flex items-center text-slate-300 gap-2">
                <MapPin className="w-4 h-4 text-[#E3261E]" />
                <span>Location: <strong className="text-white">{project.location}</strong></span>
              </div>
              <div className="flex items-center text-slate-300 gap-2">
                <Calendar className="w-4 h-4 text-[#E3261E]" />
                <span>Completion: <strong className="text-white">{project.year}</strong></span>
              </div>
              <div className="flex items-center text-slate-300 gap-2">
                <Building2 className="w-4 h-4 text-[#E3261E]" />
                <span>Scope: <strong className="text-white">Turnkey Fixing & Anchor Supply</strong></span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="w-full bg-[#E3261E] hover:bg-[#B81D17] text-white font-bold py-3 rounded-lg text-sm transition-colors"
            >
              Close Showcase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
