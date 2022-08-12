import { FormEvent } from 'react';
import * as S from './styles';

interface ISearchInputProps {
  handleSearch: (event: FormEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ handleSearch, ...rest }: ISearchInputProps) => {
  return (
    <S.Container>
      <S.SearchButton type="button">
        <S.SearchIcon size={18} color="#fff" />
      </S.SearchButton>
      <S.Input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        {...rest}
      />
    </S.Container>
  );
};
