/* eslint-disable react/no-danger */

import React from 'react';

const structure = {};

function GoogleStructure() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structure, null, 4) }}
    />
  );
}

export default GoogleStructure;
