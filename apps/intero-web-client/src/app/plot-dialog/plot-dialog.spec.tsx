import { render } from '@testing-library/react';

import PlotDialog from './plot-dialog';

describe('PlotDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlotDialog />);
    expect(baseElement).toBeTruthy();
  });
});
