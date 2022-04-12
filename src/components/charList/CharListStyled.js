import styled from 'styled-components';

export const CharListStyled = styled.div`

  button {
    transition: 0.3s  ease-in-out;
    color: white;
    background-color: #9F0013;
    width: 150px;
    display: block;
    margin: 45px auto 0 auto;
  }

  button:hover {
    background-color: #9F0013;
    transform: translateY(-10px);
    transition: 0.3s ease-in-out;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 200px);
    column-gap: 25px;
    row-gap: 30px;
    margin: 0;
    padding-left: 0;
  }
  
  li {
    text-align: center;
    border-radius: 5px;
    width: 200px;
    height: 300px;
    background-color: #232222FF;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .25);
    cursor: pointer;
    transition: 0.3s transform;
  }

  img {
    border-radius: 5px 5px 0 0 ;
    height: 200px;
    width: 200px;
    object-fit: cover;
  }

  p {
    color: white;
    font-size: 22px;
    font-weight: bold;
  }

  .selected {
    box-shadow: 0 5px 20px #9F0013FF;
    transform: translateY(-8px);
  }
 
`