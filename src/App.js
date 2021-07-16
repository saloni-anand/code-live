import React, { useState } from 'react';
import Editor from './Editor'

function App() {
  const [html, setHtml] = useState('Type HTML Here', '')
  const [css, setCss] = useState('Type CSS Here', '')
  const [js, setJs] = useState('Type JavaScript Here', '')

  const srcDoc = `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `

  return (
    <>
      <div className="bar top-bar">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JavaScript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="bar">
        <iframe
          srcDoc={srcDoc}
          title="output"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
