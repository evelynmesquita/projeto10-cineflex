import styled from "styled-components";

const Spinner = () => <ContainerLoader><Loader></Loader></ContainerLoader>;

export default Spinner;

const ContainerLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 150px;

`

const Loader = styled.div`
    border: 10px solid #f3f3f3;
    border-top: 10px solid rgb(232, 131, 58);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;

    @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
`