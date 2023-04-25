import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 200px;
  padding: 8px 8px;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Status = styled.span`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${({ status }) => (status ? 'lime' : 'tomato')};
`;

export const Name = styled.p`
  margin: 0;
  font-weight: 600;
`;

export const Avatar = styled.img`
  width: 50px;
`;
