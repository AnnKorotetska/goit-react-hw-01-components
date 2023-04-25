import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  padding-bottom: 50px;
`;

export const Title = styled.h2`
  margin-top: 50px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  border: 1px solid #f0ffff;
  background-color: #bdb76b;
  margin-bottom: 50px;
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.5);
`;

export const Label = styled.span`
  margin-bottom: 5px;
  color: #f0ffff;
`;

export const Percentage = styled.span`
  font-weight: 600;
  font-size: 120%;
  color: #f0ffff;
`;
