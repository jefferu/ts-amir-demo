import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, Scale, ExternalLink } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Impressum | Tennisschule Amir',
  description: 'Gesetzliche Anbieterkennzeichnung nach § 5 DDG und § 18 MStV der Tennisschule Amir (Inhaber Amir Reza).',
};

/**
 * Renders the legally mandatory German imprint page pursuant to § 5 DDG (Digitale-Dienste-Gesetz)
 * and § 18 MStV (Medienstaatsvertrag) to protect the site operator from regulatory fines and cease-and-desist warnings.
 */
export default function ImpressumPage() {
  const homeHref = getAssetPath('/');
  const datenschutzHref = getAssetPath('/datenschutz');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-tennis-accent selection:text-slate-950">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            href={homeHref}
            className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-slate-300 hover:text-tennis-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Zurück zur Startseite</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex-shrink-0">
              <img
                src={getAssetPath('/images/logo.png')}
                alt="Tennisschule Amir Logo"
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>
            <span className="text-white font-extrabold text-sm tracking-tight hidden sm:inline-block">
              TENNISSCHULE <span className="text-tennis-accent">AMIR</span>
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tennis-accent/10 border border-tennis-accent/30 text-tennis-accent text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            Rechtliche Angaben nach § 5 DDG
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Impressum
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Gesetzliche Anbieterkennzeichnung und Pflichtangaben für den Webauftritt der Tennisschule Amir.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            1. Angaben gemäß § 5 DDG (Diensteanbieter)
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-sm leading-relaxed text-slate-300 space-y-2">
            <p className="font-bold text-white text-base">Tennisschule Amir</p>
            <p>Inhaber: <strong>Amir Reza</strong></p>
            <div className="flex items-start gap-2 pt-1 text-slate-300">
              <MapPin className="w-4 h-4 text-tennis-accent flex-shrink-0 mt-1" />
              <span>Gerlachshöhe 28a<br />64367 Mühltal<br />Deutschland</span>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            2. Kontaktmöglichkeiten
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-tennis-accent/10 text-tennis-accent">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-semibold uppercase">Mobiltelefon</span>
                <a href="tel:01624207661" className="text-sm font-bold text-white hover:text-tennis-accent transition-colors">
                  0162 - 420 76 61
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-tennis-accent/10 text-tennis-accent">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-semibold uppercase">E-Mail</span>
                <a href="mailto:info@ts-amir.de" className="text-sm font-bold text-white hover:text-tennis-accent transition-colors">
                  info@ts-amir.de
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            3. Steuerliche Erfassung
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-slate-300 space-y-1">
            <p><strong>Steuernummer:</strong> 0786032189</p>
            <p className="text-xs text-slate-400">Zuständiges Finanzamt: Finanzamt Darmstadt</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            4. Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-slate-300">
            <p><strong>Amir Reza</strong><br />Gerlachshöhe 28a<br />64367 Mühltal<br />Deutschland</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            5. Berufsbezeichnung & Lizenzen
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-slate-300 space-y-3">
            <p><strong>Berufsbezeichnung:</strong> Professioneller Tennislehrer / Tennistrainer (freiberufliche Trainertätigkeit, verliehen in Deutschland & international).</p>
            <div>
              <p className="font-semibold text-white mb-1">Qualifikationen & Verbandsmitgliedschaften:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs">
                <li>GPTCA / ATP International Coach A-Level (höchste Zertifizierungsstufe)</li>
                <li>Offizieller Talent Scout der Rafa Nadal Academy</li>
                <li>USTA A-Lizenz & USTA Diplom-Trainer</li>
                <li>DTB / HTV Lizenztrainer Leistungssport</li>
                <li>Zertifizierter Übungsleiter der Heidelberger Ballschule</li>
              </ul>
            </div>
            <p className="text-xs text-slate-400 pt-2 border-t border-white/10">
              <strong>Offizieller Trainingsbetrieb:</strong> Tennisabteilung der Sportgemeinde Weiterstadt e.V. (SG Weiterstadt), Am Sportzentrum 1, 64331 Weiterstadt.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            6. EU-Streitschlichtung & Verbraucherstreitbeilegung (§ 36 VSBG)
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs leading-relaxed text-slate-400 space-y-3">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter folgendem Link finden:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tennis-accent underline hover:text-white inline-flex items-center gap-1"
              >
                <span>https://ec.europa.eu/consumers/odr/</span>
                <ExternalLink className="w-3 h-3" />
              </a>.
            </p>
            <p>
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            7. Haftung für Inhalte & Links
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs leading-relaxed text-slate-400 space-y-3">
            <p>
              <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
            <p>
              <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            <p>
              <strong>Urheberrecht & Bildnachweise:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.<br />
              Bildnachweise: Archiv Tennisschule Amir (Amir Reza, ATP A-Level Zertifikatsübergabe mit Alberto Castellani), sowie lizenzfreie Sport-Symbolbilder via Unsplash.
            </p>
          </div>
        </section>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>Stand: Oktober 2026 • Tennisschule Amir</p>
          <div className="flex items-center gap-4">
            <Link href={datenschutzHref} className="text-tennis-accent hover:underline flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zur Datenschutzerklärung</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
