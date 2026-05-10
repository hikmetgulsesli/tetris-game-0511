// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Results
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface GameResultsProps {}

export function GameResults(props: GameResultsProps) {
  return (
    <>
      {/* Main Results Container */}
      <main className="w-full max-w-3xl px-container-padding py-12 flex flex-col items-center">
      {/* Header */}
      <header className="text-center mb-grid-gutter flex flex-col items-center gap-stack-tight">
      <span className="font-headline-sm text-headline-sm text-error tracking-widest uppercase">Game Over</span>
      <h1 className="font-score-display text-score-display text-primary mt-unit">1,245,890</h1>
      <div className="flex items-center gap-2 mt-2 text-on-surface-variant font-label-lg text-label-lg">
      <span className="material-symbols-outlined" data-icon="star" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
      <span>Personal Best: 1,150,000</span>
      <span className="material-symbols-outlined text-tertiary" data-icon="arrow_upward" style={{fontVariationSettings: "'FILL' 1"}}>arrow_upward</span>
      </div>
      </header>
      {/* Stats Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-grid-gutter w-full mb-8">
      {/* Stat Card: Lines Cleared */}
      <div className="bg-surface-container-low border border-outline-variant p-element-gap rounded-lg flex flex-col gap-stack-tight">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Lines Cleared</span>
      <span className="font-headline-md text-headline-md text-on-surface">142</span>
      </div>
      {/* Stat Card: Max Combo */}
      <div className="bg-surface-container-low border border-outline-variant p-element-gap rounded-lg flex flex-col gap-stack-tight">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Max Combo</span>
      <span className="font-headline-md text-headline-md text-primary">12x</span>
      </div>
      {/* Stat Card: Time Played */}
      <div className="bg-surface-container-low border border-outline-variant p-element-gap rounded-lg flex flex-col gap-stack-tight">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Time Played</span>
      <span className="font-headline-md text-headline-md text-on-surface">04:32</span>
      </div>
      {/* Stat Card: Rank */}
      <div className="bg-surface-container-low border border-outline-variant p-element-gap rounded-lg flex flex-col gap-stack-tight relative overflow-hidden">
      <div className="absolute right-[-10px] bottom-[-10px] opacity-10">
      <span className="material-symbols-outlined text-[64px]" data-icon="military_tech" style={{fontVariationSettings: "'FILL' 1"}}>military_tech</span>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Rank</span>
      <span className="font-headline-md text-headline-md text-tertiary">S+</span>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-element-gap w-full max-w-md justify-center mt-grid-gutter">
      <button className="flex-1 bg-primary-container text-on-primary-container font-label-lg text-label-lg py-3 px-6 rounded-DEFAULT flex items-center justify-center gap-2 hover:bg-inverse-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined" data-icon="replay">replay</span>
                      Play Again
                  </button>
      <button className="flex-1 border border-outline-variant text-on-surface bg-transparent font-label-lg text-label-lg py-3 px-6 rounded-DEFAULT flex items-center justify-center gap-2 hover:bg-surface-variant hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined" data-icon="share">share</span>
                      Share Score
                  </button>
      </div>
      <div className="mt-element-gap">
      <button className="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors flex items-center gap-2 py-2">
      <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                      Back to Menu
                  </button>
      </div>
      </main>
    </>
  );
}
