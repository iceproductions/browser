import styled from 'styled-components';
import { centerIcon } from '~/shared/mixins';
import { icons } from '../../constants';

export const StyledSearchBox = styled.div`
  margin-top: 48px;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 23px;
  margin-bottom: 32px;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  min-height: 48px;
  transition: 0.2s height;
  box-shadow: 5px 5px 33px 10px rgba(0,0,0,0.21);
`;

export const SearchChip = styled.div`
  width: 150px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.08);
  position: relative;
  height: 35px;
  margin-left: 10px;
`;

export const ChipImage = styled.img`
  height: 21px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-left: 7px
`;

export const SearchIcon = styled.div`
  ${centerIcon()};
  background-image: url(${icons.search});
  height: 18px;
  filter: invert(100%);
  min-width: 18px;
  margin-left: 16px;
`;

export const Input = styled.input`
  height: 100%;
  flex: 1;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  margin-left: 12px;
  margin-right: 16px;
  font-family: Roboto

  &::placeholder {
    color: rgba(255, 255, 255, 0.54);
    font-family: Roboto
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  min-height: 48px;
`;
