'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, MapPin } from 'lucide-react';
import { PROJECTS } from '@/constants/data';
import { ProjectItem } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LightboxModal } from '@/components/ui/LightboxModal';

export const ProjectGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Commercial High-Rise', 'Infrastructure', 'Commercial'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-[#F8FAF8] text-[#111111] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Project Showcase"
          title="Landmark Infrastructure Installations"
          subtitle="A showcase of mega construction projects empowered by Keerat Electech mechanical wedge anchors and chemical doweling."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0B8F4D] text-white shadow-xs'
                  : 'bg-white text-[#111111] hover:bg-[#F8FAF8] border border-[#E5E7EB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="relative rounded-2xl overflow-hidden group cursor-pointer border border-[#E5E7EB] shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col"
            >
              <div className="relative w-full h-64 overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute top-3 left-3 bg-white/95 text-[#111111] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#E5E7EB]">
                  {project.category}
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#111111] flex items-center justify-center shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base font-bold text-[#111111] group-hover:text-[#0B8F4D] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#666666] mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#0B8F4D]" />
                    <span>{project.location} • {project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
