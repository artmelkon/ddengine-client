import {render, screen} from '@testing-library/react';

import Dashboard from "../../pages/Dashboard";

describe('Dashboard', () => {
  test('render "dashboard page" text in the page', () => {
    render(<Dashboard />);

    const result = screen.getByText(/DASHBOARD PAGE/i, {exact: false});
    expect(result).toBeInTheDocument();
  })
})
