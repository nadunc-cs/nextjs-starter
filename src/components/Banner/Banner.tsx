const Banner = ({ color }: BannerProps): JSX.Element => {
  return <div>Banner</div>;
};

type BannerProps = {
  color: string;
  size: 'small' | 'medium' | 'large';
};

export default Banner;
