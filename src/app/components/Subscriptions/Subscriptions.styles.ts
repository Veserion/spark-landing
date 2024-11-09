import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  column-gap: 48px;
  margin-bottom: 64px;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    row-gap: 32px;
  }
`;

export const AuditBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 4px solid #171717;
  border-radius: 16px;
  padding: 32px;
  width: 344px;
  min-width: 344px;
  height: 320px;

  @media screen and (max-width: 680px) {
    width: 100%;
    min-width: auto;
  }
`;

export const Title = styled.p`
  margin-top: 26px;
  font-weight: 400;
  font-size: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  max-width: 952px;
`;

export const Item = styled(Link)`
  position: relative;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
  height: 68px;
  background: #171717;
  display: flex;
  align-items: center;
  column-gap: 12px;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    height: 52px;
    width: 52px;
    top: 8px;
    left: 8px;
    background: #000000;
    border-radius: 8px;
    transition: width 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    width: 98%;
  }
`;

export const IconWrapper = styled.div`
  border-radius: 4px;
  padding: 8px;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  position: relative;
  z-index: 2;
`;

export const SocialTitle = styled.p`
  font-weight: 400;
  font-size: 24px;
  position: relative;
  z-index: 2;
`; 