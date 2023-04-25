import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 20px auto 20px;
  padding-top: 20px;
  width: 250px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;

export const Description = styled.div`
  margin-bottom: 10px;
  font-family: Gill Sans Extrabold, sans-serif;
`;

export const Avatar = styled.img`
  margin: 10px auto 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Username = styled.p`
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Tag = styled.p`
  margin-bottom: 8px;
  color: #696969;
`;

export const Location = styled.p`
  color: #696969;
`;

export const Stats = styled.ul`
  display: flex;
  height: 70px;
  border-top: 1px solid #dcdcdc;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    flex: 1;
    background-color: #f8f8ff;
  }
  li:not(:last-child) {
    border-right: 1px solid #dcdcdc;
  }
  font-family: Gill Sans Extrabold, sans-serif;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #696969;
`;

export const Quantity = styled.span`
  font-weight: 600;
`;
