// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SettingsProps {}

export function Settings(props: SettingsProps) {
  return (
    <>
      {/* Mobile Header (Visible only on small screens) */}
      <header className="md:hidden flex justify-between items-center px-container-padding h-16 bg-surface-container border-b border-outline-variant sticky top-0 z-50">
      <h1 className="font-headline-sm text-headline-sm text-primary font-bold">StackEngine Pro</h1>
      <button className="text-on-surface-variant hover:text-primary transition-colors duration-200">
      <span className="material-symbols-outlined">menu</span>
      </button>
      </header>
      {/* SideNavBar (Desktop Shell) */}
      <nav className="hidden md:flex flex-col h-screen fixed left-0 top-0 pt-16 w-64 bg-surface-container-low border-r border-outline-variant z-40">
      {/* Header / Profile Area */}
      <div className="px-container-padding pb-6 mb-4 border-b border-outline-variant flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-surface-variant border-2 border-primary-container flex items-center justify-center mb-3 overflow-hidden shadow-[0_0_12px_rgba(37,99,235,0.2)]">
      <span className="material-symbols-outlined text-headline-lg text-primary">person</span>
      </div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Pro League</h2>
      <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-1">Rank: Grandmaster</p>
      <button className="mt-4 w-full bg-primary-container text-on-primary-container font-label-lg text-label-lg py-2 rounded-lg hover:bg-inverse-primary transition-all duration-200 ease-in-out active:scale-95 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      New Game
                  </button>
      </div>
      {/* Navigation Links */}
      <ul className="flex flex-col gap-1 px-3 flex-1">
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all duration-200 ease-in-out font-label-lg text-label-lg group" href="#">
      <span className="material-symbols-outlined group-hover:text-primary transition-colors">videogame_asset</span>
                          Playfield
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all duration-200 ease-in-out font-label-lg text-label-lg group" href="#">
      <span className="material-symbols-outlined group-hover:text-primary transition-colors">menu</span>
                          Main Menu
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded bg-primary-container text-on-primary-container border-l-4 border-primary transition-all duration-200 ease-in-out font-label-lg text-label-lg" href="#">
      <span className="material-symbols-outlined">settings</span>
                          Settings
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all duration-200 ease-in-out font-label-lg text-label-lg group" href="#">
      <span className="material-symbols-outlined group-hover:text-primary transition-colors">help</span>
                          Help
                      </a>
      </li>
      </ul>
      </nav>
      {/* Main Content Canvas */}
      <main className="md:pl-64 flex flex-col h-screen overflow-y-auto w-full">
      <div className="px-container-padding py-8 max-w-6xl mx-auto w-full">
      <header className="mb-8">
      <h1 className="font-headline-lg text-headline-lg text-on-surface">Configuration Panel</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">Tune your environment for maximum performance. Settings are saved locally.</p>
      </header>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
      {/* AUDIO SETTINGS (Col Span 5) */}
      <section className="lg:col-span-5 bg-surface-container border border-outline-variant rounded-lg p-container-padding flex flex-col gap-element-gap relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
      <div className="flex items-center gap-3 mb-2">
      <span className="material-symbols-outlined text-primary">volume_up</span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Audio</h2>
      </div>
      <div className="flex flex-col gap-stack-tight">
      <div className="flex justify-between items-center">
      <label className="font-body-md text-body-md text-on-surface-variant">Master Volume</label>
      <span className="font-label-sm text-label-sm text-primary">85%</span>
      </div>
      <input className="mt-1" max="100" min="0" type="range" value="85" />
      </div>
      <div className="flex flex-col gap-stack-tight mt-4">
      <div className="flex justify-between items-center">
      <label className="font-body-md text-body-md text-on-surface-variant">SFX Volume</label>
      <span className="font-label-sm text-label-sm text-primary">100%</span>
      </div>
      <input className="mt-1" max="100" min="0" type="range" value="100" />
      </div>
      <div className="flex flex-col gap-stack-tight mt-4">
      <div className="flex justify-between items-center">
      <label className="font-body-md text-body-md text-on-surface-variant">Music</label>
      <span className="font-label-sm text-label-sm text-primary">30%</span>
      </div>
      <input className="mt-1" max="100" min="0" type="range" value="30" />
      </div>
      </section>
      {/* DIFFICULTY SETTINGS (Col Span 7) */}
      <section className="lg:col-span-7 bg-surface-container border border-outline-variant rounded-lg p-container-padding flex flex-col gap-element-gap relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
      <div className="flex items-center gap-3 mb-2">
      <span className="material-symbols-outlined text-secondary">tune</span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Difficulty</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-grid-gutter mt-2">
      {/* Starting Level */}
      <div className="flex flex-col gap-stack-tight">
      <label className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest">Starting Level</label>
      <div className="relative mt-1">
      <select className="w-full bg-surface-variant border border-outline-variant rounded text-on-surface font-body-md text-body-md py-2 px-3 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
      <option value="1">Level 1 (Novice)</option>
      <option value="5">Level 5</option>
      <option value="10">Level 10 (Pro)</option>
      <option selected={true} value="15">Level 15 (Grandmaster)</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
      </div>
      </div>
      {/* Gravity Multiplier */}
      <div className="flex flex-col gap-stack-tight">
      <label className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest">Gravity Multiplier</label>
      <div className="relative mt-1 flex items-center bg-surface-variant border border-outline-variant rounded focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors overflow-hidden">
      <button className="px-3 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-bright transition-colors">
      <span className="material-symbols-outlined text-sm">remove</span>
      </button>
      <input className="w-full bg-transparent text-center text-on-surface font-body-md text-body-md border-none focus:ring-0" readOnly={true} type="text" value="1.5x" />
      <button className="px-3 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-bright transition-colors">
      <span className="material-symbols-outlined text-sm">add</span>
      </button>
      </div>
      </div>
      {/* Ghost Piece Toggle */}
      <div className="sm:col-span-2 flex items-center justify-between bg-surface-variant rounded p-3 border border-outline-variant mt-2">
      <div>
      <h3 className="font-body-md text-body-md text-on-surface">Enable Ghost Piece</h3>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Show a preview of where the piece will land.</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-bright peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
      </label>
      </div>
      </div>
      </section>
      {/* CONTROLS SETTINGS (Col Span 12) */}
      <section className="lg:col-span-12 bg-surface-container border border-outline-variant rounded-lg p-container-padding flex flex-col gap-element-gap relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-surface-tint"></div>
      <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-surface-tint">keyboard</span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Controls</h2>
      </div>
      <button className="font-label-sm text-label-sm text-primary hover:text-primary-fixed transition-colors underline underline-offset-2">Reset to Default</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-2">
      {/* Keybind Item */}
      <div className="bg-surface-variant border border-outline-variant rounded p-3 flex justify-between items-center group hover:border-primary-container transition-colors cursor-pointer">
      <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Move Left</span>
      <div className="bg-surface-container-highest border border-outline text-primary font-label-lg text-label-lg px-2 py-1 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">Arrow Left</div>
      </div>
      <div className="bg-surface-variant border border-outline-variant rounded p-3 flex justify-between items-center group hover:border-primary-container transition-colors cursor-pointer">
      <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Move Right</span>
      <div className="bg-surface-container-highest border border-outline text-primary font-label-lg text-label-lg px-2 py-1 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">Arrow Right</div>
      </div>
      <div className="bg-surface-variant border border-outline-variant rounded p-3 flex justify-between items-center group hover:border-primary-container transition-colors cursor-pointer">
      <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Soft Drop</span>
      <div className="bg-surface-container-highest border border-outline text-primary font-label-lg text-label-lg px-2 py-1 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">Arrow Down</div>
      </div>
      <div className="bg-surface-variant border border-outline-variant rounded p-3 flex justify-between items-center group hover:border-primary-container transition-colors cursor-pointer">
      <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Hard Drop</span>
      <div className="bg-surface-container-highest border border-outline text-primary font-label-lg text-label-lg px-2 py-1 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">Space</div>
      </div>
      <div className="bg-surface-variant border border-outline-variant rounded p-3 flex justify-between items-center group hover:border-primary-container transition-colors cursor-pointer">
      <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Rotate CW</span>
      <div className="bg-surface-container-highest border border-outline text-primary font-label-lg text-label-lg px-2 py-1 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">X</div>
      </div>
      <div className="bg-surface-variant border border-outline-variant rounded p-3 flex justify-between items-center group hover:border-primary-container transition-colors cursor-pointer">
      <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Rotate CCW</span>
      <div className="bg-surface-container-highest border border-outline text-primary font-label-lg text-label-lg px-2 py-1 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">Z</div>
      </div>
      <div className="bg-surface-variant border border-outline-variant rounded p-3 flex justify-between items-center group hover:border-primary-container transition-colors cursor-pointer">
      <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Hold Piece</span>
      <div className="bg-surface-container-highest border border-outline text-primary font-label-lg text-label-lg px-2 py-1 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">C</div>
      </div>
      <div className="bg-surface-variant border border-outline-variant rounded p-3 flex justify-between items-center group hover:border-primary-container transition-colors cursor-pointer">
      <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Pause</span>
      <div className="bg-surface-container-highest border border-outline text-primary font-label-lg text-label-lg px-2 py-1 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">Esc</div>
      </div>
      </div>
      </section>
      {/* DANGER ZONE (Col Span 12) */}
      <section className="lg:col-span-12 bg-[#1a0e10] border border-error-container rounded-lg p-container-padding flex flex-col sm:flex-row sm:items-center justify-between gap-element-gap mt-4">
      <div>
      <h2 className="font-headline-sm text-headline-sm text-error">Danger Zone</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Permanently delete all local high scores, replays, and configuration data. This action cannot be undone.</p>
      </div>
      <button className="whitespace-nowrap px-4 py-2 bg-transparent border border-error text-error font-label-lg text-label-lg rounded-lg hover:bg-error-container hover:text-on-error-container transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-background">
                              Clear Local Data
                          </button>
      </section>
      </div>
      {/* Bottom spacing for scroll clearance */}
      <div className="h-16 w-full"></div>
      </div>
      </main>
    </>
  );
}
