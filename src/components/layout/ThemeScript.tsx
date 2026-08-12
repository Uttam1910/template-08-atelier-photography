export const THEME_STORAGE_KEY = "atelier-theme";

/**
 * Runs before first paint so the correct theme is on <html> immediately and the
 * page never flashes. Kept deliberately tiny and dependency-free.
 */
const script = `(function(){try{var k="${THEME_STORAGE_KEY}";var t=localStorage.getItem(k);if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
