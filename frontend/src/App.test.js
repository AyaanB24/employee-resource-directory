import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the header title', () => {
    render(<App />);
    const titleElement = screen.getByText('Employee Resource Directory');
    expect(titleElement).toBeInTheDocument();
  });

  test('displays Phase 1 status message', () => {
    render(<App />);
    const statusElement = screen.getByText(/Phase 1: Project setup and database schema created/i);
    expect(statusElement).toBeInTheDocument();
  });

  test('renders setup status list', () => {
    render(<App />);
    const setupStatus = screen.getByText('Setup Status');
    expect(setupStatus).toBeInTheDocument();
  });
});
