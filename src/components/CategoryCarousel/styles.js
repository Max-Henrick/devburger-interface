import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 25px 0;

  .rec.rec-arrow {
    background-color: #86b404;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #86b404;
    background-color: #efefef;
    color: #86b404;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
`

export const CategoryImg = styled.img``

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const ImageCarousel = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled.button`
  background: #86b404;
  box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22),
    0px 20px 40px rgba(151, 88, 166, 0.24);
  border-radius: 8px;
  border: none;
  height: 50px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
