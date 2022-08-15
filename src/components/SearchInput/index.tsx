import { FormEvent, InputHTMLAttributes } from 'react';
import * as S from './styles';

interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  searchTerm: string;
}

export const SearchInput = ({ searchTerm, ...rest }: ISearchInputProps) => {
  return (
    <S.Container>
      <S.SearchButton type="button">
        <S.SearchIcon size={18} color="#fff" />
      </S.SearchButton>
      <S.Input name="search" type="text" placeholder="Search" {...rest} />
    </S.Container>
  );
};
