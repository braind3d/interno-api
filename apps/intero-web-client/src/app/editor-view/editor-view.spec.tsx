import { render } from '@testing-library/react';

import EditorView from './editor-view';

describe('EditorView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditorView />);
    expect(baseElement).toBeTruthy();
  });
});
