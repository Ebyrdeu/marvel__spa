import styled from 'styled-components';

// wrapper
export const CharWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`

// Left side
export const CharBlock = styled.div`
  padding: 40px 35px;
  display: grid;
  grid-template-columns: 180px auto;
  column-gap: 30px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  p:nth-child(1) {
    font-weight: bold;
    font-size: 22px;
    text-transform: uppercase;
  }

  p:nth-child(2) {
    font-size: 14px;
    line-height: 18px;
  }

  a:nth-child(1) {
    margin-right: 30px;
  }

  button {
    background-color: #9F0013;
    transition: 0.3s  ease-in-out;
  }

  a > button:hover {
    transform: translateY(-10px);
    transition: 0.3s ease-in-out;
    background-color: #9F0013;
  }
`


// Right side
export const CharStatic = styled.div`
  padding: 40px 35px;
  border-radius: 0 5px 5px 0;
  background: #232222FF;
  position: relative;

  p {
    font-size: 24px;
    font-weight: bold;
    color: white;
  }
  
  p:nth-child(2) {
    margin-top: 30px;
  }

  img {
    position: absolute;
    right: -80px;
    bottom: -45px;
    margin-top: 33px;
  }

  button {
    transition: 0.3s  ease-in-out;
    margin-top: 13px;
    background-color: #9F0013;
    width: 150px;
  }

  button:hover {
    transform: translateY(-10px);
    transition: 0.3s ease-in-out;
    background-color: #9F0013;
  }
`