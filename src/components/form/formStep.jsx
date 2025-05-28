// import React from 'react';
// import {
//   Box,
//   Paper,
//   Typography,
//   Stepper,
//   Step,
//   StepLabel,
//   StepContent,
//   Button,
//   LinearProgress,
//   Fade,
//   Slide,
//   Chip,
//   IconButton,
//   Tooltip,
//   Alert,
//   Collapse
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import SaveIcon from '@mui/icons-material/Save';
// import WarningIcon from '@mui/icons-material/Warning';

// const StepContainer = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   borderRadius: '20px',
//   background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
//   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//   border: `1px solid ${theme.palette.divider}`,
//   position: 'relative',
//   overflow: 'hidden',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: '4px',
//     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//   }
// }));

// const StepHeader = styled(Box)(({ theme }) => ({
//   marginBottom: theme.spacing(3),
//   textAlign: 'center'
// }));

// const StepTitle = styled(Typography)(({ theme }) => ({
//   fontWeight: 'bold',
//   marginBottom: theme.spacing(1),
//   background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//   backgroundClip: 'text',
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
// }));

// const StepDescription = styled(Typography)(({ theme }) => ({
//     color: theme.palette.text.secondary,
//     marginBottom: theme.spacing(2)
//   }));
  

  
//   const StepNavigation = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: theme.spacing(4),
//     paddingTop: theme.spacing(3),
//     borderTop: `1px solid ${theme.palette.divider}`,
//     gap: theme.spacing(2),
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column',
//       gap: theme.spacing(2)
//     }
//   }));
  
//   const ProgressContainer = styled(Box)(({ theme }) => ({
//     marginBottom: theme.spacing(3)
//   }));
  
//   const StepIndicator = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: theme.spacing(1),
//     marginBottom: theme.spacing(2),
//     flexWrap: 'wrap'
//   }));
  
//   const StepDot = styled(Box)(({ theme, active, completed }) => ({
//     width: 12,
//     height: 12,
//     borderRadius: '50%',
//     backgroundColor: completed 
//       ? theme.palette.success.main 
//       : active 
//         ? theme.palette.primary.main 
//         : theme.palette.grey[300],
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     '&:hover': {
//       transform: 'scale(1.2)',
//       boxShadow: `0 0 0 4px ${theme.palette.primary.main}20`
//     }
//   }));
  
//   const ValidationAlert = styled(Alert)(({ theme }) => ({
//     marginBottom: theme.spacing(2),
//     borderRadius: '12px'
//   }));
  
//   export const FormStep = ({
//     stepIndex,
//     totalSteps,
//     stepInfo,
//     children,
//     onNext,
//     onPrev,
//     onGoToStep,
//     canGoNext = true,
//     canGoPrev = true,
//     isLoading = false,
//     errors = {},
//     completionStatus,
//     autoSave,
//     language = 'he',
//     showProgress = true,
//     showNavigation = true,
//     showStepIndicator = true,
//     customActions,
//     onSave,
//     ...props
//   }) => {
//     const isRTL = language === 'he';
//     const hasErrors = Object.keys(errors).length > 0;
//     const isLastStep = stepIndex === totalSteps - 1;
//     const isFirstStep = stepIndex === 0;
  
//     const texts = {
//       he: {
//         next: 'הבא',
//         prev: 'הקודם',
//         finish: 'סיום',
//         save: 'שמירה',
//         step: 'שלב',
//         of: 'מתוך',
//         completed: 'הושלם',
//         current: 'נוכחי',
//         validationErrors: 'יש לתקן את השגיאות הבאות:',
//         autoSaved: 'נשמר אוטומטית'
//       },
//       en: {
//         next: 'Next',
//         prev: 'Previous',
//         finish: 'Finish',
//         save: 'Save',
//         step: 'Step',
//         of: 'of',
//         completed: 'Completed',
//         current: 'Current',
//         validationErrors: 'Please fix the following errors:',
//         autoSaved: 'Auto-saved'
//       }
//     };
  
//     const t = texts[language];
  
//     const handleNext = () => {
//       if (onNext && canGoNext) {
//         onNext();
//       }
//     };
  
//     const handlePrev = () => {
//       if (onPrev && canGoPrev) {
//         onPrev();
//       }
//     };
  
//     const handleGoToStep = (targetStep) => {
//       if (onGoToStep) {
//         onGoToStep(targetStep);
//       }
//     };
  
//     const handleSave = () => {
//       if (onSave) {
//         onSave();
//       } else if (autoSave) {
//         autoSave();
//       }
//     };
  
//     const renderStepIndicator = () => (
//       <StepIndicator>
//         {Array.from({ length: totalSteps }, (_, index) => {
//           const stepStatus = completionStatus?.stepStatuses?.[index];
//           const isActive = index === stepIndex;
//           const isCompleted = stepStatus?.isComplete || false;
//           const canNavigate = isCompleted || index <= stepIndex + 1;
  
//           return (
//             <Tooltip
//               key={index}
//               title={`${t.step} ${index + 1}${isCompleted ? ` - ${t.completed}` : isActive ? ` - ${t.current}` : ''}`}
//               arrow
//             >
//               <StepDot
//                 active={isActive}
//                 completed={isCompleted}
//                 onClick={() => canNavigate && handleGoToStep(index)}
//                 sx={{
//                   cursor: canNavigate ? 'pointer' : 'default',
//                   opacity: canNavigate ? 1 : 0.5
//                 }}
//               />
//             </Tooltip>
//           );
//         })}
//       </StepIndicator>
//     );
  
//     const renderProgress = () => {
//       const progress = Math.round((stepIndex / (totalSteps - 1)) * 100);
//       const completionPercentage = completionStatus?.overallPercentage || 0;
  
//       return (
//         <ProgressContainer>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
//             <Typography variant="body2" color="text.secondary">
//               {t.step} {stepIndex + 1} {t.of} {totalSteps}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {progress}%
//             </Typography>
//           </Box>
//           <LinearProgress
//             variant="determinate"
//             value={progress}
//             sx={{
//               height: 8,
//               borderRadius: 4,
//               backgroundColor: 'grey.200',
//               '& .MuiLinearProgress-bar': {
//                 borderRadius: 4,
//                 background: `linear-gradient(90deg, ${stepIndex === 0 ? '#4caf50' : '#2196f3'} 0%, ${stepIndex === totalSteps - 1 ? '#ff9800' : '#9c27b0'} 100%)`
//               }
//             }}
//           />
//           {completionStatus && (
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
//               <Typography variant="caption" color="text.secondary">
//                 {t.completed}: {completionStatus.completedSteps}/{completionStatus.totalSteps}
//               </Typography>
//               <Chip
//                 size="small"
//                 label={`${completionPercentage}%`}
//                 color={completionPercentage === 100 ? 'success' : 'primary'}
//                 variant="outlined"
//               />
//             </Box>
//           )}
//         </ProgressContainer>
//       );
//     };
  
//     const renderValidationErrors = () => (
//       <Collapse in={hasErrors}>
//         <ValidationAlert severity="warning" icon={<WarningIcon />}>
//           <Typography variant="body2" fontWeight="medium" gutterBottom>
//             {t.validationErrors}
//           </Typography>
//           <Box component="ul" sx={{ margin: 0, paddingLeft: 2 }}>
//             {Object.entries(errors).map(([field, error]) => (
//               <Typography component="li" variant="body2" key={field}>
//                 {error}
//               </Typography>
//             ))}
//           </Box>
//         </ValidationAlert>
//       </Collapse>
//     );
  
//     const renderNavigation = () => (
//       <StepNavigation>
//         <Box sx={{ display: 'flex', gap: 1 }}>
//           {!isFirstStep && (
//             <Button
//               variant="outlined"
//               onClick={handlePrev}
//               disabled={!canGoPrev || isLoading}
//               startIcon={isRTL ? <ArrowForwardIcon /> : <ArrowBackIcon />}
//               sx={{ borderRadius: '12px' }}
//             >
//               {t.prev}
//             </Button>
//           )}
//         </Box>
  
//         <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//           {autoSave && (
//             <Tooltip title={t.autoSaved}>
//               <IconButton onClick={handleSave} size="small">
//                 <SaveIcon fontSize="small" />
//               </IconButton>
//             </Tooltip>
//           )}
          
//           {customActions}
//         </Box>
  
//         <Box sx={{ display: 'flex', gap: 1 }}>
//           <Button
//             variant="contained"
//             onClick={handleNext}
//             disabled={!canGoNext || isLoading}
//             endIcon={isLastStep ? <CheckCircleIcon /> : (isRTL ? <ArrowBackIcon /> : <ArrowForwardIcon />)}
//             sx={{
//               borderRadius: '12px',
//               minWidth: 120,
//               background: isLastStep 
//                 ? 'linear-gradient(45deg, #4caf50, #66bb6a)'
//                 : 'linear-gradient(45deg, #2196f3, #42a5f5)',
//               '&:hover': {
//                 background: isLastStep 
//                   ? 'linear-gradient(45deg, #388e3c, #4caf50)'
//                   : 'linear-gradient(45deg, #1976d2, #2196f3)',
//               }
//             }}
//           >
//             {isLastStep ? t.finish : t.next}
//           </Button>
//         </Box>
//       </StepNavigation>
//     );
  
//     return (
//       <Fade in timeout={500}>
//         <StepContainer {...props}>
//           <StepHeader>
//             {stepInfo && (
//               <>
//                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
//                   <Typography variant="h2" component="span">
//                     {stepInfo.icon}
//                   </Typography>
//                 </Box>
//                 <StepTitle variant="h4" component="h2">
//                   {stepInfo.title}
//                 </StepTitle>
//                 <StepDescription variant="body1">
//                   {stepInfo.description}
//                 </StepDescription>
//               </>
//             )}
            
//             {showStepIndicator && renderStepIndicator()}
//             {showProgress && renderProgress()}
//           </StepHeader>
  
//           {renderValidationErrors()}
  
//           <Slide direction={isRTL ? 'left' : 'right'} in timeout={300}>
//             <StepContent>
//               {children}
//             </StepContent>
//           </Slide>
  
//           {showNavigation && renderNavigation()}
//         </StepContainer>
//       </Fade>
//     );
//   };
  
//   export default FormStep;
  