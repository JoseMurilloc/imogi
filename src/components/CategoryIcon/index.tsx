import { Link, useMatch, useLocation } from 'react-router-dom';
import { getCategoryIcon } from '../../utils/getCategoryIcon';

import * as S from './styles';

interface ICategoryIconProps {
  categorySlug: string;
}

interface IMatchRoute {
  params: {
    categorySlug: string;
  };
}

export const CategoryIcon = ({ categorySlug }: ICategoryIconProps) => {
  const { pathname } = useLocation();
  let routeSlug = 'smileys-emotion';

  if (pathname !== '/') {
    const { params } = useMatch({
      path: '/emojis/:categorySlug',
    }) as IMatchRoute;

    routeSlug = params.categorySlug;
  }

  const Icon = getCategoryIcon(
    categorySlug,
    routeSlug === categorySlug ? '#a026eb' : '#515156'
  );

  return Icon ? (
    <S.Container>
      <Link to={`/emojis/${categorySlug}`}>{Icon}</Link>
    </S.Container>
  ) : null;
};
