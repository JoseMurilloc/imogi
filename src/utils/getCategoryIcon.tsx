import { FaRegSmile } from 'react-icons/fa';
import { BsPeople, BsLightbulb } from 'react-icons/bs';
import { RiBearSmileLine } from 'react-icons/ri';
import { IoFastFoodOutline } from 'react-icons/io5';
import { BiBuildingHouse, BiFlag, BiFootball } from 'react-icons/bi';
import { VscSymbolString } from 'react-icons/vsc';

export const getCategoryIcon = (
  categorySlug: string,
  color: string
): JSX.Element => {
  const iconProps = {
    color,
    size: 18,
  };

  const categoriesIcons: any = {
    'smileys-emotion': <FaRegSmile {...iconProps} />,
    'people-body': <BsPeople {...iconProps} />,
    'animals-nature': <RiBearSmileLine {...iconProps} />,
    'food-drink': <IoFastFoodOutline {...iconProps} />,
    'travel-places': <BiBuildingHouse {...iconProps} />,
    activities: <BiFootball {...iconProps} />,
    objects: <BsLightbulb {...iconProps} />,
    symbols: <VscSymbolString {...iconProps} />,
    flags: <BiFlag {...iconProps} />,
  };

  return categoriesIcons[categorySlug];
};
