const Card = ({ color, title }: CardProps): JSX.Element => {
  return (
    <div data-testid="card">
      <h1 data-testid="card__title">{title}</h1>
      <div data-testid="card__body"></div>
    </div>
  );
};

type CardProps = {
  color: string;
  size: 'small' | 'medium' | 'large';
  title: string;
};

export default Card;
