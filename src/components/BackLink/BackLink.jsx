import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <div>
      <StyledLink to={to}>{children}</StyledLink>
    </div>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};
