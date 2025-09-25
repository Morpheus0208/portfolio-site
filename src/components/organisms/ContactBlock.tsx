import { MdOutlineEmail } from 'react-icons/md';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function ContactBlock() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-600/20">
          <span className="h-2 w-2 rounded-full bg-emerald-600" />
          Disponible : missions freelances • Remote ou Quimper
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <MdOutlineEmail className="text-brand-600 h-6 w-6" />
            <h3 className="text-lg font-semibold text-slate-800">Email direct</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">Réponse rapide, message personnalisé.</p>
          <div className="mt-4 flex gap-3">
            <a
              href="mailto:morpheus0208code@gmail.com"
              className="bg-brand-600 hover:bg-brand-700 rounded-lg px-4 py-2 text-sm font-medium text-white"
            >
              Écrire un email
            </a>
            <button
              onClick={() => navigator.clipboard.writeText('morpheus0208code@gmail.com')}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Copier l’adresse
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-slate-800">
            Réseaux
          </h3>
          <p className="text-sm text-slate-600">Suivre, discuter, collaborer.</p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/Morpheus0208"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <SiGithub className="h-5 w-5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/guillaumeramonet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <SiLinkedin className="h-5 w-5 text-sky-600" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
