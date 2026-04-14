import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

export default function PdfThumbnail({ url, alt }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`pdf-thumb ${loaded ? 'pdf-thumb--loaded' : ''}`}>
      <Document
        file={url}
        onLoadSuccess={() => setLoaded(true)}
        loading={<div className="pdf-thumb__skeleton" />}
        error={<div className="pdf-thumb__error">—</div>}
      >
        <Page
          pageNumber={1}
          width={380}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  )
}
