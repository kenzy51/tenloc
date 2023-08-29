import { theme } from 'src/styles/theme';
import {styled} from 'styled-components';
export const Footer = () => {
    return (
    <Wrapper>
      asd
    </Wrapper>
    );
};
const { containers, mqMax } = theme;

const Wrapper = styled.div`
    padding-top: 83px ;
    padding-bottom: 30px;
    max-height: 483px;
    background: yellow;
`
const Container = styled.div`
  max-width: ${containers.main};
  ${mqMax('xl')} {
    padding: 0 20px;
  }
`