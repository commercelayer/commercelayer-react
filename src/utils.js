import React from 'react'

export function Template({ children, ...attrs }) {
  return (
    <template
      {...attrs}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
