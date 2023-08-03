import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={475}
    viewBox='0 0 280 475'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='136' cy='135' r='120' />
    <rect x='2' y='267' rx='8' ry='8' width='280' height='30' />
    <rect x='-3' y='317' rx='8' ry='8' width='280' height='90' />
    <rect x='5' y='424' rx='8' ry='8' width='90' height='30' />
    <rect x='122' y='419' rx='8' ry='8' width='150' height='45' />
  </ContentLoader>
);
