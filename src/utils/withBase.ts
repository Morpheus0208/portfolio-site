/**
 * Préfixe un chemin relatif avec le BASE_URL défini par Vite.
 * Exemple:
 *   withBase("images/kasa.webp") -> "/portfolio/images/kasa.webp" sur GH Pages
 */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
