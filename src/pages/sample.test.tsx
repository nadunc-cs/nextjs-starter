import { fireEvent, render, within } from '@testing-library/react';
import { findByTestAttr } from '../utils/testUtil';
import Sample from './sample';

const defaultProps = {};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return render(<Sample {...setupProps} />);
};

describe('Sample page', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const result = setup();
    container = result.container;
  });

  test('renders sample page', () => {
    const component = findByTestAttr(container, 'sample-page');
    expect(component).toBeInTheDocument();
  });

  describe('card toggle button', () => {
    test('renders button', () => {
      const component = findByTestAttr(container, 'sample-page__button');
      expect(component).toBeInTheDocument();
    });

    test('button should have correct text', () => {
      const component = findByTestAttr(container, 'sample-page__button');
      expect(component).toHaveTextContent('Click me');
    });

    test('card should not visible initially', () => {
      const component = findByTestAttr(container, 'sample-page__card');
      expect(component).not.toBeInTheDocument();
    });

    test('card should visible after button click', () => {
      const button = findByTestAttr(container, 'sample-page__button');
      fireEvent.click(button);
      const card = within(container).queryByTestId('sample-page__card');
      expect(card).toBeInTheDocument();
    });

    test('card should not visible after second button click', () => {
      const button = findByTestAttr(container, 'sample-page__button');
      fireEvent.click(button);
      fireEvent.click(button);
      const card = within(container).queryByTestId('sample-page__card');
      expect(card).not.toBeInTheDocument();
    });
  });
});
