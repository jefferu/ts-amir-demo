import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, CheckCircle2, Server, EyeOff, FileText, Scale } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Tennisschule Amir',
  description: 'DSGVO- und TDDDG-konforme Datenschutzerklärung der Tennisschule Amir. 100% lokale Fonts, keine Tracking-Cookies.',
};

/**
 * Renders the German GDPR / DSGVO & TDDDG compliant privacy policy page,
 * documenting data minimization, zero-cookie policy, local fonts, and user rights.
 */
export default function DatenschutzPage() {
  const homeHref = getAssetPath('/');
  const impressumHref = getAssetPath('/impressum');

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% DSGVO- & TDDDG-konform
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Informationen über die Verarbeitung Ihrer personenbezogenen Daten beim Besuch unserer Website gemäß Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO).
          </p>
        </div>

        <section className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>Datenschutz-Garantie: Keine Cookies & kein Third-Party-Tracking</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und praktizieren konsequente Datensparsamkeit. Diese Website verwendet <strong>weder Tracking-Cookies noch Webanalyse-Dienste (wie Google Analytics oder Meta-Pixel)</strong>. Sämtliche Schriftarten (Fonts) und Medien werden zu 100% lokal von unserem Server bereitgestellt.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            1. Verantwortliche Stelle
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-sm leading-relaxed text-slate-300 space-y-2">
            <p>Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der DSGVO ist:</p>
            <p className="font-bold text-white text-base">Tennisschule Amir</p>
            <p>Inhaber: <strong>Amir Reza</strong></p>
            <p>Gerlachshöhe 28a<br />64367 Mühltal<br />Deutschland</p>
            <p className="pt-2 text-xs">
              Telefon: <a href="tel:01624207661" className="text-tennis-accent hover:underline">0162 - 420 76 61</a><br />
              E-Mail: <a href="mailto:info@ts-amir.de" className="text-tennis-accent hover:underline">info@ts-amir.de</a>
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            2. Keine Cookies & keine Datenspeicherung auf Endgeräten (§ 25 TDDDG)
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs leading-relaxed text-slate-300 space-y-3">
            <p>
              Gemäß § 25 des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG) bedarf der Zugriff auf Informationen auf dem Endgerät des Nutzers (wie das Speichern und Auslesen von Cookies) grundsätzlich einer informierten Einwilligung, es sei denn, dies ist technisch unbedingt erforderlich.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <EyeOff className="w-5 h-5 text-tennis-accent flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm mb-1">Cookie-freie Website</strong>
                <p className="text-slate-400">
                  Auf dieser Website werden <strong>keine Cookies</strong> eingesetzt. Weder zustimmungspflichtige Marketing- oder Statistik-Cookies noch technisch persistente Tracking-Token werden auf Ihrem Endgerät abgelegt. Ein Cookie-Banner ist daher nach geltendem EU- und deutschem Recht nicht erforderlich.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            3. Lokale Bereitstellung von Schriftarten (Keine Google Fonts Serveranbindung)
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs leading-relaxed text-slate-300 space-y-3">
            <p>
              Diese Seite nutzt zur typografischen Gestaltung die Schriftarten <strong>Montserrat</strong> und <strong>Plus Jakarta Sans</strong>.
            </p>
            <p>
              Zur Verhinderung einer unbefugten Datenübertragung (insbesondere der dynamischen IP-Adresse an externe Anbieter wie Google Inc. in den USA) sind sämtliche Schriftartdateien <strong>vollständig lokal auf unserem eigenen Webserver</strong> hinterlegt und werden direkt von dort eingebunden.
            </p>
            <p className="text-slate-400">
              Es besteht zu keinem Zeitpunkt eine Netzwerkverbindung zu Servern von Google Fonts oder anderen externen Schrifthostern. Rechtsgrundlage für die Einbindung lokaler Schriftarten ist unser berechtigtes Interesse an einer ansprechenden und datenschutzkonformen Darstellung unseres Online-Angebots gemäß Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            4. Lokales Hosting von Bildern & Mediendateien
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs leading-relaxed text-slate-300 space-y-2">
            <p>
              Alle auf der Website dargestellten Fotos, Grafiken und Logos werden ausnahmslos von unserem eigenen Webserver ausgeliefert. Es erfolgt kein dynamisches Nachladen von externen Content Delivery Networks (CDNs) oder Stockfoto-Diensten beim Aufruf der Seiten durch den Besucher.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            5. Server-Log-Dateien
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs leading-relaxed text-slate-300 space-y-3">
            <p>
              Der Provider unserer Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an den Server übermittelt. Dies umfasst:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners / IP-Adresse</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>Übertragene Datenmenge und HTTP-Statuscode</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung, der Ausfallsicherheit und der Abwehr von Cyberangriffen (z.B. DDoS-Attacken). Server-Logfiles werden nach maximal 7 bis 14 Tagen automatisch gelöscht oder anonymisiert.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            6. Kontaktaufnahme & Buchungsformulare (Schnupperstunden, Kurse)
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs leading-relaxed text-slate-300 space-y-3">
            <p>
              Wenn Sie uns per Kontaktformular, Buchungsmodal oder per E-Mail Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, Telefonnummer, E-Mail-Adresse, gewünschtes Trainingsprogramm, Spielstärke und individuelle Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet und gespeichert.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong>, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen (z.B. Terminvereinbarung einer Schnupperstunde oder Platzierung in einer Trainingsgruppe) erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer ausdrücklichen Einwilligung (<strong>Art. 6 Abs. 1 lit. a DSGVO</strong>).
            </p>
            <p>
              Die von Ihnen im Formular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere steuer- und handelsrechtliche Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            7. SSL- bzw. TLS-Verschlüsselung
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs leading-relaxed text-slate-300 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Lock className="w-4 h-4 text-tennis-accent" />
              <span>Sichere Datenübertragung per HTTPS</span>
            </div>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Buchungsanfragen, die Sie an uns senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            8. Ihre Rechte als betroffene Person
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs leading-relaxed text-slate-300 space-y-3">
            <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit folgende Rechte:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, jederzeit unentgeltlich Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten, deren Herkunft, Empfänger und den Zweck der Datenverarbeitung zu verlangen.</li>
              <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die unverzügliche Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
              <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten Daten zu verlangen („Recht auf Vergessenwerden“), sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
              <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
              <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.</li>
              <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sofern die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einzulegen.</li>
              <li><strong>Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie können eine einmal erteilte Einwilligung zur Datenverarbeitung jederzeit mit Wirkung für die Zukunft formlos per E-Mail an uns widerrufen.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tennis-accent inline-block"></span>
            9. Beschwerderecht bei der zuständigen Aufsichtsbehörde
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs leading-relaxed text-slate-300 space-y-2">
            <p>
              Im Falle von datenschutzrechtlichen Verstößen steht den Betroffenen ein Beschwerderecht bei einer zuständigen Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO). Die für Hessen zuständige Aufsichtsbehörde ist:
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs space-y-1">
              <p className="font-bold text-white">Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)</p>
              <p>Gustav-Stresemann-Ring 1, 65189 Wiesbaden</p>
              <p>Postfach 3163, 65021 Wiesbaden</p>
              <p>Telefon: +49 611 1408 - 0</p>
              <p>E-Mail: poststelle@datenschutz.hessen.de</p>
              <p>Website:{' '}
                <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer" className="text-tennis-accent underline hover:text-white">
                  https://datenschutz.hessen.de
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>Stand: Oktober 2026 • Tennisschule Amir</p>
          <div className="flex items-center gap-4">
            <Link href={impressumHref} className="text-tennis-accent hover:underline flex items-center gap-1 font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>Zum Impressum</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
