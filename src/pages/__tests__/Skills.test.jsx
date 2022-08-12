import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Skills from '../Skills';

const renderPage = () => {
  return render(
    <BrowserRouter>
      <Skills />
    </BrowserRouter>,
  );
};

describe('Skills page', () => {
  it('should reveal text when button is clicked', async () => {
    const user = userEvent.setup();

    renderPage();

    const btn = screen.getByRole('button', { name: 'Show text' });

    expect(screen.queryByText('React.js - My most proficient language')).toHaveClass('skills__text');
    await user.click(btn);
    expect(screen.queryByText('React.js - My most proficient language')).toHaveClass('skills__text--clicked');
  });
});
