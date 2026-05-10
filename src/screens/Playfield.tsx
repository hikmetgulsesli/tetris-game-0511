// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Playfield
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface PlayfieldProps {}

export function Playfield(props: PlayfieldProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface-container border-b border-outline-variant flex justify-between items-center px-grid-gutter h-16 shadow-sm">
      <div className="font-headline-md text-headline-md font-bold text-primary">StackEngine Pro</div>
      <div className="hidden md:flex gap-8 h-full items-end">
      <a className="text-primary border-b-2 border-primary pb-1 font-label-lg text-label-lg mb-4 hover:text-on-surface transition-colors duration-200" href="#">Arena</a>
      <a className="text-on-surface-variant pb-[6px] font-label-lg text-label-lg mb-4 hover:text-on-surface transition-colors duration-200" href="#">Leaderboard</a>
      <a className="text-on-surface-variant pb-[6px] font-label-lg text-label-lg mb-4 hover:text-on-surface transition-colors duration-200" href="#">Tournaments</a>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-on-surface-variant hover:text-on-surface transition-colors duration-200 active:scale-95 transition-transform flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
      </button>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors duration-200 active:scale-95 transition-transform flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>notifications</span>
      </button>
      <div className="w-8 h-8 rounded-full border border-outline-variant overflow-hidden shrink-0">
      <img alt="User Profile" className="w-full h-full object-cover" data-alt="A sleek, modern avatar portrait of a professional gamer. The lighting is high-contrast and slightly dramatic, featuring cool blue edge lighting that reflects the corporate modern aesthetic of the StackEngine platform. The subject is looking directly forward with a focused, intense expression, set against a completely dark slate background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBtseLp-Fl5VmMLwqria-SP3C9zNxbBmYCaWKgBSp-JkupHDiLDv_nseNVbDfqsSHNFJXInDRu_RcjbFk-Hh0MFcDKcrg9O1NP3CmaWPDg77uqA_Y6GsKW6c4OsHXxFlIdp6exwOB7cII5fp3K6cot0z1elwOA9vZ2XTTY2SF8e9s6eX5441VuQpsg_ORkCSOzD4AO-n9h6x2lr60XKVU7uy5DwarfJTQKcmf8JSf8XGncszKIpplQjHRTmoiXBm3eZdOJTt2o0z8c" />
      </div>
      </div>
      </nav>
      <div className="flex flex-1 pt-16 h-full">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 pt-16 h-full w-64 bg-surface-container-low border-r border-outline-variant z-40 transition-all duration-200 ease-in-out">
      <div className="p-6 border-b border-outline-variant flex flex-col items-center gap-4">
      <div className="w-20 h-20 rounded-full border-2 border-primary overflow-hidden shadow-lg p-1 bg-surface-container">
      <img alt="Pro Player Icon" className="w-full h-full object-cover rounded-full" data-alt="A stylized, close-up portrait of a high-ranking player in a dark, atmospheric setting. Subtle neon blue highlights contour the silhouette, matching the primary brand color. The overall vibe is highly professional, resembling a corporate esports roster photo rather than a casual snapshot, with deep blacks and sharp focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDWgIqhbiHUBCUuq--gc8nYYaVU_Xen5WYKzEyQUnGFnVMpfc4tBF5-SXz5oEPv-8vs7e-a4Y0Kd4sjqVUoaVRexDRb0ufAbmdfbYQ_GQdPu42g06Q1Eg9jdNKrRtgqH-833mUrB47p-uzhInvroJYT38ZinpYAfEl0txER50JzrHv2o6a2QkloX_YEzdrOu0fqTlPHiTULhvaJY7BMixMlIG9Sygk0wDTU2UD2vDbb7A-ovrE9X4TXEPCAliXGSkexrWllmbZpONy" />
      </div>
      <div className="text-center">
      <h2 className="font-headline-sm text-headline-sm text-primary">Pro League</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Rank: Grandmaster</p>
      </div>
      </div>
      <nav className="flex-1 flex flex-col py-4 gap-1">
      <a className="flex items-center gap-3 px-6 py-3 bg-primary-container text-on-primary-container border-l-4 border-primary font-label-lg text-label-lg transition-colors" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>videogame_asset</span>
                          Playfield
                      </a>
      <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface border-l-4 border-transparent font-label-lg text-label-lg transition-colors" href="#">
      <span className="material-symbols-outlined">menu</span>
                          Main Menu
                      </a>
      <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface border-l-4 border-transparent font-label-lg text-label-lg transition-colors" href="#">
      <span className="material-symbols-outlined">settings</span>
                          Settings
                      </a>
      <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface border-l-4 border-transparent font-label-lg text-label-lg transition-colors" href="#">
      <span className="material-symbols-outlined">help</span>
                          Help
                      </a>
      </nav>
      <div className="p-6 border-t border-outline-variant">
      <button className="w-full bg-primary-container text-on-primary-container py-3 rounded font-label-lg text-label-lg hover:brightness-110 active:scale-95 transition-all shadow-md">
                          New Game
                      </button>
      </div>
      </aside>
      {/* Main Content (Playfield) */}
      <main className="flex-1 md:ml-64 bg-background p-container-padding flex items-center justify-center overflow-y-auto">
      <div className="flex flex-col lg:flex-row gap-grid-gutter w-full max-w-5xl justify-center items-start">
      {/* Left Panel: Hold */}
      <div className="hidden lg:flex flex-col gap-element-gap w-32 shrink-0 pt-8">
      <div className="bg-surface-container border border-outline-variant rounded-lg p-4 flex flex-col items-start shadow-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-4">Hold</span>
      <div className="w-full h-24 bg-surface-container-lowest rounded border border-outline flex items-center justify-center relative">
      {/* Ghost Piece Representation (I-piece) */}
      <div className="flex flex-col gap-[1px] opacity-40">
      <div className="w-[18px] h-[18px] bg-secondary rounded-[3px] border border-secondary-container"></div>
      <div className="w-[18px] h-[18px] bg-secondary rounded-[3px] border border-secondary-container"></div>
      <div className="w-[18px] h-[18px] bg-secondary rounded-[3px] border border-secondary-container"></div>
      <div className="w-[18px] h-[18px] bg-secondary rounded-[3px] border border-secondary-container"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Center: Matrix */}
      <div className="flex flex-col items-center">
      <div className="bg-surface-container-highest border-2 border-outline-variant rounded-lg p-2 shadow-2xl relative">
      {/* Subtle ambient glow behind the board */}
      <div className="absolute -inset-4 bg-primary/5 blur-xl rounded-full pointer-events-none -z-10"></div>
      {/* 10x20 Grid */}
      <div className="w-[240px] h-[480px] bg-surface-dim relative overflow-hidden matrix-grid rounded border border-outline/30">
      {/* Falling Piece (T-Piece) */}
      <div className="absolute top-[96px] left-[72px] flex flex-col gap-[1px]">
      <div className="flex gap-[1px] ml-[25px]">
      <div className="w-[23px] h-[23px] bg-primary rounded-[4px] mino-bevel"></div>
      </div>
      <div className="flex gap-[1px]">
      <div className="w-[23px] h-[23px] bg-primary rounded-[4px] mino-bevel"></div>
      <div className="w-[23px] h-[23px] bg-primary rounded-[4px] mino-bevel shadow-[0_4px_12px_rgba(37,99,235,0.4)] relative z-10"></div>
      <div className="w-[23px] h-[23px] bg-primary rounded-[4px] mino-bevel"></div>
      </div>
      </div>
      {/* Ghost Preview */}
      <div className="absolute bottom-[24px] left-[72px] flex flex-col gap-[1px] opacity-20">
      <div className="flex gap-[1px] ml-[25px]">
      <div className="w-[23px] h-[23px] border-2 border-primary rounded-[4px]"></div>
      </div>
      <div className="flex gap-[1px]">
      <div className="w-[23px] h-[23px] border-2 border-primary rounded-[4px]"></div>
      <div className="w-[23px] h-[23px] border-2 border-primary rounded-[4px]"></div>
      <div className="w-[23px] h-[23px] border-2 border-primary rounded-[4px]"></div>
      </div>
      </div>
      {/* Landed Stack (Assorted colors) */}
      <div className="absolute bottom-0 left-0 w-full">
      {/* Row 1 */}
      <div className="flex gap-[1px] absolute bottom-0 left-0">
      <div className="w-[23px] h-[23px] bg-tertiary rounded-[4px] mino-bevel"></div>
      <div className="w-[23px] h-[23px] bg-tertiary rounded-[4px] mino-bevel"></div>
      <div className="w-[23px] h-[23px] bg-error rounded-[4px] mino-bevel ml-[24px]"></div>
      <div className="w-[23px] h-[23px] bg-error rounded-[4px] mino-bevel"></div>
      <div className="w-[23px] h-[23px] bg-secondary rounded-[4px] mino-bevel ml-[48px]"></div>
      <div className="w-[23px] h-[23px] bg-secondary rounded-[4px] mino-bevel"></div>
      </div>
      {/* Row 2 */}
      <div className="flex gap-[1px] absolute bottom-[24px] left-0">
      <div className="w-[23px] h-[23px] bg-tertiary rounded-[4px] mino-bevel"></div>
      <div className="w-[23px] h-[23px] bg-tertiary rounded-[4px] mino-bevel"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Panel: Stats & Next */}
      <div className="flex flex-col gap-element-gap w-full lg:w-56 shrink-0 pt-8">
      {/* Score Card (Hero) */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-5 flex flex-col items-start shadow-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Current Score</span>
      <span className="font-score-display text-score-display text-on-surface tracking-tighter">14,250</span>
      </div>
      <div className="flex gap-element-gap w-full">
      {/* Level */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-4 flex flex-col flex-1 shadow-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Level</span>
      <span className="font-headline-lg text-headline-lg text-primary">08</span>
      </div>
      {/* Lines */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-4 flex flex-col flex-1 shadow-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Lines</span>
      <span className="font-headline-lg text-headline-lg text-secondary">42</span>
      </div>
      </div>
      {/* Next Piece */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-4 flex flex-col items-start shadow-sm mt-2">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-4">Next Piece</span>
      <div className="w-full h-24 bg-surface-container-lowest rounded border border-outline flex items-center justify-center">
      {/* Z-Piece Representation */}
      <div className="flex flex-col gap-[1px]">
      <div className="flex gap-[1px]">
      <div className="w-[18px] h-[18px] bg-error rounded-[3px] mino-bevel"></div>
      <div className="w-[18px] h-[18px] bg-error rounded-[3px] mino-bevel"></div>
      </div>
      <div className="flex gap-[1px] ml-[19px]">
      <div className="w-[18px] h-[18px] bg-error rounded-[3px] mino-bevel"></div>
      <div className="w-[18px] h-[18px] bg-error rounded-[3px] mino-bevel"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Controls */}
      <div className="flex flex-col gap-3 mt-6">
      <button className="w-full bg-primary-container text-on-primary-container font-label-lg text-label-lg py-3 rounded-lg shadow-[0_2px_0_rgba(0,0,0,0.5)] active:translate-y-[2px] active:shadow-none hover:brightness-110 transition-all flex items-center justify-center gap-2">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>pause</span>
                                  Pause
                              </button>
      <div className="flex gap-3">
      <button className="flex-1 border border-outline-variant text-on-surface font-label-lg text-label-lg py-2.5 rounded-lg hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-sm">restart_alt</span>
                                      Reset
                                  </button>
      <button className="flex-1 border border-outline-variant text-on-surface font-label-lg text-label-lg py-2.5 rounded-lg hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
                                      Menu
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
