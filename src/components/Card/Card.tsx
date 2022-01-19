const Card = ({ color }: CardProps): JSX.Element => {
  return <div>Card</div>;
};

type CardProps = {
  color: string;
  size: 'small' | 'medium' | 'large';
};

export default Card;
