import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Footer from './components/Footer'
import { translations } from './translations'

export default function App() {
  const [lang, setLang] = useState('et')
  const tr = translations[lang]

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero tr={tr} />
        <Work tr={tr} lang={lang} />
      </main>
      <Footer tr={tr} />
    </>
  )
}
