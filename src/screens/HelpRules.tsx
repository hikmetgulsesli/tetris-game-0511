// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Help & Rules
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HelpRulesProps {}

export function HelpRules(props: HelpRulesProps) {
  return (
    <>
      {/* Mobile Top Navigation (md:hidden) */}
      <nav className="md:hidden bg-surface-container dark:bg-surface-container flex justify-between items-center px-grid-gutter w-full h-16 fixed top-0 left-0 z-50">
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">
                  StackEngine Pro
              </div>
      <div className="flex gap-element-gap">
      <button className="text-primary dark:text-primary hover:text-on-surface transition-colors duration-200 active:scale-95 transition-transform flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      <button className="text-primary dark:text-primary hover:text-on-surface transition-colors duration-200 active:scale-95 transition-transform flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      </div>
      </nav>
      {/* Desktop Side Navigation (hidden md:flex) */}
      <aside className="hidden md:flex flex-col h-screen fixed left-0 top-0 pt-16 bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant docked left-0 h-full w-64 z-40">
      {/* Header / Player Info */}
      <div className="px-container-padding pb-container-padding flex flex-col gap-element-gap border-b border-outline-variant">
      <div className="flex items-center gap-element-gap">
      <div className="w-12 h-12 rounded-full bg-surface-container-highest border border-outline flex items-center justify-center overflow-hidden">
      <img alt="Pro Player Icon" className="w-full h-full object-cover" data-alt="A highly detailed close-up portrait of a professional esports competitor illuminated by the soft, cool blue glow of a computer monitor in a dark room. The mood is intense and focused, embodying a high-performance gaming environment. The subject wears a sleek, modern headset. The image features a corporate modern aesthetic with deep shadows and sharp, precise lighting, reflecting a serious, analytical tone." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoekLuWH04Hm9-QmWIUHi0f-pt4qVK6EtcmOhxfgUJpYfbCRsN6vbQ_Q_YUqR1YGdlmCEmj8tAmoxXej6yY8tu7ZKX6HsV3uV156DdaBPmwfla9Ojy3jzXSFxzxVORu0whGoTL1Ke9CnKzkPOJ17supAgq9ZVYPy_imliFWyOjuGdqV-apQvFBXH0BayfTcmjyNoivr9U1WAhIVQnHBMGgk_zSJt_uBptsaLYRwFnR3KuK0a23PV0r3IQhET-uNySz2RP9BiTr5tVy" />
      </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm text-primary">Pro League</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Rank: Grandmaster</span>
      </div>
      </div>
      <button className="w-full bg-primary-container text-on-primary-container font-label-lg text-label-lg rounded-DEFAULT py-2 px-4 hover:bg-inverse-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background active:scale-95">
                      New Game
                  </button>
      </div>
      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-grid-gutter flex flex-col">
      <a className="flex items-center gap-grid-gutter px-container-padding py-3 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all duration-200 ease-in-out" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="videogame_asset">videogame_asset</span>
                      Playfield
                  </a>
      <a className="flex items-center gap-grid-gutter px-container-padding py-3 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all duration-200 ease-in-out" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="menu">menu</span>
                      Main Menu
                  </a>
      <a className="flex items-center gap-grid-gutter px-container-padding py-3 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all duration-200 ease-in-out" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
                      Settings
                  </a>
      {/* Active Tab */}
      <a className="flex items-center gap-grid-gutter px-container-padding py-3 font-label-lg text-label-lg bg-primary-container text-on-primary-container border-l-4 border-primary transition-all duration-200 ease-in-out" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="help" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>help</span>
                      Help
                  </a>
      </nav>
      </aside>
      {/* Main Content Canvas */}
      <main className="flex-1 h-full overflow-y-auto w-full md:ml-64 pt-20 md:pt-0 p-container-padding">
      <div className="max-w-[1200px] mx-auto md:py-container-padding flex flex-col gap-container-padding">
      <header className="flex flex-col gap-stack-tight border-b border-outline-variant pb-grid-gutter">
      <h1 className="font-headline-lg text-headline-lg text-on-surface">Help &amp; Documentation</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">System manual, controls, and tactical execution guides.</p>
      </header>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter auto-rows-min">
      {/* Rotation Diagram Card (Spans wide) */}
      <section className="col-span-1 md:col-span-8 bg-surface-container-low border border-outline-variant rounded-lg p-grid-gutter flex flex-col relative overflow-hidden">
      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-element-gap tracking-wider block">Matrix Mechanics: Rotation Systems</span>
      <div className="w-full h-64 md:h-80 bg-surface-container rounded-DEFAULT border border-outline-variant mt-stack-tight overflow-hidden relative">
      <img alt="Rotation Diagram" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" data-alt="A highly detailed, technical schematic illustration of falling tetromino blocks undergoing rotation transformations within a dark, digital grid. The diagram utilizes a sleek, corporate modern aesthetic with deep navy blue backgrounds and sharp, high-contrast primary blue accents. Precise, thin geometric lines and subtle glowing effects indicate movement paths and pivot points, creating a high-performance, analytical visual style suitable for a professional gaming terminal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqBwhv6OpngSXGfklqf3lfp6EfhyEAjuk75oLoOKAJ8OmdG8Sl4CHLw6Nh2kBOAFJlX5CZaFSuiVsI1N3PdI9vLKS8EcgE0aEcVBRIM1xpiWvVHEFcLHG4aJ-3t8M1jiDVMWSUiZLAygX6WL5N4oW8-iuxcFL9edNdJn4E1WinyPqd3Z6ItuURP6GxeBTA5WFtd1rHPasOzF4fKpmZuSLf-VjhWvNc5IHRV0gOTHyGK7qyaHh8TYel3bCBA8uX8U4TtQ799BwRYwM_" />
      {/* Overlay details simulating technical overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent flex items-end p-grid-gutter">
      <p className="font-body-md text-body-md text-on-surface max-w-lg">
                                      The engine utilizes a Super Rotation System (SRS). Blocks rotate around a fixed pivot point. If an initial rotation collides with the matrix boundary or existing stack, the system evaluates secondary wall-kick translation matrices to maintain block momentum.
                                  </p>
      </div>
      </div>
      </section>
      {/* Keyboard Shortcuts Table */}
      <section className="col-span-1 md:col-span-4 bg-surface-container-low border border-outline-variant rounded-lg p-grid-gutter flex flex-col relative">
      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-element-gap tracking-wider block">Key Bindings</span>
      <div className="flex flex-col mt-stack-tight">
      {/* Row */}
      <div className="flex justify-between items-center py-element-gap border-b border-outline-variant border-opacity-50">
      <span className="font-body-md text-body-md text-on-surface">Move Left / Right</span>
      <div className="flex gap-stack-tight">
      <kbd className="bg-surface border border-outline-variant rounded-DEFAULT px-2 py-1 font-body-md text-body-md text-on-surface-variant shadow-[0_2px_0_rgba(67,70,85,1)]">←</kbd>
      <kbd className="bg-surface border border-outline-variant rounded-DEFAULT px-2 py-1 font-body-md text-body-md text-on-surface-variant shadow-[0_2px_0_rgba(67,70,85,1)]">→</kbd>
      </div>
      </div>
      {/* Row */}
      <div className="flex justify-between items-center py-element-gap border-b border-outline-variant border-opacity-50">
      <span className="font-body-md text-body-md text-on-surface">Soft Drop</span>
      <kbd className="bg-surface border border-outline-variant rounded-DEFAULT px-2 py-1 font-body-md text-body-md text-on-surface-variant shadow-[0_2px_0_rgba(67,70,85,1)]">↓</kbd>
      </div>
      {/* Row */}
      <div className="flex justify-between items-center py-element-gap border-b border-outline-variant border-opacity-50">
      <span className="font-body-md text-body-md text-on-surface font-bold text-primary">Hard Drop</span>
      <kbd className="bg-surface border border-outline-variant rounded-DEFAULT px-4 py-1 font-body-md text-body-md text-on-surface-variant shadow-[0_2px_0_rgba(67,70,85,1)]">Space</kbd>
      </div>
      {/* Row */}
      <div className="flex justify-between items-center py-element-gap border-b border-outline-variant border-opacity-50">
      <span className="font-body-md text-body-md text-on-surface">Rotate CCW / CW</span>
      <div className="flex gap-stack-tight">
      <kbd className="bg-surface border border-outline-variant rounded-DEFAULT px-2 py-1 font-body-md text-body-md text-on-surface-variant shadow-[0_2px_0_rgba(67,70,85,1)]">Z</kbd>
      <kbd className="bg-surface border border-outline-variant rounded-DEFAULT px-2 py-1 font-body-md text-body-md text-on-surface-variant shadow-[0_2px_0_rgba(67,70,85,1)]">X</kbd>
      </div>
      </div>
      {/* Row */}
      <div className="flex justify-between items-center pt-element-gap">
      <span className="font-body-md text-body-md text-on-surface">Hold Piece</span>
      <kbd className="bg-surface border border-outline-variant rounded-DEFAULT px-3 py-1 font-body-md text-body-md text-on-surface-variant shadow-[0_2px_0_rgba(67,70,85,1)]">Shift</kbd>
      </div>
      </div>
      </section>
      {/* Touch Controls */}
      <section className="col-span-1 md:col-span-6 bg-surface-container-low border border-outline-variant rounded-lg p-grid-gutter flex flex-col relative">
      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-element-gap tracking-wider block">Touch Gestures</span>
      <div className="grid grid-cols-2 gap-grid-gutter mt-stack-tight">
      <div className="flex flex-col gap-stack-tight p-element-gap bg-surface rounded-DEFAULT border border-outline-variant/30">
      <span className="material-symbols-outlined text-primary mb-1" data-icon="swipe_left">swipe_left</span>
      <span className="font-label-lg text-label-lg text-on-surface">Horizontal Swipe</span>
      <span className="font-body-md text-body-md text-on-surface-variant text-sm">Translates active piece left or right across the grid.</span>
      </div>
      <div className="flex flex-col gap-stack-tight p-element-gap bg-surface rounded-DEFAULT border border-outline-variant/30">
      <span className="material-symbols-outlined text-primary mb-1" data-icon="touch_app">touch_app</span>
      <span className="font-label-lg text-label-lg text-on-surface">Single Tap</span>
      <span className="font-body-md text-body-md text-on-surface-variant text-sm">Executes 90-degree clockwise rotation (CW).</span>
      </div>
      <div className="flex flex-col gap-stack-tight p-element-gap bg-surface rounded-DEFAULT border border-outline-variant/30">
      <span className="material-symbols-outlined text-primary mb-1" data-icon="swipe_down">swipe_down</span>
      <span className="font-label-lg text-label-lg text-on-surface">Downward Swipe</span>
      <span className="font-body-md text-body-md text-on-surface-variant text-sm">Accelerates piece descent (Soft Drop).</span>
      </div>
      <div className="flex flex-col gap-stack-tight p-element-gap bg-surface rounded-DEFAULT border border-primary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <span className="material-symbols-outlined text-primary mb-1 relative z-10" data-icon="double_tap">touch_double</span>
      <span className="font-label-lg text-label-lg text-on-surface relative z-10">Hard Swipe Down</span>
      <span className="font-body-md text-body-md text-on-surface-variant text-sm relative z-10">Instantaneous lock-down at lowest valid projection.</span>
      </div>
      </div>
      </section>
      {/* About / Metadata */}
      <section className="col-span-1 md:col-span-6 bg-surface-container-low border border-outline-variant rounded-lg p-grid-gutter flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute -right-16 -top-16 opacity-5 pointer-events-none">
      <span className="material-symbols-outlined text-[200px]" data-icon="developer_board">developer_board</span>
      </div>
      <div className="flex flex-col items-center gap-element-gap z-10">
      <div className="font-headline-md text-headline-md font-bold text-primary">StackEngine Pro</div>
      <div className="inline-flex items-center gap-2 bg-surface px-3 py-1 rounded-full border border-outline-variant">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
      <span className="font-label-sm text-label-sm text-on-surface-variant tracking-widest">BUILD 2.4.1.99</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mt-stack-tight">
                                  Proprietary matrix execution environment engineered for zero-latency competitive play and advanced tournament analytics.
                              </p>
      <div className="flex gap-grid-gutter mt-element-gap">
      <a className="font-label-sm text-label-sm text-primary hover:underline hover:text-primary-fixed transition-colors" href="#">Privacy Policy</a>
      <span className="text-outline-variant">•</span>
      <a className="font-label-sm text-label-sm text-primary hover:underline hover:text-primary-fixed transition-colors" href="#">Terms of Service</a>
      </div>
      </div>
      </section>
      </div>
      </div>
      </main>
    </>
  );
}
