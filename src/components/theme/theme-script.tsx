/**
 * @see https://github.com/BuilderIO/qwik/issues/1480
 */
export const ThemeScript = () => {
  const script = `
!function() {
  try {
    var html = document.documentElement;
    var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var theme = localStorage.getItem('theme') ?? system;
    if (theme === 'system') theme = system;
    html.classList.add(theme);
    html.dataset.theme = theme;
  } catch (e) {}
}();
`;

  return <script type="text/javascript" dangerouslySetInnerHTML={script} />;
};
