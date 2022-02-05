import { within } from '@testing-library/react';

export const findByTestAttr = (container: HTMLElement, dataTestId: string) => {
  return within(container).queryByTestId(dataTestId);
};
