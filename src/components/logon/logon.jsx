// // בס"ד
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { AddPersonThunk } from "../../redux/Person/addPersonThunk"
// import { Navigate, useNavigate, useParams } from "react-router-dom";
// import './logon.css'
// import Autocomplete from '@mui/material/Autocomplete';
// import { Box, Button, FormControl, FormControlLabel, FormLabel, InputAdornment, inputBaseClasses, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// export const Logon = () => {

//     const dispatch = useDispatch()
//     const param = useParams()
//     const [person, setPerson] = useState({ id: param.id, firstName: param.firstName, lastName: param.lastName, birthDate: '', gender: 'male', status: 'single', cellularTelephone: '', telephone: '', country: '', city: '', email: '', role: '', denomination: 'generic' })
//     const navi = useNavigate()

//     const log = async () => {
//         dispatch(AddPersonThunk(person))
//         if (person.role === "request")
//             navi(`/request/${person.id}`)
//         else
//             navi(`/offer/${person.id}`)
//     }
//     return <div id="d">
//         <Box sx={{ m: 2, display: 'flex', flexWrap: 'wrap' }}>
//             <div>

//                 <h3>Hi ,{param.firstName} {param.lastName}</h3>
//                 <h4>Please fill in your details:</h4>
//                 <TextField value={person.birthDate} type="date" id="outlined-basic" label="BirthDate" variant="standard" onChange={x => setPerson({ ...person, birthDate: x.target.value })} />
//                 <FormControl fullWidth>
//                     <InputLabel id="demo-simple-select-label">Gender</InputLabel>
//                     <Select
//                         variant="standard"
//                         labelId="demo-simple-select-label"
//                         id="demo-simple-select"
//                         value={param.gender}
//                         label="gender"
//                         onChange={e => setPerson({ ...person, gender: e.target.value })}
//                     >
//                         <MenuItem value={"male"}>male</MenuItem>
//                         <MenuItem value={"female"}>female</MenuItem>
//                     </Select>
//                 </FormControl>
//                 <FormControl fullWidth>
//                     <InputLabel id="demo-simple-select-label">Status</InputLabel>
//                     <Select
//                         variant="standard"
//                         labelId="demo-simple-select-label"
//                         id="demo-simple-select"
//                         value={param.status}
//                         label="status"
//                         onChange={e => setPerson({ ...person, status: e.target.value })}
//                     >
//                         <MenuItem value={"single"}>single</MenuItem>
//                         <MenuItem value={"married"}>married</MenuItem>
//                         <MenuItem value={"divorce"}>divorce</MenuItem>
//                         <MenuItem value={"widower"}>widower</MenuItem>
//                     </Select>
//                 </FormControl>
//                 <FormControl fullWidth>
//                     <InputLabel id="demo-simple-select-label">denomination</InputLabel>
//                     <Select
//                         variant="standard"
//                         labelId="demo-simple-select-label"
//                         id="demo-simple-select"
//                         value={param.denomination}
//                         label="denomination"
//                         onChange={e => setPerson({ ...person, denomination: e.target.value })}
//                     >
//                         <MenuItem value={"spaniard"}>spaniard</MenuItem>
//                         <MenuItem value={"ashkenazi"}>ashkenazi</MenuItem>
//                         <MenuItem value={"yemeni"}>yemeni</MenuItem>
//                         <MenuItem value={"moroccan"}>moroccan</MenuItem>
//                         <MenuItem value={"generic"}>generic</MenuItem>
//                         <MenuItem value={"another"}>another</MenuItem>
//                     </Select> </FormControl>
//                 <TextField value={person.phone} id="outlined-basic" label="phone" variant="standard" onChange={x => setPerson({ ...person, phone: x.target.value })} />
//                 <TextField value={person.cellularTelephone} id="outlined-basic" label="cellularTelephone" variant="standard" onChange={x => setPerson({ ...person, cellularTelephone: x.target.value })} />
//                 {/* <TextField value={person.email} id="outlined-basic" label="email" variant="standard" onChange={x => setPerson({ ...person, email: x.target.value })} /> */}
//                 <TextField
//                     onChange={x => setPerson({ ...person, email: x.target.value+"@gmail.com" })}
//                     id="standard-suffix-shrink"
//                     label="Email"
//                     variant="standard"
//                     slotProps={{
//                         htmlInput: {
//                             sx: { textAlign: 'right' },
//                         },
//                         input: {
//                             endAdornment: (
//                                 <InputAdornment
//                                     position="end"
//                                     sx={{
//                                         alignSelf: 'flex-end',
//                                         marginBottom: '5px',
//                                         opacity: 0,
//                                         pointerEvents: 'none',
//                                         [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
//                                             opacity: 1,
//                                         },
//                                     }}
//                                 >
//                                     @gmail.com
//                                 </InputAdornment>
//                             ),
//                         },
//                     }}
//                 />
//                 <Autocomplete
//                     id="country-select-demo"
//                     sx={{ width: 300 }}
//                     options={countries}
//                     autoHighlight
//                     getOptionLabel={(option) => option.label}
//                     renderOption={(props, option) => {
//                         const { key, ...optionProps } = props;
//                         return (
//                             <Box
//                                 key={key}
//                                 component="li"
//                                 sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
//                                 {...optionProps}
//                             >
//                                 <img
//                                     loading="lazy"
//                                     width="20"
//                                     srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
//                                     src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
//                                     alt=""
//                                 />
//                                 {option.label} +{option.phone}
//                             </Box>
//                         );
//                     }}
//                     renderInput={(params) => (
//                         <TextField
//                             onClick={(e) => setPerson({ ...person, country: e.target.value })}
//                             variant="standard"
//                             {...params}
//                             label="Choose a country"
//                             slotProps={{
//                                 htmlInput: {
//                                     ...params.inputProps,
//                                     autoComplete: 'new-password', // disable autocomplete and autofill
//                                 },
//                             }}
//                         />
//                     )}
//                 />
//                 <TextField value={person.city} id="outlined-basic" label="city" variant="standard" onChange={x => setPerson({ ...person, city: x.target.value })} />
//                 <FormControl fullWidth>
//                     {/* <FormLabel id="demo-controlled-radio-buttons-group">Role</FormLabel> */}
//                     <RadioGroup
//                         aria-labelledby="demo-controlled-radio-buttons-group"
//                         name="controlled-radio-buttons-group"
//                         value={person.role}
//                         onChange={e => setPerson({ ...person, role: e.target.value })}
//                     >
//                         <FormControlLabel value="offer" control={<Radio />} label="offer" />
//                         <FormControlLabel value="request" control={<Radio />} label="request" />
//                     </RadioGroup>
//                 </FormControl>


                


//                 <Stack
//                     direction={{ xs: 'column', sm: 'row' }}
//                     spacing={{ xs: 1, sm: 2, md: 4 }}>
//                     <Button variant="outlined" onClick={() => Navigate('/login')}>back</Button>
//                     <Button variant="outlined" onClick={() => log()}>continue</Button>
//                 </Stack>

//             </div>
//         </Box>
//     </div>






// }

// // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
// const countries = [
//     { code: 'AD', label: 'Andorra', phone: '376' },
//     {
//         code: 'AE',
//         label: 'United Arab Emirates',
//         phone: '971',
//     },
//     { code: 'AF', label: 'Afghanistan', phone: '93' },
//     {
//         code: 'AG',
//         label: 'Antigua and Barbuda',
//         phone: '1-268',
//     },
//     { code: 'AI', label: 'Anguilla', phone: '1-264' },
//     { code: 'AL', label: 'Albania', phone: '355' },
//     { code: 'AM', label: 'Armenia', phone: '374' },
//     { code: 'AO', label: 'Angola', phone: '244' },
//     { code: 'AQ', label: 'Antarctica', phone: '672' },
//     { code: 'AR', label: 'Argentina', phone: '54' },
//     { code: 'AS', label: 'American Samoa', phone: '1-684' },
//     { code: 'AT', label: 'Austria', phone: '43' },
//     {
//         code: 'AU',
//         label: 'Australia',
//         phone: '61',
//         suggested: true,
//     },
//     { code: 'AW', label: 'Aruba', phone: '297' },
//     { code: 'AX', label: 'Alland Islands', phone: '358' },
//     { code: 'AZ', label: 'Azerbaijan', phone: '994' },
//     {
//         code: 'BA',
//         label: 'Bosnia and Herzegovina',
//         phone: '387',
//     },
//     { code: 'BB', label: 'Barbados', phone: '1-246' },
//     { code: 'BD', label: 'Bangladesh', phone: '880' },
//     { code: 'BE', label: 'Belgium', phone: '32' },
//     { code: 'BF', label: 'Burkina Faso', phone: '226' },
//     { code: 'BG', label: 'Bulgaria', phone: '359' },
//     { code: 'BH', label: 'Bahrain', phone: '973' },
//     { code: 'BI', label: 'Burundi', phone: '257' },
//     { code: 'BJ', label: 'Benin', phone: '229' },
//     { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
//     { code: 'BM', label: 'Bermuda', phone: '1-441' },
//     { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
//     { code: 'BO', label: 'Bolivia', phone: '591' },
//     { code: 'BR', label: 'Brazil', phone: '55' },
//     { code: 'BS', label: 'Bahamas', phone: '1-242' },
//     { code: 'BT', label: 'Bhutan', phone: '975' },
//     { code: 'BV', label: 'Bouvet Island', phone: '47' },
//     { code: 'BW', label: 'Botswana', phone: '267' },
//     { code: 'BY', label: 'Belarus', phone: '375' },
//     { code: 'BZ', label: 'Belize', phone: '501' },
//     {
//         code: 'CA',
//         label: 'Canada',
//         phone: '1',
//         suggested: true,
//     },
//     {
//         code: 'CC',
//         label: 'Cocos (Keeling) Islands',
//         phone: '61',
//     },
//     {
//         code: 'CD',
//         label: 'Congo, Democratic Republic of the',
//         phone: '243',
//     },
//     {
//         code: 'CF',
//         label: 'Central African Republic',
//         phone: '236',
//     },
//     {
//         code: 'CG',
//         label: 'Congo, Republic of the',
//         phone: '242',
//     },
//     { code: 'CH', label: 'Switzerland', phone: '41' },
//     { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
//     { code: 'CK', label: 'Cook Islands', phone: '682' },
//     { code: 'CL', label: 'Chile', phone: '56' },
//     { code: 'CM', label: 'Cameroon', phone: '237' },
//     { code: 'CN', label: 'China', phone: '86' },
//     { code: 'CO', label: 'Colombia', phone: '57' },
//     { code: 'CR', label: 'Costa Rica', phone: '506' },
//     { code: 'CU', label: 'Cuba', phone: '53' },
//     { code: 'CV', label: 'Cape Verde', phone: '238' },
//     { code: 'CW', label: 'Curacao', phone: '599' },
//     { code: 'CX', label: 'Christmas Island', phone: '61' },
//     { code: 'CY', label: 'Cyprus', phone: '357' },
//     { code: 'CZ', label: 'Czech Republic', phone: '420' },
//     {
//         code: 'DE',
//         label: 'Germany',
//         phone: '49',
//         suggested: true,
//     },
//     { code: 'DJ', label: 'Djibouti', phone: '253' },
//     { code: 'DK', label: 'Denmark', phone: '45' },
//     { code: 'DM', label: 'Dominica', phone: '1-767' },
//     {
//         code: 'DO',
//         label: 'Dominican Republic',
//         phone: '1-809',
//     },
//     { code: 'DZ', label: 'Algeria', phone: '213' },
//     { code: 'EC', label: 'Ecuador', phone: '593' },
//     { code: 'EE', label: 'Estonia', phone: '372' },
//     { code: 'EG', label: 'Egypt', phone: '20' },
//     { code: 'EH', label: 'Western Sahara', phone: '212' },
//     { code: 'ER', label: 'Eritrea', phone: '291' },
//     { code: 'ES', label: 'Spain', phone: '34' },
//     { code: 'ET', label: 'Ethiopia', phone: '251' },
//     { code: 'FI', label: 'Finland', phone: '358' },
//     { code: 'FJ', label: 'Fiji', phone: '679' },
//     {
//         code: 'FK',
//         label: 'Falkland Islands (Malvinas)',
//         phone: '500',
//     },
//     {
//         code: 'FM',
//         label: 'Micronesia, Federated States of',
//         phone: '691',
//     },
//     { code: 'FO', label: 'Faroe Islands', phone: '298' },
//     {
//         code: 'FR',
//         label: 'France',
//         phone: '33',
//         suggested: true,
//     },
//     { code: 'GA', label: 'Gabon', phone: '241' },
//     { code: 'GB', label: 'United Kingdom', phone: '44' },
//     { code: 'GD', label: 'Grenada', phone: '1-473' },
//     { code: 'GE', label: 'Georgia', phone: '995' },
//     { code: 'GF', label: 'French Guiana', phone: '594' },
//     { code: 'GG', label: 'Guernsey', phone: '44' },
//     { code: 'GH', label: 'Ghana', phone: '233' },
//     { code: 'GI', label: 'Gibraltar', phone: '350' },
//     { code: 'GL', label: 'Greenland', phone: '299' },
//     { code: 'GM', label: 'Gambia', phone: '220' },
//     { code: 'GN', label: 'Guinea', phone: '224' },
//     { code: 'GP', label: 'Guadeloupe', phone: '590' },
//     { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
//     { code: 'GR', label: 'Greece', phone: '30' },
//     {
//         code: 'GS',
//         label: 'South Georgia and the South Sandwich Islands',
//         phone: '500',
//     },
//     { code: 'GT', label: 'Guatemala', phone: '502' },
//     { code: 'GU', label: 'Guam', phone: '1-671' },
//     { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
//     { code: 'GY', label: 'Guyana', phone: '592' },
//     { code: 'HK', label: 'Hong Kong', phone: '852' },
//     {
//         code: 'HM',
//         label: 'Heard Island and McDonald Islands',
//         phone: '672',
//     },
//     { code: 'HN', label: 'Honduras', phone: '504' },
//     { code: 'HR', label: 'Croatia', phone: '385' },
//     { code: 'HT', label: 'Haiti', phone: '509' },
//     { code: 'HU', label: 'Hungary', phone: '36' },
//     { code: 'ID', label: 'Indonesia', phone: '62' },
//     { code: 'IE', label: 'Ireland', phone: '353' },
//     { code: 'IL', label: 'Israel', phone: '972' },
//     { code: 'IM', label: 'Isle of Man', phone: '44' },
//     { code: 'IN', label: 'India', phone: '91' },
//     {
//         code: 'IO',
//         label: 'British Indian Ocean Territory',
//         phone: '246',
//     },
//     { code: 'IQ', label: 'Iraq', phone: '964' },
//     {
//         code: 'IR',
//         label: 'Iran, Islamic Republic of',
//         phone: '98',
//     },
//     { code: 'IS', label: 'Iceland', phone: '354' },
//     { code: 'IT', label: 'Italy', phone: '39' },
//     { code: 'JE', label: 'Jersey', phone: '44' },
//     { code: 'JM', label: 'Jamaica', phone: '1-876' },
//     { code: 'JO', label: 'Jordan', phone: '962' },
//     {
//         code: 'JP',
//         label: 'Japan',
//         phone: '81',
//         suggested: true,
//     },
//     { code: 'KE', label: 'Kenya', phone: '254' },
//     { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
//     { code: 'KH', label: 'Cambodia', phone: '855' },
//     { code: 'KI', label: 'Kiribati', phone: '686' },
//     { code: 'KM', label: 'Comoros', phone: '269' },
//     {
//         code: 'KN',
//         label: 'Saint Kitts and Nevis',
//         phone: '1-869',
//     },
//     {
//         code: 'KP',
//         label: "Korea, Democratic People's Republic of",
//         phone: '850',
//     },
//     { code: 'KR', label: 'Korea, Republic of', phone: '82' },
//     { code: 'KW', label: 'Kuwait', phone: '965' },
//     { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
//     { code: 'KZ', label: 'Kazakhstan', phone: '7' },
//     {
//         code: 'LA',
//         label: "Lao People's Democratic Republic",
//         phone: '856',
//     },
//     { code: 'LB', label: 'Lebanon', phone: '961' },
//     { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
//     { code: 'LI', label: 'Liechtenstein', phone: '423' },
//     { code: 'LK', label: 'Sri Lanka', phone: '94' },
//     { code: 'LR', label: 'Liberia', phone: '231' },
//     { code: 'LS', label: 'Lesotho', phone: '266' },
//     { code: 'LT', label: 'Lithuania', phone: '370' },
//     { code: 'LU', label: 'Luxembourg', phone: '352' },
//     { code: 'LV', label: 'Latvia', phone: '371' },
//     { code: 'LY', label: 'Libya', phone: '218' },
//     { code: 'MA', label: 'Morocco', phone: '212' },
//     { code: 'MC', label: 'Monaco', phone: '377' },
//     {
//         code: 'MD',
//         label: 'Moldova, Republic of',
//         phone: '373',
//     },
//     { code: 'ME', label: 'Montenegro', phone: '382' },
//     {
//         code: 'MF',
//         label: 'Saint Martin (French part)',
//         phone: '590',
//     },
//     { code: 'MG', label: 'Madagascar', phone: '261' },
//     { code: 'MH', label: 'Marshall Islands', phone: '692' },
//     {
//         code: 'MK',
//         label: 'Macedonia, the Former Yugoslav Republic of',
//         phone: '389',
//     },
//     { code: 'ML', label: 'Mali', phone: '223' },
//     { code: 'MM', label: 'Myanmar', phone: '95' },
//     { code: 'MN', label: 'Mongolia', phone: '976' },
//     { code: 'MO', label: 'Macao', phone: '853' },
//     {
//         code: 'MP',
//         label: 'Northern Mariana Islands',
//         phone: '1-670',
//     },
//     { code: 'MQ', label: 'Martinique', phone: '596' },
//     { code: 'MR', label: 'Mauritania', phone: '222' },
//     { code: 'MS', label: 'Montserrat', phone: '1-664' },
//     { code: 'MT', label: 'Malta', phone: '356' },
//     { code: 'MU', label: 'Mauritius', phone: '230' },
//     { code: 'MV', label: 'Maldives', phone: '960' },
//     { code: 'MW', label: 'Malawi', phone: '265' },
//     { code: 'MX', label: 'Mexico', phone: '52' },
//     { code: 'MY', label: 'Malaysia', phone: '60' },
//     { code: 'MZ', label: 'Mozambique', phone: '258' },
//     { code: 'NA', label: 'Namibia', phone: '264' },
//     { code: 'NC', label: 'New Caledonia', phone: '687' },
//     { code: 'NE', label: 'Niger', phone: '227' },
//     { code: 'NF', label: 'Norfolk Island', phone: '672' },
//     { code: 'NG', label: 'Nigeria', phone: '234' },
//     { code: 'NI', label: 'Nicaragua', phone: '505' },
//     { code: 'NL', label: 'Netherlands', phone: '31' },
//     { code: 'NO', label: 'Norway', phone: '47' },
//     { code: 'NP', label: 'Nepal', phone: '977' },
//     { code: 'NR', label: 'Nauru', phone: '674' },
//     { code: 'NU', label: 'Niue', phone: '683' },
//     { code: 'NZ', label: 'New Zealand', phone: '64' },
//     { code: 'OM', label: 'Oman', phone: '968' },
//     { code: 'PA', label: 'Panama', phone: '507' },
//     { code: 'PE', label: 'Peru', phone: '51' },
//     { code: 'PF', label: 'French Polynesia', phone: '689' },
//     { code: 'PG', label: 'Papua New Guinea', phone: '675' },
//     { code: 'PH', label: 'Philippines', phone: '63' },
//     { code: 'PK', label: 'Pakistan', phone: '92' },
//     { code: 'PL', label: 'Poland', phone: '48' },
//     {
//         code: 'PM',
//         label: 'Saint Pierre and Miquelon',
//         phone: '508',
//     },
//     { code: 'PN', label: 'Pitcairn', phone: '870' },
//     { code: 'PR', label: 'Puerto Rico', phone: '1' },
//     {
//         code: 'PS',
//         label: 'Palestine, State of',
//         phone: '970',
//     },
//     { code: 'PT', label: 'Portugal', phone: '351' },
//     { code: 'PW', label: 'Palau', phone: '680' },
//     { code: 'PY', label: 'Paraguay', phone: '595' },
//     { code: 'QA', label: 'Qatar', phone: '974' },
//     { code: 'RE', label: 'Reunion', phone: '262' },
//     { code: 'RO', label: 'Romania', phone: '40' },
//     { code: 'RS', label: 'Serbia', phone: '381' },
//     { code: 'RU', label: 'Russian Federation', phone: '7' },
//     { code: 'RW', label: 'Rwanda', phone: '250' },
//     { code: 'SA', label: 'Saudi Arabia', phone: '966' },
//     { code: 'SB', label: 'Solomon Islands', phone: '677' },
//     { code: 'SC', label: 'Seychelles', phone: '248' },
//     { code: 'SD', label: 'Sudan', phone: '249' },
//     { code: 'SE', label: 'Sweden', phone: '46' },
//     { code: 'SG', label: 'Singapore', phone: '65' },
//     { code: 'SH', label: 'Saint Helena', phone: '290' },
//     { code: 'SI', label: 'Slovenia', phone: '386' },
//     {
//         code: 'SJ',
//         label: 'Svalbard and Jan Mayen',
//         phone: '47',
//     },
//     { code: 'SK', label: 'Slovakia', phone: '421' },
//     { code: 'SL', label: 'Sierra Leone', phone: '232' },
//     { code: 'SM', label: 'San Marino', phone: '378' },
//     { code: 'SN', label: 'Senegal', phone: '221' },
//     { code: 'SO', label: 'Somalia', phone: '252' },
//     { code: 'SR', label: 'Suriname', phone: '597' },
//     { code: 'SS', label: 'South Sudan', phone: '211' },
//     {
//         code: 'ST',
//         label: 'Sao Tome and Principe',
//         phone: '239',
//     },
//     { code: 'SV', label: 'El Salvador', phone: '503' },
//     {
//         code: 'SX',
//         label: 'Sint Maarten (Dutch part)',
//         phone: '1-721',
//     },
//     {
//         code: 'SY',
//         label: 'Syrian Arab Republic',
//         phone: '963',
//     },
//     { code: 'SZ', label: 'Swaziland', phone: '268' },
//     {
//         code: 'TC',
//         label: 'Turks and Caicos Islands',
//         phone: '1-649',
//     },
//     { code: 'TD', label: 'Chad', phone: '235' },
//     {
//         code: 'TF',
//         label: 'French Southern Territories',
//         phone: '262',
//     },
//     { code: 'TG', label: 'Togo', phone: '228' },
//     { code: 'TH', label: 'Thailand', phone: '66' },
//     { code: 'TJ', label: 'Tajikistan', phone: '992' },
//     { code: 'TK', label: 'Tokelau', phone: '690' },
//     { code: 'TL', label: 'Timor-Leste', phone: '670' },
//     { code: 'TM', label: 'Turkmenistan', phone: '993' },
//     { code: 'TN', label: 'Tunisia', phone: '216' },
//     { code: 'TO', label: 'Tonga', phone: '676' },
//     { code: 'TR', label: 'Turkey', phone: '90' },
//     {
//         code: 'TT',
//         label: 'Trinidad and Tobago',
//         phone: '1-868',
//     },
//     { code: 'TV', label: 'Tuvalu', phone: '688' },
//     {
//         code: 'TW',
//         label: 'Taiwan',
//         phone: '886',
//     },
//     {
//         code: 'TZ',
//         label: 'United Republic of Tanzania',
//         phone: '255',
//     },
//     { code: 'UA', label: 'Ukraine', phone: '380' },
//     { code: 'UG', label: 'Uganda', phone: '256' },
//     {
//         code: 'US',
//         label: 'United States',
//         phone: '1',
//         suggested: true,
//     },
//     { code: 'UY', label: 'Uruguay', phone: '598' },
//     { code: 'UZ', label: 'Uzbekistan', phone: '998' },
//     {
//         code: 'VA',
//         label: 'Holy See (Vatican City State)',
//         phone: '379',
//     },
//     {
//         code: 'VC',
//         label: 'Saint Vincent and the Grenadines',
//         phone: '1-784',
//     },
//     { code: 'VE', label: 'Venezuela', phone: '58' },
//     {
//         code: 'VG',
//         label: 'British Virgin Islands',
//         phone: '1-284',
//     },
//     {
//         code: 'VI',
//         label: 'US Virgin Islands',
//         phone: '1-340',
//     },
//     { code: 'VN', label: 'Vietnam', phone: '84' },
//     { code: 'VU', label: 'Vanuatu', phone: '678' },
//     { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
//     { code: 'WS', label: 'Samoa', phone: '685' },
//     { code: 'XK', label: 'Kosovo', phone: '383' },
//     { code: 'YE', label: 'Yemen', phone: '967' },
//     { code: 'YT', label: 'Mayotte', phone: '262' },
//     { code: 'ZA', label: 'South Africa', phone: '27' },
//     { code: 'ZM', label: 'Zambia', phone: '260' },
//     { code: 'ZW', label: 'Zimbabwe', phone: '263' },
// ];

// ************************************************
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddPersonThunk } from "../../redux/Person/addPersonThunk";
import { useNavigate, useParams } from "react-router-dom";
import './logon.css';

// Material UI
import { 
  Box, 
  Button, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  InputAdornment, 
  InputLabel, 
  MenuItem, 
  Radio, 
  RadioGroup, 
  Select, 
  Stack, 
  TextField,
  Typography,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Divider,
  Alert
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FaUser, FaIdCard, FaPhone, FaMapMarkerAlt, FaUserGraduate } from 'react-icons/fa';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  background: 'linear-gradient(145deg, #ffffff, #f5f7fa)',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(4),
  paddingBottom: theme.spacing(1),
  fontWeight: 600,
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '50px',
    height: '3px',
    backgroundColor: theme.palette.primary.main,
  }
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
  '& svg': {
    marginRight: theme.spacing(1),
    fontSize: '1.25rem',
  }
}));

export const Logon = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const [person, setPerson] = useState({ 
    id: param.id, 
    firstName: param.firstName, 
    lastName: param.lastName, 
    birthDate: '', 
    gender: 'male', 
    status: 'single', 
    cellularTelephone: '', 
    telephone: '', 
    country: '', 
    city: '', 
    email: '', 
    role: '', 
    denomination: 'generic' 
  });
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState('');
  const navi = useNavigate();

  const steps = ['פרטים אישיים', 'פרטי קשר', 'העדפות לימוד'];

  const handleNext = () => {
    if (activeStep === 0) {
      if (!person.birthDate || !person.gender || !person.status) {
        setError('אנא מלאו את כל השדות הנדרשים');
        return;
      }
    } else if (activeStep === 1) {
      if (!person.cellularTelephone || !person.email || !person.country || !person.city) {
        setError('אנא מלאו את כל השדות הנדרשים');
        return;
      }
    }
    
    setError('');
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const log = async () => {
    if (!person.role || !person.denomination) {
      setError('אנא בחרו את תפקידכם והזרם שלכם');
      return;
    }
    
    dispatch(AddPersonThunk(person));
    if (person.role === "request")
      navi(`/request/${person.id}`);
    else
      navi(`/offer/${person.id}`);
  };

  return (
    <Container maxWidth="md" className="fade-in">
      <Box sx={{ py: 5 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 700, color: '#3f51b5', mb: 4 }}>
          ברוכים הבאים, {param.firstName} {param.lastName}
        </Typography>
        
        <StyledPaper elevation={3}>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>
          )}

          {activeStep === 0 && (
            <Box>
              <IconBox>
                <FaUser />
                <SectionTitle variant="h5">פרטים אישיים</SectionTitle>
              </IconBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField 
                    value={person.birthDate} 
                    type="date" 
                    id="birthDate" 
                    label="תאריך לידה" 
                    variant="outlined" 
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }}
                    onChange={x => setPerson({ ...person, birthDate: x.target.value })} 
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="gender-label">מגדר</InputLabel>
                    <Select
                      labelId="gender-label"
                      id="gender"
                      value={person.gender}
                      label="מגדר"
                      onChange={e => setPerson({ ...person, gender: e.target.value })}
                    >
                      <MenuItem value={"male"}>זכר</MenuItem>
                      <MenuItem value={"female"}>נקבה</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="status-label">מצב משפחתי</InputLabel>
                    <Select
                      labelId="status-label"
                      id="status"
                      value={person.status}
                      label="מצב משפחתי"
                      onChange={e => setPerson({ ...person, status: e.target.value })}
                    >
                      <MenuItem value={"single"}>רווק/ה</MenuItem>
                      <MenuItem value={"married"}>נשוי/אה</MenuItem>
                      <MenuItem value={"divorce"}>גרוש/ה</MenuItem>
                      <MenuItem value={"widower"}>אלמן/ה</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="denomination-label">זרם</InputLabel>
                    <Select
                      labelId="denomination-label"
                      id="denomination"
                      value={person.denomination}
                      label="זרם"
                      onChange={e => setPerson({ ...person, denomination: e.target.value })}
                    >
                      <MenuItem value={"spaniard"}>ספרדי</MenuItem>
                      <MenuItem value={"ashkenazi"}>אשכנזי</MenuItem>
                      <MenuItem value={"yemeni"}>תימני</MenuItem>
                      <MenuItem value={"moroccan"}>מרוקאי</MenuItem>
                      <MenuItem value={"generic"}>כללי</MenuItem>
                      <MenuItem value={"another"}>אחר</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          )}

          {activeStep === 1 && (
            <Box>
              <IconBox>
                <FaPhone />
                <SectionTitle variant="h5">פרטי קשר</SectionTitle>
              </IconBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField 
                    value={person.cellularTelephone} 
                    id="cellularTelephone" 
                    label="טלפון נייד" 
                    variant="outlined" 
                    fullWidth
                    required
                    onChange={x => setPerson({ ...person, cellularTelephone: x.target.value })} 
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField 
                    value={person.telephone} 
                    id="telephone" 
                    label="טלפון קווי" 
                    variant="outlined" 
                    fullWidth
                    onChange={x => setPerson({ ...person, telephone: x.target.value })} 
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="דואר אלקטרוני"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={x => setPerson({ ...person, email: x.target.value + "@gmail.com" })}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">@gmail.com</InputAdornment>,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Autocomplete
                    id="country-select"
                    options={countries}
                    autoHighlight
                    fullWidth
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          alt=""
                        />
                        {option.label} ({option.code})
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="מדינה"
                        variant="outlined"
                        required
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'new-password',
                        }}
                      />
                    )}
                    onChange={(event, newValue) => {
                      setPerson({ ...person, country: newValue ? newValue.label : '' });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField 
                    value={person.city} 
                    id="city" 
                    label="עיר" 
                    variant="outlined" 
                    fullWidth
                    required
                    onChange={x => setPerson({ ...person, city: x.target.value })} 
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          {activeStep === 2 && (
            <Box>
              <IconBox>
                <FaUserGraduate />
                <SectionTitle variant="h5">העדפות לימוד</SectionTitle>
              </IconBox>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  בחרו את תפקידכם במערכת
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  אנא בחרו האם אתם מעוניינים ללמוד (מבקש) או ללמד (מציע)
                </Typography>
                <FormControl component="fieldset" required sx={{ mt: 2 }}>
                  <RadioGroup
                    row
                    value={person.role}
                    onChange={e => setPerson({ ...person, role: e.target.value })}
                  >
                    <FormControlLabel 
                      value="offer" 
                      control={<Radio color="primary" />} 
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>מציע (מלמד)</Typography>
                        </Box>
                      } 
                      sx={{ mr: 4 }}
                    />
                    <FormControlLabel 
                      value="request" 
                      control={
                        <Radio color="primary" />
                      } 
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>מבקש (לומד)</Typography>
                        </Box>
                      } 
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              sx={{ borderRadius: 2, px: 3 }}
            >
              חזרה
            </Button>
            <Box>
              {activeStep === steps.length - 1 ? (
                <Button 
                  variant="contained" 
                  onClick={log}
                  sx={{ 
                    borderRadius: 2, 
                    px: 4,
                    backgroundColor: '#3f51b5',
                    '&:hover': {
                      backgroundColor: '#303f9f',
                    }
                  }}
                >
                  סיום והרשמה
                </Button>
              ) : (
                <Button 
                  variant="contained" 
                  onClick={handleNext}
                  sx={{ 
                    borderRadius: 2, 
                    px: 3,
                    backgroundColor: '#3f51b5',
                    '&:hover': {
                      backgroundColor: '#303f9f',
                    }
                  }}
                >
                  המשך
                </Button>
              )}
            </Box>
          </Box>
        </StyledPaper>
      </Box>
    </Container>
  );
};

// רשימת מדינות לבחירה
const countries = [
  { code: 'IL', label: 'ישראל' },
  { code: 'US', label: 'ארצות הברית' },
  { code: 'GB', label: 'בריטניה' },
  { code: 'FR', label: 'צרפת' },
  { code: 'CA', label: 'קנדה' },
  { code: 'AU', label: 'אוסטרליה' },
  { code: 'DE', label: 'גרמניה' },
  { code: 'IT', label: 'איטליה' },
  { code: 'ES', label: 'ספרד' },
  { code: 'RU', label: 'רוסיה' },
  { code: 'BR', label: 'ברזיל' },
  { code: 'JP', label: 'יפן' },
  { code: 'CN', label: 'סין' },
  { code: 'IN', label: 'הודו' },
  { code: 'AR', label: 'ארגנטינה' },
  { code: 'MX', label: 'מקסיקו' },
];