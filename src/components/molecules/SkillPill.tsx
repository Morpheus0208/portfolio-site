import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  label: string;
};

export default function SkillPill({ icon, label }: Props) {
  return (
    <div
      className="hover:bg-brand-50 hover:border-brand-200 inline-flex items-center gap-2 rounded-xl border border-black/5 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition"
      role="listitem"
    >
      <span className="text-brand-700 grid h-6 w-6 place-content-center [&>*]:h-4 [&>*]:w-4">
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
}
