import styled from "styled-components";

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

export const CategoryItems = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    column-gap: 1rem;
    row-gap: 2rem;
`;

export const CategoryHeader = styled.h2`
    cursor: pointer;
    display: inline-block;
    padding: 0 1.5rem 0.5rem;

    &:hover {
        outline: 1px solid grey;
    }
`;