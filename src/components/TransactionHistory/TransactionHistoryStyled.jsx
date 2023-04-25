import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  margin: 20px auto 100px;
  border: 1px solid #dcdcdc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  tr {
    height: 50px;
  }
  th {
    color: white;
  }
  td {
    color: #808080;
    text-align: center;
  }
  thead {
    background-color: #add8e6;
  }
  tbody tr:nth-child(2n) {
    background-color: #dcdcdc;
  }
`;
