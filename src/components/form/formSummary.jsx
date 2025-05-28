// import React from 'react';
// import {
//   Box,
//   Typography,
//   Paper,
//   Grid,
//   Chip,
//   Divider,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Avatar,
//   Card,
//   CardContent,
//   CardHeader,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Button,
//   IconButton,
//   Tooltip
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import PersonIcon from '@mui/icons-material/Person';
// import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
// import SchoolIcon from '@mui/icons-material/School';
// import BookIcon from '@mui/icons-material/Book';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import EditIcon from '@mui/icons-material/Edit';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import LanguageIcon from '@mui/icons-material/Language';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import GroupIcon from '@mui/icons-material/Group';

// const SummaryContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: theme.spacing(3)
// }));

// const SummaryCard = styled(Card)(({ theme }) => ({
//   borderRadius: '16px',
//   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//   border: `1px solid ${theme.palette.divider}`,
//   overflow: 'hidden',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
//     transform: 'translateY(-2px)'
//   }
// }));

// const SummaryHeader = styled(CardHeader)(({ theme }) => ({
//   background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//   color: theme.palette.common.white,
//   '& .MuiCardHeader-title': {
//     fontWeight: 'bold',
//     fontSize: '1.2rem'
//   },
//   '& .MuiCardHeader-subheader': {
//     color: 'rgba(255, 255, 255, 0.8)'
//   }
// }));

// const InfoItem = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: theme.spacing(2),
//   padding: theme.spacing(1.5),
//   borderRadius: '8px',
//   transition: 'background-color 0.2s ease',
//   '&:hover': {
//     backgroundColor: theme.palette.action.hover
//   }
// }));

// const InfoLabel = styled(Typography)(({ theme }) => ({
//   fontWeight: 'medium',
//   color: theme.palette.text.secondary,
//   minWidth: '120px'
// }));

// const InfoValue = styled(Typography)(({ theme }) => ({
//   fontWeight: 'bold',
//   color: theme.palette.text.primary,
//   flexGrow: 1
// }));

// const ChipContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexWrap: 'wrap',
//   gap: theme.spacing(1),
//   marginTop: theme.spacing(1)
// }));

// export const FormSummary = ({
//   formData,
//   onEdit,
//   language = 'he',
//   editable = true,
//   showEditButtons = true,
//   compact = false
// }) => {
//   const isRTL = language === 'he';

//   const texts = {
//     he: {
//       personalInfo: 'פרטים אישיים',
//       contactInfo: 'פרטי קשר',
//       backgroundInfo: 'רקע ומעמד',
//       learningPreferences: 'העדפות לימוד',
//       firstName: 'שם פרטי',
//       lastName: 'שם משפחה',
//       id: 'תעודת זהות',
//       birthDate: 'תאריך לידה',
//       gender: 'מין',
//       email: 'דואר אלקטרוני',
//       phone: 'טלפון נייד',
//       country: 'מדינה',
//       city: 'עיר',
//       role: 'תפקיד/מעמד',
//       denomination: 'זרם דתי',
//       learningLevel: 'רמת לימוד',
//       studyMethods: 'שיטות לימוד',
//       studyTimes: 'זמני לימוד',
//       preferredSubjects: 'נושאי לימוד מועדפים',
//       languages: 'שפות',
//       additionalInfo: 'מידע נוסף',
//       edit: 'עריכה',
//       male: 'זכר',
//       female: 'נקבה',
//       other: 'אחר',
//       noData: 'לא צוין',
//       summary: 'סיכום הפרטים',
//       confirmDetails: 'אנא בדוק את הפרטים ואשר את נכונותם'
//     },
//     en: {
//       personalInfo: 'Personal Information',
//       contactInfo: 'Contact Information',
//       backgroundInfo: 'Background & Status',
//       learningPreferences: 'Learning Preferences',
//       firstName: 'First Name',
//       lastName: 'Last Name',
//       id: 'ID Number',
//       birthDate: 'Birth Date',
//       gender: 'Gender',
//       email: 'Email',
//       phone: 'Mobile Phone',
//       country: 'Country',
//       city: 'City',
//       role: 'Role/Status',
//       denomination: 'Religious Stream',
//       learningLevel: 'Learning Level',
//       studyMethods: 'Study Methods',
//       studyTimes: 'Study Times',
//       preferredSubjects: 'Preferred Subjects',
//       languages: 'Languages',
//       additionalInfo: 'Additional Information',
//       edit: 'Edit',
//       male: 'Male',
//       female: 'Female',
//       other: 'Other',
//       noData: 'Not specified',
//       summary: 'Summary of Details',
//       confirmDetails: 'Please review your details and confirm their accuracy'
//     }
//   };

//   const t = texts[language];

//   const formatDate = (dateString) => {
//     if (!dateString) return t.noData;
//     const date = new Date(dateString);
//     return isRTL 
//       ? date.toLocaleDateString('he-IL')
//       : date.toLocaleDateString('en-US');
//   };

//   const formatGender = (gender) => {
//     const genderMap = {
//       male: t.male,
//       female: t.female,
//       other: t.other
//     };
//     return genderMap[gender] || t.noData;
//   };

//   const formatArray = (array) => {
//     if (!array || array.length === 0) return t.noData;
//     return array.map(item => 
//       typeof item === 'object' ? item.label || item.name : item
//     );
//   };

//   const renderInfoItem = (label, value, icon, stepIndex) => (
//     <InfoItem>
//       <Avatar sx={{ bgcolor: 'primary.light', width: 32, height: 32 }}>
//         {icon}
//       </Avatar>
//       <Box sx={{ flexGrow: 1 }}>
//         <InfoLabel variant="body2">{label}</InfoLabel>
//         <InfoValue variant="body1">
//           {value || t.noData}
//         </InfoValue>
//       </Box>
//       {showEditButtons && editable && onEdit && (
//         <Tooltip title={t.edit}>
//           <IconButton
//             size="small"
//             onClick={() => onEdit(stepIndex)}
//             sx={{
//               bgcolor: 'action.hover',
//               '&:hover': { bgcolor: 'primary.light', color: 'primary.contrastText' }
//             }}
//           >
//             <EditIcon fontSize="small" />
//           </IconButton>
//         </Tooltip>
//       )}
//     </InfoItem>
//   );

//   const renderChips = (items, color = 'primary') => (
//     <ChipContainer>
//       {formatArray(items).map((item, index) => (
//         <Chip
//           key={index}
//           label={item}
//           size="small"
//           color={color}
//           variant="outlined"
//           sx={{ fontWeight: 'medium' }}
//         />
//       ))}
//     </ChipContainer>
//   );

//   const personalInfoSection = (
//     <SummaryCard>
//       <SummaryHeader
//         avatar={<PersonIcon />}
//         title={t.personalInfo}
//         action={
//           showEditButtons && editable && onEdit && (
//             <IconButton color="inherit" onClick={() => onEdit(0)}>
//               <EditIcon />
//             </IconButton>
//           )
//         }
//       />
//       <CardContent>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             {renderInfoItem(t.firstName, formData.firstName, <PersonIcon fontSize="small" />, 0)}
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             {renderInfoItem(t.lastName, formData.lastName, <PersonIcon fontSize="small" />, 0)}
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             {renderInfoItem(t.id, formData.id, <PersonIcon fontSize="small" />, 0)}
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             {renderInfoItem(t.birthDate, formatDate(formData.birthDate), <PersonIcon fontSize="small" />, 0)}
//           </Grid>
//           <Grid item xs={12}>
//             {renderInfoItem(t.gender, formatGender(formData.gender), <PersonIcon fontSize="small" />, 0)}
//           </Grid>
//         </Grid>
//       </CardContent>
//     </SummaryCard>
//   );

//   const contactInfoSection = (
//     <SummaryCard>
//       <SummaryHeader
//         avatar={<ContactPhoneIcon />}
//         title={t.contactInfo}
//         action={
//           showEditButtons && editable && onEdit && (
//             <IconButton color="inherit" onClick={() => onEdit(1)}>
//               <EditIcon />
//             </IconButton>
//           )
//         }
//       />
//       <CardContent>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             {renderInfoItem(t.email, formData.email, <ContactPhoneIcon fontSize="small" />, 1)}
//           </Grid>
//           <Grid item xs={12}>
//             {renderInfoItem(t.phone, formData.cellularTelephone, <ContactPhoneIcon fontSize="small" />, 1)}
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             {renderInfoItem(
//               t.country, 
//               formData.country?.name || formData.country, 
//               <ContactPhoneIcon fontSize="small" />, 
//               1
//             )}
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             {renderInfoItem(
//               t.city, 
//               formData.city?.name || formData.city, 
//               <ContactPhoneIcon fontSize="small" />, 
//               1
//             )}
//           </Grid>
//         </Grid>
//       </CardContent>
//     </SummaryCard>
//   );

//   const backgroundInfoSection = (
//     <SummaryCard>
//       <SummaryHeader
//         avatar={<SchoolIcon />}
//         title={t.backgroundInfo}
//         action={
//           showEditButtons && editable && onEdit && (
//             <IconButton color="inherit" onClick={() => onEdit(2)}>
//               <EditIcon />
//             </IconButton>
//           )
//         }
//       />
//       <CardContent>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             {renderInfoItem(
//               t.role, 
//               formData.role?.label || formData.role, 
//               <SchoolIcon fontSize="small" />, 
//               2
//             )}
//           </Grid>
//           <Grid item xs={12}>
//             {renderInfoItem(
//               t.denomination, 
//               formData.denomination?.label || formData.denomination, 
//               <SchoolIcon fontSize="small" />, 
//               2
//             )}
//           </Grid>
//           <Grid item xs={12}>
//             {renderInfoItem(
//               t.learningLevel, 
//               formData.learningLevel?.label || formData.learningLevel, 
//               <SchoolIcon fontSize="small" />, 
//               2
//             )}
//           </Grid>
//         </Grid>
//       </CardContent>
//     </SummaryCard>
//   );

//   const learningPreferencesSection = (
//     <SummaryCard>
//       <SummaryHeader
//         avatar={<BookIcon />}
//         title={t.learningPreferences}
//         action={
//           showEditButtons && editable && onEdit && (
//             <IconButton color="inherit" onClick={() => onEdit(3)}>
//               <EditIcon />
//             </IconButton>
//           )
//         }
//       />
//       <CardContent>
//         <Box sx={{ mb: 3 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//             <GroupIcon color="primary" fontSize="small" />
//             <Typography variant="subtitle2" fontWeight="bold">
//               {t.studyMethods}
//             </Typography>
//           </Box>
//           {renderChips(formData.studyMethods, 'primary')}
//         </Box>

//         <Box sx={{ mb: 3 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//             <AccessTimeIcon color="secondary" fontSize="small" />
//             <Typography variant="subtitle2" fontWeight="bold">
//               {t.studyTimes}
//             </Typography>
//           </Box>
//           {renderChips(formData.studyTimes, 'secondary')}
//         </Box>

//         <Box sx={{ mb: 3 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//             <BookIcon color="success" fontSize="small" />
//             <Typography variant="subtitle2" fontWeight="bold">
//               {t.preferredSubjects}
//             </Typography>
//           </Box>
//           {renderChips(formData.preferredSubjects, 'success')}
//         </Box>

//         <Box sx={{ mb: 3 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//             <LanguageIcon color="info" fontSize="small" />
//             <Typography variant="subtitle2" fontWeight="bold">
//               {t.languages}
//             </Typography>
//           </Box>
//           {renderChips(formData.languages, 'info')}
//         </Box>

//         {formData.additionalInfo && (
//           <Box>
//             <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
//               {t.additionalInfo}
//             </Typography>
//             <Paper 
//               sx={{ 
//                 p: 2, 
//                 bgcolor: 'grey.50', 
//                 borderRadius: 2,
//                 border: '1px solid',
//                 borderColor: 'grey.200'
//               }}
//             >
//               <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
//                 {formData.additionalInfo}
//               </Typography>
//             </Paper>
//           </Box>
//         )}
//       </CardContent>
//     </SummaryCard>
//   );

//   if (compact) {
//     return (
//       <SummaryContainer>
//         <Box sx={{ textAlign: 'center', mb: 3 }}>
//           <CheckCircleIcon sx={{ fontSize: 48, color: 'success.main', mb: 1 }} />
//           <Typography variant="h5" fontWeight="bold" gutterBottom>
//             {t.summary}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {t.confirmDetails}
//           </Typography>
//         </Box>

//         <Accordion defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography variant="h6" fontWeight="bold">
//               {t.personalInfo}
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             {personalInfoSection}
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography variant="h6" fontWeight="bold">
//               {t.contactInfo}
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             {contactInfoSection}
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography variant="h6" fontWeight="bold">
//               {t.backgroundInfo}
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             {backgroundInfoSection}
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography variant="h6" fontWeight="bold">
//               {t.learningPreferences}
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             {learningPreferencesSection}
//           </AccordionDetails>
//         </Accordion>
//       </SummaryContainer>
//     );
//   }

//   return (
//     <SummaryContainer>
//       <Box sx={{ textAlign: 'center', mb: 4 }}>
//         <CheckCircleIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
//         <Typography variant="h4" fontWeight="bold" gutterBottom>
//           {t.summary}
//         </Typography>
//         <Typography variant="h6" color="text.secondary">
//           {t.confirmDetails}
//         </Typography>
//       </Box>

//       {personalInfoSection}
//       {contactInfoSection}
//       {backgroundInfoSection}
//       {learningPreferencesSection}
//     </SummaryContainer>
//   );
// };

// export default FormSummary;

