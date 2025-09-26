export function scrollToId(id: string) {
  const el = document.getElementById(id.startsWith('#') ? id.slice(1) : id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
