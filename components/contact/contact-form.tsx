'use client'

import { useSearchParams } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { programs, site } from '@/lib/site'

const inputClass =
  'mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/15'

export function ContactForm() {
  const searchParams = useSearchParams()
  const preselected = programs.some((p) => p.slug === searchParams.get('class')) ? searchParams.get('class')! : ''
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const program = programs.find((p) => p.slug === data.get('class'))
    const message = [
      `Hello EchoGen Phonics! I'd like to book a free demo.`,
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      data.get('email') ? `Email: ${data.get('email')}` : '',
      data.get('age') ? `Learner age: ${data.get('age')}` : '',
      program ? `Interested in: ${program.title}` : '',
      data.get('message') ? `Message: ${data.get('message')}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-border bg-card p-7 shadow-xl shadow-primary/5 sm:p-10">
      <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Book your free demo class</h2>
      <p className="mt-2 text-muted-foreground">
        {"Fill in your details and we'll continue the conversation on WhatsApp."}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-bold text-foreground">
            Parent / learner name
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-bold text-foreground">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-bold text-foreground">
            Email <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="age" className="text-sm font-bold text-foreground">
            {"Learner's age"}
          </label>
          <input id="age" name="age" inputMode="numeric" placeholder="e.g. 6" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="class" className="text-sm font-bold text-foreground">
            Class of interest
          </label>
          <select id="class" name="class" defaultValue={preselected} className={inputClass}>
            <option value="">{"Not sure yet — help me choose"}</option>
            {programs.map((p) => (
              <option key={p.slug} value={p.slug}>
                {`${p.title} (${p.ages})`}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-bold text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a little about your child's reading..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-md shadow-primary/20 transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        Send enquiry
        <Send className="size-4" aria-hidden="true" />
      </button>
      <p role="status" className="mt-4 text-sm font-semibold text-primary">
        {sent ? 'Thank you! WhatsApp has opened with your message — just tap send.' : ''}
      </p>
    </form>
  )
}
