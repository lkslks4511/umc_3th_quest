import styled from "styled-components";

export const MovieContainer = styled.div`
  width: 180px;
  margin: 10px;
  background-color: #373B69;
  color: white;
  border: 1px solid black;
  border-radius: 5px;

  img {
    max-width: 100%;
  }
`;

export const MovieInfo = styled.div`
  position: relative;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: 11px ;
`;

export const Overview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
  color : white;
  width: 100%;
  padding : 10px;
  opacity: 0;
  transition: opacity 0.3s;
`;