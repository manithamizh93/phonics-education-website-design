const letters = [
  { char: 's', className: 'left-[6%] top-[18%] rotate-[-12deg] bg-accent text-accent-foreground' },
  { char: 'a', className: 'left-[14%] bottom-[18%] rotate-[8deg] bg-coral text-coral-foreground' },
  { char: 't', className: 'right-[8%] top-[22%] rotate-[10deg] bg-primary-foreground/15 text-primary-foreground' },
  { char: 'p', className: 'right-[16%] bottom-[16%] rotate-[-6deg] bg-accent text-accent-foreground' },
  { char: 'sh', className: 'left-[44%] top-[6%] hidden rotate-[4deg] bg-primary-foreground/10 text-primary-foreground md:flex' },
]

export function LetterBubbles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {letters.map((l) => (
        <span
          key={l.char}
          className={`absolute flex size-12 items-center justify-center rounded-2xl font-heading text-xl font-bold opacity-80 shadow-lg md:size-16 md:text-2xl ${l.className}`}
        >
          {l.char}
        </span>
      ))}
    </div>
  )
}
