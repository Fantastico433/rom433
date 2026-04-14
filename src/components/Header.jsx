export default function Header({ lang, setLang }) {
  return (
    <header className="header">
      <div className="header-name">Roman</div>
      <nav className="header-lang" aria-label="Keelivalik">
        <button
          className={lang === 'et' ? 'lang-active' : ''}
          onClick={() => setLang('et')}
          aria-label="Eesti keel"
        >
          ET
        </button>
        <span className="lang-sep" aria-hidden="true">/</span>
        <button
          className={lang === 'en' ? 'lang-active' : ''}
          onClick={() => setLang('en')}
          aria-label="English"
        >
          EN
        </button>
      </nav>
    </header>
  )
}
