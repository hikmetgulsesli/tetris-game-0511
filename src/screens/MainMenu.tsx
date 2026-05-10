// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface MainMenuProps {}

export function MainMenu(props: MainMenuProps) {
  return (
    <>
      {/* Shared Component: SideNavBar */}
      <aside className="hidden md:flex flex-col h-screen fixed left-0 top-0 pt-16 bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant docked left-0 h-full w-64 z-50">
      {/* Header */}
      <div className="px-container-padding pb-grid-gutter border-b border-outline-variant mb-unit">
      <div className="flex items-center gap-element-gap">
      <img alt="Pro Player Icon" className="w-12 h-12 rounded-full border-2 border-outline-variant object-cover" data-alt="A sleek, highly stylized digital avatar portrait for a professional esports gamer. The portrait is set against a dark, tech-inspired background with subtle glowing blue circuitry patterns. The character wears a modern, minimalist dark grey gaming jacket. Lighting is dramatic, with a stark white key light and a vibrant primary blue rim light, creating a high-performance, intense mood suitable for a competitive corporate gaming environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2idTl9KGS5tohAwjdlalYbZCU0GSjJRZskbWWvYV4Y7wfHlQvMqYvijmzWED8oOuVCTQzZKWQODq7uNrZM8__M31pf82zv-0sJyk7t-cqXeSEYL4MqbsDvPs6fC0E2B9J85H7XX0_lH_6sIRdMENspkONdyL2i9vDfHvN-2khFaY8EtEw4OJfDic0fEYeZaakQLuFoEmo1j-f9C8wYAWyd1nkRdYAeIKzy6nM_VYtWQVUvv3MlKajNPlQSGT2FI4IN_Cix-g2XjTJ" />
      <div className="flex flex-col justify-center">
      <span className="font-headline-sm text-headline-sm text-primary">Pro League</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Rank: Grandmaster</span>
      </div>
      </div>
      </div>
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-unit">
      <ul className="flex flex-col gap-stack-tight px-unit">
      <li>
      <a className="flex items-center gap-element-gap px-element-gap py-3 rounded text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all duration-200 ease-in-out font-label-lg text-label-lg" href="#">
      <span className="material-symbols-outlined" data-icon="videogame_asset">videogame_asset</span>
                              Playfield
                          </a>
      </li>
      {/* Active Item */}
      <li>
      <a className="flex items-center gap-element-gap px-element-gap py-3 rounded bg-primary-container text-on-primary-container border-l-4 border-primary transition-all duration-200 ease-in-out font-label-lg text-label-lg" href="#">
      <span className="material-symbols-outlined" data-icon="menu" data-weight="fill">menu</span>
                              Main Menu
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-element-gap px-element-gap py-3 rounded text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all duration-200 ease-in-out font-label-lg text-label-lg" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
                              Settings
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-element-gap px-element-gap py-3 rounded text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all duration-200 ease-in-out font-label-lg text-label-lg" href="#">
      <span className="material-symbols-outlined" data-icon="help">help</span>
                              Help
                          </a>
      </li>
      </ul>
      </nav>
      {/* CTA */}
      <div className="p-container-padding border-t border-outline-variant">
      <button className="w-full bg-primary-container text-on-primary-container rounded flex items-center justify-center gap-2 p-3 font-label-lg text-label-lg hover:brightness-110 active:scale-95 transition-all outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-low shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
      <span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                      New Game
                  </button>
      </div>
      </aside>
      {/* Main Canvas */}
      <main className="flex-1 md:ml-64 relative bg-background flex flex-col items-center justify-center p-container-padding overflow-y-auto">
      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.05) 0%, transparent 70%)"}}></div>
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage: "linear-gradient(#32343d 1px, transparent 1px), linear-gradient(90deg, #32343d 1px, transparent 1px)", backgroundSize: "64px 64px"}}></div>
      {/* Central Layout */}
      <div className="w-full max-w-6xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
      {/* Left Column: Branding & Primary Actions */}
      <div className="lg:col-span-8 flex flex-col gap-grid-gutter">
      {/* Brand Header */}
      <div className="mb-8 pl-unit">
      <h1 className="font-score-display text-score-display text-primary uppercase tracking-tighter mb-2" style={{textShadow: "0 0 20px rgba(180, 197, 255, 0.2)"}}>
                              StackEngine Pro
                          </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                              High-performance terminal for competitive block puzzle optimization. Session active.
                          </p>
      </div>
      {/* Action Grid (Bento Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-element-gap">
      {/* Primary Action */}
      <button className="sm:col-span-2 group relative overflow-hidden bg-primary-container text-on-primary-container rounded-lg flex flex-col items-start justify-center p-container-padding hover:brightness-110 active:scale-[0.98] transition-all duration-200 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background border border-primary-fixed-dim/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
      <span className="material-symbols-outlined text-[32px] mb-unit" data-icon="play_arrow" data-weight="fill">play_arrow</span>
      <span className="font-headline-lg text-headline-lg mb-stack-tight">Start New Game</span>
      <span className="font-body-md text-body-md text-on-primary-container/80">Initialize a new ranked session</span>
      </button>
      {/* Secondary Actions */}
      <button className="bg-surface-container border border-outline-variant text-on-surface rounded flex flex-col items-start justify-center p-grid-gutter hover:bg-surface-variant hover:border-primary/50 active:scale-95 transition-all duration-200 group">
      <span className="material-symbols-outlined text-primary mb-unit group-hover:scale-110 transition-transform" data-icon="history">history</span>
      <span className="font-headline-sm text-headline-sm mb-stack-tight">Resume Session</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Last played: 2 hours ago</span>
      </button>
      <button className="bg-surface-container border border-outline-variant text-on-surface rounded flex flex-col items-start justify-center p-grid-gutter hover:bg-surface-variant hover:border-primary/50 active:scale-95 transition-all duration-200 group">
      <span className="material-symbols-outlined text-primary mb-unit group-hover:scale-110 transition-transform" data-icon="emoji_events">emoji_events</span>
      <span className="font-headline-sm text-headline-sm mb-stack-tight">Tournament Mode</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Join competitive brackets</span>
      </button>
      <button className="sm:col-span-2 bg-surface-container border border-outline-variant text-on-surface rounded flex items-center justify-between p-grid-gutter hover:bg-surface-variant hover:border-primary/50 active:scale-[0.98] transition-all duration-200 group">
      <div className="flex items-center gap-element-gap">
      <span className="material-symbols-outlined text-primary" data-icon="leaderboard">leaderboard</span>
      <span className="font-headline-sm text-headline-sm">View Leaderboard</span>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
      </button>
      </div>
      </div>
      {/* Right Column: Stats Panel */}
      <div className="lg:col-span-4 flex flex-col h-full">
      {/* HUD Panel */}
      <div className="bg-surface-container border border-outline-variant rounded flex flex-col h-full">
      <div className="p-grid-gutter border-b border-outline-variant bg-surface-variant/30">
      <h2 className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                  Last Played Stats
                              </h2>
      </div>
      <div className="p-container-padding flex flex-col gap-container-padding flex-1">
      {/* Score Module */}
      <div className="flex flex-col gap-stack-tight">
      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">High Score</span>
      <span className="font-score-display text-score-display text-on-surface tracking-tighter">1,245,900</span>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-grid-gutter">
      <div className="flex flex-col gap-stack-tight p-unit bg-surface-container-highest rounded border border-outline-variant/50">
      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Level</span>
      <span className="font-headline-lg text-headline-lg text-primary">42</span>
      </div>
      <div className="flex flex-col gap-stack-tight p-unit bg-surface-container-highest rounded border border-outline-variant/50">
      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Lines</span>
      <span className="font-headline-lg text-headline-lg text-primary">481</span>
      </div>
      </div>
      {/* Secondary Stats List */}
      <div className="mt-auto flex flex-col gap-unit">
      <div className="flex justify-between items-center py-2 border-b border-outline-variant">
      <span className="font-body-md text-body-md text-on-surface-variant">PPM (Pieces/Min)</span>
      <span className="font-headline-sm text-headline-sm text-on-surface">114</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-outline-variant">
      <span className="font-body-md text-body-md text-on-surface-variant">Tetris Rate</span>
      <span className="font-headline-sm text-headline-sm text-on-surface">68%</span>
      </div>
      <div className="flex justify-between items-center py-2">
      <span className="font-body-md text-body-md text-on-surface-variant">Session Time</span>
      <span className="font-headline-sm text-headline-sm text-on-surface">45:12</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
