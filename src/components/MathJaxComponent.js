import React, { useEffect } from 'react';

const MathJaxComponent = ({ children, inline = false }) => {
  useEffect(() => {
    // Configure MathJax
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        packages: { '[+]': ['ams'] }, // Load additional packages like ams
        tags: 'all', // Enable automatic equation numbering
      },
      svg: {
        fontCache: 'global',
      },
    };

    // Load MathJax
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js'; // MathJax 3.x
    script.async = true;
    script.onload = () => {
      if (window.MathJax) {
        if (window.MathJax.typesetPromise) {
          window.MathJax.typesetPromise();
        } else if (window.MathJax.Hub && window.MathJax.Hub.Queue) {
          // Fallback for MathJax 2.x
          window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
        }
      }
    };
    document.head.appendChild(script);

    // Typeset on update
    if (window.MathJax) {
      if (window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
      } else if (window.MathJax.Hub && window.MathJax.Hub.Queue) {
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
      }
    }

    return () => {
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [children]);

  return inline ? (
    <span>{children}</span>
  ) : (
    <div style={{ textAlign: 'center' }}>{children}</div>
  );
};

export default MathJaxComponent;
