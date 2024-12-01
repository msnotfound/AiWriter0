import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
const Card = styled.div`
  max-width: 500px;
  padding: 40px;
  border-radius: 24px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
`;

const FeaturesCard = ({ image, title, children }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <div>{children}</div>
    </Card>
  );
};
FeaturesCard.propTypes = {
    children: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
  };

export default FeaturesCard;