// import React from 'react';
// import {
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   FormHelperText,
//   Autocomplete,
//   Chip,
//   Box,
//   Typography,
//   FormControlLabel,
//   Checkbox,
//   RadioGroup,
//   Radio,
//   InputAdornment,
//   IconButton,
//   Tooltip
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { he } from 'date-fns/locale';
// import InfoIcon from '@mui/icons-material/Info';
// import ClearIcon from '@mui/icons-material/Clear';

// const StyledFormControl = styled(FormControl)(({ theme }) => ({
//   '& .MuiOutlinedInput-root': {
//     borderRadius: '12px',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     },
//     '&.Mui-focused': {
//       boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
//     }
//   },
//   '& .MuiInputLabel-root': {
//     fontWeight: 'medium',
//   }
// }));

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiOutlinedInput-root': {
//     borderRadius: '12px',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     },
//     '&.Mui-focused': {
//       boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
//     }
//   },
//   '& .MuiInputLabel-root': {
//     fontWeight: 'medium',
//   }
// }));

// const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
//   '& .MuiOutlinedInput-root': {
//     borderRadius: '12px',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     },
//     '&.Mui-focused': {
//       boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
//     }
//   }
// }));

// const FieldContainer = styled(Box)(({ theme }) => ({
//   marginBottom: theme.spacing(3),
//   position: 'relative'
// }));

// const FieldLabel = styled(Typography)(({ theme }) => ({
//     fontWeight: 'bold',
//     marginBottom: theme.spacing(1),
//     color: theme.palette.text.primary,
//     display: 'flex',
//     alignItems: 'center',
//     gap: theme.spacing(1)
//   }));
  
//   const RequiredIndicator = styled('span')(({ theme }) => ({
//     color: theme.palette.error.main,
//     fontSize: '1.2em'
//   }));
  
//   const FieldDescription = styled(Typography)(({ theme }) => ({
//     fontSize: '0.875rem',
//     color: theme.palette.text.secondary,
//     marginBottom: theme.spacing(1),
//     fontStyle: 'italic'
//   }));
  
//   export const FormField = ({
//     type = 'text',
//     name,
//     label,
//     value,
//     onChange,
//     onBlur,
//     error,
//     helperText,
//     required = false,
//     disabled = false,
//     placeholder,
//     options = [],
//     multiple = false,
//     maxSelections,
//     description,
//     tooltip,
//     startAdornment,
//     endAdornment,
//     rows = 4,
//     maxLength,
//     pattern,
//     min,
//     max,
//     step,
//     fullWidth = true,
//     size = 'medium',
//     variant = 'outlined',
//     language = 'he',
//     ...props
//   }) => {
//     const isRTL = language === 'he';
//     const hasError = Boolean(error);
  
//     const handleChange = (event, newValue) => {
//       if (type === 'autocomplete' || type === 'multiselect') {
//         onChange(newValue);
//       } else if (type === 'checkbox') {
//         onChange(event.target.checked);
//       } else if (type === 'date') {
//         onChange(newValue);
//       } else {
//         onChange(event.target.value);
//       }
//     };
  
//     const handleClear = () => {
//       if (multiple || type === 'multiselect') {
//         onChange([]);
//       } else {
//         onChange('');
//       }
//     };
  
//     const renderLabel = () => (
//       <FieldLabel variant="subtitle2">
//         {label}
//         {required && <RequiredIndicator>*</RequiredIndicator>}
//         {tooltip && (
//           <Tooltip title={tooltip} arrow>
//             <InfoIcon fontSize="small" color="action" />
//           </Tooltip>
//         )}
//       </FieldLabel>
//     );
  
//     const renderDescription = () => (
//       description && <FieldDescription>{description}</FieldDescription>
//     );
  
//     const renderTextField = () => (
//       <StyledTextField
//         name={name}
//         value={value || ''}
//         onChange={handleChange}
//         onBlur={onBlur}
//         error={hasError}
//         helperText={error || helperText}
//         required={required}
//         disabled={disabled}
//         placeholder={placeholder}
//         fullWidth={fullWidth}
//         size={size}
//         variant={variant}
//         type={type}
//         multiline={type === 'textarea'}
//         rows={type === 'textarea' ? rows : undefined}
//         inputProps={{
//           maxLength,
//           pattern,
//           min,
//           max,
//           step,
//           dir: isRTL ? 'rtl' : 'ltr'
//         }}
//         InputProps={{
//           startAdornment: startAdornment && (
//             <InputAdornment position="start">{startAdornment}</InputAdornment>
//           ),
//           endAdornment: (
//             <>
//               {value && !disabled && (
//                 <InputAdornment position="end">
//                   <IconButton
//                     size="small"
//                     onClick={handleClear}
//                     edge="end"
//                   >
//                     <ClearIcon fontSize="small" />
//                   </IconButton>
//                 </InputAdornment>
//               )}
//               {endAdornment && (
//                 <InputAdornment position="end">{endAdornment}</InputAdornment>
//               )}
//             </>
//           )
//         }}
//         {...props}
//       />
//     );
  
//     const renderSelect = () => (
//       <StyledFormControl
//         fullWidth={fullWidth}
//         size={size}
//         variant={variant}
//         error={hasError}
//         required={required}
//         disabled={disabled}
//       >
//         <InputLabel>{placeholder || label}</InputLabel>
//         <Select
//           name={name}
//           value={value || ''}
//           onChange={handleChange}
//           onBlur={onBlur}
//           multiple={multiple}
//           renderValue={multiple ? (selected) => (
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//               {selected.map((item) => (
//                 <Chip
//                   key={typeof item === 'object' ? item.value : item}
//                   label={typeof item === 'object' ? item.label : item}
//                   size="small"
//                   variant="outlined"
//                 />
//               ))}
//             </Box>
//           ) : undefined}
//           {...props}
//         >
//           {options.map((option) => (
//             <MenuItem
//               key={typeof option === 'object' ? option.value : option}
//               value={typeof option === 'object' ? option.value : option}
//               disabled={
//                 multiple && 
//                 maxSelections && 
//                 Array.isArray(value) && 
//                 value.length >= maxSelections && 
//                 !value.includes(typeof option === 'object' ? option.value : option)
//               }
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
//                 {option.icon && <span>{option.icon}</span>}
//                 <Box sx={{ flexGrow: 1 }}>
//                   <Typography variant="body2" fontWeight="medium">
//                     {typeof option === 'object' ? option.label : option}
//                   </Typography>
//                   {option.description && (
//                     <Typography variant="caption" color="text.secondary">
//                       {option.description}
//                     </Typography>
//                   )}
//                 </Box>
//                 {option.flag && <span>{option.flag}</span>}
//               </Box>
//             </MenuItem>
//           ))}
//         </Select>
//         {(error || helperText) && (
//           <FormHelperText>{error || helperText}</FormHelperText>
//         )}
//       </StyledFormControl>
//     );
  
//     const renderAutocomplete = () => (
//       <StyledAutocomplete
//         options={options}
//         value={value}
//         onChange={handleChange}
//         onBlur={onBlur}
//         multiple={multiple}
//         disabled={disabled}
//         getOptionLabel={(option) => 
//           typeof option === 'object' ? option.label || option.name : option
//         }
//         isOptionEqualToValue={(option, value) => {
//           if (typeof option === 'object' && typeof value === 'object') {
//             return option.value === value.value || option.name === value.name;
//           }
//           return option === value;
//         }}
//         renderOption={(props, option) => (
//           <Box component="li" {...props}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
//               {option.icon && <span>{option.icon}</span>}
//               {option.flag && <span>{option.flag}</span>}
//               <Box sx={{ flexGrow: 1 }}>
//                 <Typography variant="body2" fontWeight="medium">
//                   {typeof option === 'object' ? option.label || option.name : option}
//                 </Typography>
//                 {option.description && (
//                   <Typography variant="caption" color="text.secondary">
//                     {option.description}
//                   </Typography>
//                 )}
//                 {option.region && (
//                   <Typography variant="caption" color="primary.main">
//                     {option.region}
//                   </Typography>
//                 )}
//               </Box>
//             </Box>
//           </Box>
//         )}
//         renderTags={(value, getTagProps) =>
//           value.map((option, index) => (
//             <Chip
//               {...getTagProps({ index })}
//               key={typeof option === 'object' ? option.value || option.name : option}
//               label={typeof option === 'object' ? option.label || option.name : option}
//               size="small"
//               variant="outlined"
//               disabled={disabled}
//             />
//           ))
//         }
//         renderInput={(params) => (
//           <StyledTextField
//             {...params}
//             placeholder={placeholder}
//             error={hasError}
//             helperText={error || helperText}
//             required={required}
//             inputProps={{
//               ...params.inputProps,
//               dir: isRTL ? 'rtl' : 'ltr'
//             }}
//           />
//         )}
//         limitTags={3}
//         {...props}
//       />
//     );
  
//     const renderDatePicker = () => (
//       <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={isRTL ? he : undefined}>
//         <DatePicker
//           value={value}
//           onChange={handleChange}
//           disabled={disabled}
//           renderInput={(params) => (
//             <StyledTextField
//               {...params}
//               name={name}
//               onBlur={onBlur}
//               error={hasError}
//               helperText={error || helperText}
//               required={required}
//               fullWidth={fullWidth}
//               size={size}
//               variant={variant}
//               placeholder={placeholder}
//             />
//           )}
//           {...props}
//         />
//       </LocalizationProvider>
//     );
  
//     const renderCheckbox = () => (
//       <FormControlLabel
//         control={
//           <Checkbox
//             name={name}
//             checked={Boolean(value)}
//             onChange={handleChange}
//             onBlur={onBlur}
//             disabled={disabled}
//             color="primary"
//             {...props}
//           />
//         }
//         label={
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             {label}
//             {required && <RequiredIndicator>*</RequiredIndicator>}
//             {tooltip && (
//               <Tooltip title={tooltip} arrow>
//                 <InfoIcon fontSize="small" color="action" />
//               </Tooltip>
//             )}
//           </Box>
//         }
//         sx={{
//           alignItems: 'flex-start',
//           '& .MuiFormControlLabel-label': {
//             fontSize: '0.95rem',
//             lineHeight: 1.4
//           }
//         }}
//       />
//     );
  
//     const renderRadioGroup = () => (
//       <StyledFormControl
//         component="fieldset"
//         error={hasError}
//         required={required}
//         disabled={disabled}
//         fullWidth={fullWidth}
//       >
//         <RadioGroup
//           name={name}
//           value={value || ''}
//           onChange={handleChange}
//           onBlur={onBlur}
//           row={options.length <= 3}
//         >
//           {options.map((option) => (
//             <FormControlLabel
//               key={typeof option === 'object' ? option.value : option}
//               value={typeof option === 'object' ? option.value : option}
//               control={<Radio color="primary" />}
//               label={
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   {option.icon && <span>{option.icon}</span>}
//                   <Box>
//                     <Typography variant="body2" fontWeight="medium">
//                       {typeof option === 'object' ? option.label : option}
//                     </Typography>
//                     {option.description && (
//                       <Typography variant="caption" color="text.secondary">
//                         {option.description}
//                       </Typography>
//                     )}
//                   </Box>
//                 </Box>
//               }
//               disabled={disabled}
//             />
//           ))}
//         </RadioGroup>
//         {(error || helperText) && (
//           <FormHelperText>{error || helperText}</FormHelperText>
//         )}
//       </StyledFormControl>
//     );
  
//     const renderField = () => {
//       switch (type) {
//         case 'select':
//           return renderSelect();
//         case 'autocomplete':
//         case 'multiselect':
//           return renderAutocomplete();
//         case 'date':
//           return renderDatePicker();
//         case 'checkbox':
//           return renderCheckbox();
//         case 'radio':
//           return renderRadioGroup();
//         case 'text':
//         case 'email':
//         case 'tel':
//         case 'password':
//         case 'number':
//         case 'textarea':
//         default:
//           return renderTextField();
//       }
//     };
  
//     return (
//       <FieldContainer>
//         {type !== 'checkbox' && renderLabel()}
//         {renderDescription()}
//         {renderField()}
//         {maxLength && type === 'textarea' && (
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 0.5 }}>
//             <Typography variant="caption" color="text.secondary">
//               {(value?.length || 0)} / {maxLength}
//             </Typography>
//           </Box>
//         )}
//       </FieldContainer>
//     );
//   };
  
//   export default FormField;
  
