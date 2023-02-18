import React from 'react';

import { render } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('match', () => {
    render(<App />);

    expect(true).toBeTruthy();
  });
});
