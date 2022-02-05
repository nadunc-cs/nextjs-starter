import { render } from '@testing-library/react';
import { findByTestAttr } from '../../utils/testUtil';
import Card from './Card';

const defaultProps = {
  color: 'green',
  size: 'small',
  title: 'test card',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return render(<Card {...setupProps} />);
};

describe('Card component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const result = setup();
    container = result.container;
  });

  test('renders card component', () => {
    const component = findByTestAttr(container, 'card');
    expect(component).toBeInTheDocument();
  });

  test('renders card title', () => {
    const titleText = 'sample card';
    // You can pass custom props like this
    const { container } = setup({ title: titleText });
    const component = findByTestAttr(container, 'card__title');
    expect(component).toHaveTextContent(titleText);
  });
});
