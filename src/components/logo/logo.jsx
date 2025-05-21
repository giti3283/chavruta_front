/**
 * Imports the React library, providing core functionality for building React components.
 * 
 * @module React
 * @requires react
 */
import React from 'react'
import { Typography, Box } from '@mui/material'

/**
 * רכיב הלוגו של Chavruta Match בצורת ספר
 * עם בליטה בצורת עיגול בחלק השמאלי ושקע תואם בחלק הימני
 * 
 * @component
 * @param {Object} props - מאפייני הרכיב
 * @param {boolean} props.isMobile - מציין האם הלוגו מוצג במכשיר נייד
 * @returns {React.ReactElement} קופסה המכילה את לוגו Chavruta Match
 */


















const ChavrutaLogo = ({ isMobile }) => {
  // Size configuration based on device type
  const logoSize = isMobile ? { width: '100px', height: '100px' } : { width: '150px', height: '150px' };

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...(!isMobile && { height: '100%' }),
      width: '100%'
    }}>
      <svg
        width={logoSize.width}
        height={logoSize.height}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Chavruta Match Logo"
      >
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1565c0" />
            <stop offset="100%" stopColor="#42a5f5" />
          </linearGradient>

          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#FFC107" />
          </linearGradient>

          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
          </filter>

          <filter id="textGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* הוספת מילוי מעניין יותר לטקסט */}
          <linearGradient id="textFancyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>

          {/* אפקט זוהר משופר לטקסט */}
          <filter id="enhancedTextGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#FFD700" floodOpacity="0.7" result="glowColor" />
            <feComposite in="glowColor" in2="blur" operator="in" result="softGlow" />
            <feComposite in="SourceGraphic" in2="softGlow" operator="over" />
          </filter>

          {/* אפקט תלת-ממדי לטקסט */}
          <filter id="textEmboss" x="-10%" y="-10%" width="120%" height="120%">
            <feOffset dx="2" dy="2" result="offsetBlur" />
            <feFlood floodColor="#8B4513" floodOpacity="0.8" />
            <feComposite in2="offsetBlur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left piece (left half of book) with semicircle indentation */}
        <path
          d="M120 120 
             L230 120 
             L230 220
             A25 25 0 0 0 230 270
             L230 390
             L120 390
             Z"
          fill="url(#blueGradient)"
          filter="url(#shadow)"
          opacity="0.9"
        />

        {/* Right piece (right half of book) - basic rectangle */}
        <path
          d="M390 120 
             L280 120 
             L280 390
             L390 390
             Z"
          fill="url(#blueGradient)"
          filter="url(#shadow)"
        />

        {/* Circle protrusion on right piece */}
        <circle
          cx="280"
          cy="245"
          r="25"
          fill="white"
          opacity="0.9"
          stroke="url(#goldGradient)"
          strokeWidth="2"
        />

        {/* Book pages - slightly smaller than cover */}
        <path
          d="M125 125 
             L225 125 
             L225 220
             A20 20 0 0 0 225 270
             L225 385
             L125 385
             Z"
          fill="white"
          opacity="0.9"
        />

        <path
          d="M385 125 
             L285 125 
             L285 385
             L385 385
             Z"
          fill="white"
          opacity="0.9"
        />

        {/* Book spine */}
        <path
          d="M255 130 L255 200 M255 290 L255 380"
          stroke="url(#goldGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="5,5"
        />

        {/* Book binding at top and bottom */}
        <path
          d="M120 120 L390 120"
          stroke="#1565c0"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <path
          d="M120 390 L390 390"
          stroke="#1565c0"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Decorative lines representing text - left side */}
        <path
          d="M150 160 L220 160 
             M150 180 L220 180 
             M150 200 L220 200
             M150 290 L220 290
             M150 310 L220 310
             M150 330 L220 330
             M150 350 L220 350"
          stroke="#1565c0"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Decorative lines representing text - right side */}
        <path
          d="M290 160 L360 160 
             M290 180 L360 180 
             M290 200 L360 200
             M290 290 L360 290
             M290 310 L360 310
             M290 330 L360 330
             M290 350 L360 350"
          stroke="#1565c0"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Bookmark */}
        <path
          d="M170 120 L170 150 L190 170 L170 190 L170 220"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />


        

        {/* טקסט קטן מתחת לטקסט הראשי בצד שמאל */}
        <text
          x="175"
          y="260"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Serif, David, Arial"
          fontSize="14"
          fill="#1565c0"
          filter="url(#textEmboss)"
        >
          לימוד בצוותא
        </text>

        {/* טקסט מעוצב בצד ימין - מאטש */}
        <text
          x="335"
          y="230"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Serif, David, Arial"
          fontSize="24"
          fontWeight="bold"
          fill="url(#textFancyGradient)"
          filter="url(#enhancedTextGlow)"
          letterSpacing="1"
          transform="rotate(3,335,230)"
          style={{
            paintOrder: "stroke fill",
            stroke: "#8B4513",
            strokeWidth: "1px",
            strokeLinejoin: "round"
          }}
        >
          מאטש
        </text>

        {/* טקסט קטן מתחת לטקסט הראשי בצד ימין */}
        <text
          x="335"
          y="260"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Serif, David, Arial"
          fontSize="14"
          fill="#1565c0"
          filter="url(#textEmboss)"
        >
          התאמה מושלמת
        </text>
      </svg>

      {!isMobile && (
        <Typography
          variant="h5"
          component="div"
          sx={{
            ml: 2,
            fontWeight: '800',
            background: 'linear-gradient(45deg, #1565c0 30%, #42a5f5 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontFamily: '"Montserrat", "Arial", sans-serif',
            letterSpacing: '1.5px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            textTransform: 'uppercase',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-5px',
              left: '0',
              width: '100%',
              height: '3px',
              background: 'linear-gradient(90deg, #1565c0, #42a5f5)',
              borderRadius: '2px'
            }
          }}
        >
          Chavruta Match
        </Typography>
      )}

      {isMobile && (
        <Typography
          variant="body1"
          component="div"
          sx={{
            ml: 1,
            fontWeight: '800',
            background: 'linear-gradient(45deg, #1565c0 30%, #42a5f5 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontFamily: '"Montserrat", "Arial", sans-serif',
            letterSpacing: '1px',
            textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
            textTransform: 'uppercase',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-3px',
              left: '0',
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, #1565c0, #42a5f5)',
              borderRadius: '1px'
            }
          }}
        >
          Chavruta Match
        </Typography>
      )}
    </Box>
  )
}

export default ChavrutaLogo