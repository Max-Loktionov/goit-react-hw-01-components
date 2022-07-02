import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 48px;
  border-collapse: collapse;
  width: 100%;
`;
export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 12px 8px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
`;
export const TableRow = styled.tr`
  background-color: #b1c2b2;
  :nth-child(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background-color: #ddd;
  }
`;
export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-transform: capitalize;
`;
