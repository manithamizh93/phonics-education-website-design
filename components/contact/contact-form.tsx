'use client'

import { useSearchParams } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import { Loader2, Send } from 'lucide-react'
import { programs, site } from '@/lib/site'

const inputClass =
  'mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/15'

export function ContactForm() {
  const searchParams = useSearchParams()
  const preselected = programs.some((p) => p.slug === searchParams.get('class')) ? searchParams.get('class')! : ''
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const program = programs.find((p) => p.slug === data.get('class'))
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()

    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New demo class enquiry from ${name}`,
          _template: 'table',
          _captcha: 'false',
          ...(email ? { _replyto: email } : {}),
          Name: name,
          Phone: String(data.get('phone') ?? '').trim(),
          Email: email || 'Not provided',
          'Learner age': String(data.get('age') ?? '').trim() || 'Not provided',
          'Class of interest': program ? `${program.title} (${program.ages})` : 'Not sure yet',
          Message: String(data.get('message') ?? '').trim() || 'No message',
        }),
      })
      const json = await res.json().catch(() => null)
      if (!res.ok || json?.success === 'false' || json?.success === false) throw new Error('Send failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-border bg-card p-7 shadow-xl shadow-primary/5 sm:p-10">
      <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Book your free demo class</h2>
      <p className="mt-2 text-muted-foreground">
        {"Fill in your details and we'll get back to you within 24 hours."}
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
        disabled={status === 'sending'}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-md shadow-primary/20 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
      >
        {status === 'sending' ? 'Sending...' : 'Send enquiry'}
        {status === 'sending' ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`mt-4 text-sm font-semibold ${status === 'error' ? 'text-destructive' : 'text-primary'}`}
      >
        {status === 'sent' && "Thank you! Your enquiry has been sent. We'll be in touch soon."}
        {status === 'error' && (
          <>
            {'Sorry, something went wrong. Please try again or '}
            <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="underline">
              message us on WhatsApp
            </a>
            .
          </>
        )}
      </p>
    </form>
  )
}
