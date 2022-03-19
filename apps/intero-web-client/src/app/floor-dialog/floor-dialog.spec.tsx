import { render } from '@testing-library/react';

import FloorDialog from './floor-dialog';

describe('FloorDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FloorDialog />);
    expect(baseElement).toBeTruthy();
  });
});
