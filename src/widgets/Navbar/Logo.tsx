import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex/Flex";
import { MobileIcon } from "./icons";

interface Props {
  isPushed?: boolean;
  isDark?: boolean;
  togglePush?: () => void;
  href?: string;
  logourl?: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 2px;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href, logourl }) => {
  return (
    <Flex>
      <StyledLink as="a" href={href} aria-label="home page">
        <img src={logourl} height={40} alt="" />
      </StyledLink>
    </Flex>
  );
};

export default Logo;
