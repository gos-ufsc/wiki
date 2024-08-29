window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      packages: { '[+]': ['ams'] }, // Enable AMS packages
      tags: 'all', // Enable automatic equation numbering
    },
    svg: {
      fontCache: 'global',
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'], // Avoid processing these tags
      processHtmlClass: 'math-block', // Only process elements with this class
    },
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  });
  