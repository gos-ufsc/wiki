import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MathJaxComponent from '@site/src/components/MathJaxComponent';

const components = {
  // Automatically wrap all paragraphs in MathJaxComponent with left alignment
  p: (props) => (
    <MathJaxComponent>
      <p style={{ textAlign: 'left' }}>{props.children}</p>
    </MathJaxComponent>
  ),
  // You can add more custom wrappers here
};

export default function MDXWrapper({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
