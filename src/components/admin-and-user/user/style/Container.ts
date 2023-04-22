import styled from "styled-components";

interface IContainer {
    isLoading: boolean
    isError: boolean
}

const Container = styled.div`
    position: absolute;
    top: 18%;

    width: 70%;
    height: 70%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${({ isError, isLoading }: IContainer) => isError || isLoading ? '2rem' : ''};

    width: 80%;
    padding: 20px;

`
export default Container;