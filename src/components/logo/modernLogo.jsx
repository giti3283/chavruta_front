import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Animation keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Styled components
const LogoContainer = styled(Box)(({ theme, animated, size }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: animated ? 'scale(1.05)' : 'none',
  }
}));

const LogoIcon = styled(Box)(({ theme, animated, size }) => ({
  width: size || 50,
  height: size || 50,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #2E5266 0%, #D4A574 50%, #8B4513 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 4px 15px rgba(46, 82, 102, 0.3)',
  animation: animated ? `${pulse} 2s ease-in-out infinite` : 'none',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
    animation: animated ? `${shimmer} 3s infinite` : 'none',
  },
  
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%',
    border: '2px solid rgba(255,255,255,0.2)',
    borderRadius: '50%',
    animation: animated ? `${rotate} 10s linear infinite` : 'none',
  }
}));

const HebrewText = styled(Typography)(({ theme, size }) => ({
  fontSize: (size || 50) * 0.4,
  fontWeight: 'bold',
  color: 'white',
  fontFamily: '"Noto Sans Hebrew", "Arial Hebrew", sans-serif',
  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
  zIndex: 2,
  position: 'relative',
}));

const LogoText = styled(Typography)(({ theme, size }) => ({
  fontSize: (size || 50) * 0.3,
  fontWeight: 'bold',
  marginLeft: theme.spacing(1),
  background: 'linear-gradient(135deg, #2E5266 0%, #D4A574 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontFamily: '"Noto Sans Hebrew", "Arial Hebrew", sans-serif',
}));

const ModernChavrutaLogo = ({ 
  size = 50, 
  animated = true, 
  showText = true, 
  onClick,
  onMouseEnter,
  onMouseLeave 
}) => {
  return (
    <LogoContainer
      animated={animated}
      size={size}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <LogoIcon animated={animated} size={size}>
        <HebrewText size={size}>
          חב
        </HebrewText>
      </LogoIcon>
      
      {showText && (
        <LogoText size={size}>
          חברותא
        </LogoText>
      )}
    </LogoContainer>
  );
};

export default ModernChavrutaLogo;
