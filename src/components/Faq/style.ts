import styled from "styled-components";

export const Section = styled.section`
.accordion-wrapper{
  
        margin-bottom: 2rem;
}
  .accordion-title {
    cursor: pointer;
    color: var(--title);
    padding: 1.5rem;
 
    border-radius: 0.4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    background: #191e25;

    &::after {
      content: "";
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid currentColor;
    }

    &.open {
      &::after {
        content: "";
        border-top: 0;
        border-bottom: 5px solid;
      }
    }
  }

  .accordion-item {
    overflow: hidden;
    transition: max-height 0.3s ease;

  

    background: #191e25;
    color: var(--text-body);
    max-height: 12rem;
    height: auto;

  }
  .accordion-item.collapsed {
    max-height: 0;

    transition: max-height 0.35s ease;
  }
  .accordion-content {
    padding:3rem;
  }
`;
