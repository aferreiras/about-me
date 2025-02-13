import styled from "styled-components";

export const ButtonContainer = styled.button<{ $isSidebarOpen: boolean }>`
  background: #1a1a1a;
  color: white;
  border: none;
  font-size: 10px;
  padding: 10px;
  position:  ${(props) => (!props.$isSidebarOpen ? "fixed" : "relative")};
  display: flex;
  align-items: center;
  top: 30px;
  height: 30px;
  width: 30px;
  border-radius: 0 20% 20% 0;

  > i {
    color: white;
    font-size: 13px;
  }
`;
