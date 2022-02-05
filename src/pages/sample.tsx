import type { NextPage } from 'next';
import Card from '../components/Card/Card';
import StoreProvider, { useStore } from '../store/storeContext';

const Sample: NextPage = () => {
  return (
    <StoreProvider>
      <TestComponent />
    </StoreProvider>
  );
};

const TestComponent = (): JSX.Element => {
  const {
    state: {
      ui: { showCard },
    },
    dispatch,
  } = useStore();

  const onButtonClick = () => {
    dispatch({
      type: showCard ? 'HIDE_CARD' : 'SHOW_CARD',
    });
  };

  return (
    <div data-testid="sample-page">
      <button data-testid="sample-page__button" onClick={onButtonClick}>
        Click me
      </button>
      <p>{showCard ? 'show' : 'hide'}</p>
      {showCard && (
        <div data-testid="sample-page__card">
          <Card size="small" color="blue" title="sample page card" />
        </div>
      )}
    </div>
  );
};
export default Sample;
