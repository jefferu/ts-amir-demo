/**
 * Resolves static asset paths prefixed with optional basePath (for GitHub Pages subpaths or root custom domain).
 *
 * @param path - Relative or absolute path to the static asset.
 * @returns Fully qualified asset path relative to the active deployment root.
 */
export function getAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}

