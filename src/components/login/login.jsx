// // בס"ד


// import './login.css';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import { GetByIdThunk } from '../../redux/Person/getByIdThunk';

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export const Login = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [person, setPerson] = useState({ id: "", firstName: "", lastName: "" });
//     //const currentUser = useSelector(state => state.user.userCur)
//     const isexist = useSelector(state => state.people.isExist)
//     const p = useSelector(state => state.people.person)
//     const [open, setOpen] = React.useState(false);

//     // const handleClickOpen = () => {
//     //     setOpen(true);
//     // };

//     // const handleClose = () => {
//     //     setOpen(false);
//     // };
//     const isExist = async () => {
//         dispatch(GetByIdThunk(person.id))
//     }

//     useEffect(() => {
//         if (isexist === false)
//             navigate(`/logon/${person.id}/${person.firstName}/${person.lastName}`)
//         if (isexist === true) {
//             if (p.role === "request")
//                 navigate(`/request/${person.id}`)
//             else
//                 navigate(`/offer/${person.id}`)
//         }
//     }, [isexist, p])


//     const [showId, setShowId] = React.useState(false);

//     const handleClickShowId = () => setShowId((show) => !show);

//     // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     //     event.preventDefault();
//     // };

//     // const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     //     event.preventDefault();
//     // };

//     return <div>
//         {/* <dialog open>
//             <div className='header'>
//                 <h3>Login</h3>
//             </div>

//              <input type="password" placeholder="ת.ז" onChange={x => setPerson({ ...person, id: x.target.value })}></input><br /> 

//             <input type="text" placeholder="שם" onChange={x => setPerson({ ...person, firstName: x.target.value })}></input><br />

//             <input type="text" placeholder="משפחה" onChange={x => setPerson({ ...person, lastName: x.target.value })}></input><br />

//             <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//                 <div>
//                     <FormControl sx={{ m: 0, width: '25ch' }} variant="standard" >
//                         <InputLabel htmlFor="standard-adornment-id">Id</InputLabel>
//                         <Input
//                             onChange={x => setPerson({ ...person, id: x.target.value })}
//                             id="standard-adornment-id"
//                             type={showId ? 'text' : 'password'}
//                             endAdornment={
//                                 <InputAdornment position="end">
//                                     <IconButton
//                                         aria-label={
//                                             showId ? 'hide the id' : 'display the id'
//                                         }
//                                         onClick={handleClickShowId}
//                                     >
//                                         {showId ? <VisibilityOff /> : <Visibility />}
//                                     </IconButton>
//                                 </InputAdornment>
//                             }
//                         />
//                     </FormControl>
//                     <TextField id="outlined-basic" label="First name" variant="standard" onChange={x => setPerson({ ...person, firstName: x.target.value })} />
//                     <TextField id="outlined-basic" label="Last name" variant="standard" onChange={x => setPerson({ ...person, lastName: x.target.value })} />


//                     <Stack spacing={2} direction="row">
//                         <Button variant="outlined" className='margin' onClick={() => isExist()}>לכניסה</Button>
//                         <Button variant="outlined" onClick={() => navigate('/')}>ליציאה</Button>
//                     </Stack>
//                 </div>
//             </Box>

//         </dialog> */}

//         <React.Fragment>
//             <Button variant="outlined" onClick={() => setOpen(true)}>
//                 Login 👇
//             </Button>
//             <Dialog
//                 open={open}
//                 onClose={() => setOpen(false)}
//                 // slotProps={{
//                 //     paper: {
//                 //         component: 'form',
//                 //         onSubmit: (x) => {
//                 //             x.preventDefault();
//                 //             const formData = new FormData(x.currentTarget);
//                 //             const formJson = Object.fromEntries(formData.entries());
//                 //             const email = formJson.email;
//                 //             console.log(email);
//                 //             setOpen(false);
//                 //         },
//                 //     },
//                 // }}
//             >
//                 <DialogTitle>Login</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         To subscribe to this website, please enter your details here.
//                     </DialogContentText>
//                     <FormControl sx={{ m: 0, width: '25ch' }} variant="standard" autoFocus required>
//                         <InputLabel htmlFor="standard-adornment-id">Id</InputLabel>
//                         <Input
//                             onChange={x => setPerson({ ...person, id: x.target.value })}
//                             id="standard-adornment-id"
//                             type={showId ? 'text' : 'password'}

//                             endAdornment={
//                                 <InputAdornment position="end">
//                                     <IconButton
//                                         aria-label={
//                                             showId ? 'hide the id' : 'display the id'
//                                         }
//                                         onClick={handleClickShowId}
//                                     >
//                                         {showId ? <VisibilityOff /> : <Visibility />}
//                                     </IconButton>
//                                 </InputAdornment>
//                             }
//                         />
//                     </FormControl>
//                     <TextField required id="outlined-basic" label="First name" variant="standard" onChange={x => setPerson({ ...person, firstName: x.target.value })} />
//                     <TextField required id="outlined-basic" label="Last name" variant="standard" onChange={x => setPerson({ ...person, lastName: x.target.value })} />


//                 </DialogContent>
//                 <DialogActions>
//                     <Stack spacing={2} direction="row">
//                         <Button variant="outlined" className='margin' onClick={() => isExist()}>Enter</Button>
//                         <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
//                     </Stack>
//                 </DialogActions>
//             </Dialog>
//         </React.Fragment>


//     </div>






// }


// ***************************************************
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetByIdThunk } from '../../redux/Person/getByIdThunk';
import './login.css';

// Material UI
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Paper, Typography, Container, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaBook, FaUserFriends, FaRegHandshake } from 'react-icons/fa';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: 16,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    background: 'linear-gradient(145deg, #ffffff, #f5f7fa)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const FeatureBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    textAlign: 'center',
    borderRadius: 12,
    backgroundColor: '#f5f7fa',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: '#e8eaf6',
        transform: 'translateY(-5px)',
    },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    fontSize: '2.5rem',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
}));

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [person, setPerson] = useState({ id: "", firstName: "", lastName: "" });
    const isexist = useSelector(state => state.people.isExist);
    const p = useSelector(state => state.people.person);
    const [open, setOpen] = useState(false);
    const [showId, setShowId] = useState(false);

    const isExist = async () => {
        dispatch(GetByIdThunk(person.id));
    }

    useEffect(() => {
        if (isexist === false)
            navigate(`/logon/${person.id}/${person.firstName}/${person.lastName}`);
        if (isexist === true) {
            if (p.role === "request")
                navigate(`/request/${person.id}`);
            else
                navigate(`/offer/${person.id}`);
        }
    }, [isexist, p, person]);

    const handleClickShowId = () => setShowId((show) => !show);

    return (
        <Container maxWidth="lg" className="fade-in">
            <Box sx={{ py: 8 }}>
                <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: 700, color: '#3f51b5' }}>
                    ברוכים הבאים לחברותא קונקט
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
                    המקום שמחבר בין יהודים מתחזקים ללומדי תורה לצורך לימוד משותף
                </Typography>

                <Grid container spacing={6} justifyContent="center" sx={{ mb: 8 }}>
                    <Grid item xs={12} md={4}>
                        <FeatureBox>
                            <IconWrapper>
                                <FaBook />
                            </IconWrapper>
                            <Typography variant="h5" component="h3" gutterBottom>
                                לימוד תורה משותף
                            </Typography>
                            <Typography>
                                הזדמנות ללמוד ספרי קודש, יהדות והשקפה בצורה מעמיקה עם חברותא אישית
                            </Typography>
                        </FeatureBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FeatureBox>
                            <IconWrapper>
                                <FaUserFriends />
                            </IconWrapper>
                            <Typography variant="h5" component="h3" gutterBottom>
                                התאמה מושלמת
                            </Typography>
                            <Typography>
                                מערכת חכמה שמתאימה בין לומדים על פי תחומי עניין, רמת ידע וזמינות
                            </Typography>
                        </FeatureBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FeatureBox>
                            <IconWrapper>
                                <FaRegHandshake />
                            </IconWrapper>
                            <Typography variant="h5" component="h3" gutterBottom>
                                קהילה תומכת
                            </Typography>
                            <Typography>
                                הצטרפו לקהילה של לומדים ומלמדים שמחזקים זה את זה בדרך התורה
                            </Typography>
                        </FeatureBox>
                    </Grid>
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h4" component="h2" align="center" gutterBottom>
                            התחברות למערכת
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            התחברו כדי למצוא חברותא או להציע את עצמכם כחברותא
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                onClick={() => setOpen(true)}
                                sx={{
                                    borderRadius: 2,
                                    py: 1.5,
                                    px: 4,
                                    fontSize: '1.1rem',
                                    boxShadow: '0 4px 12px rgba(63, 81, 181, 0.2)',
                                    '&:hover': {
                                        boxShadow: '0 6px 16px rgba(63, 81, 181, 0.3)',
                                    }
                                }}
                            >
                                כניסה / הרשמה
                            </Button>
                        </Box>
                    </StyledPaper>
                </Box>

                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    PaperProps={{
                        sx: {
                            borderRadius: 3,
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                            maxWidth: '450px',
                            width: '100%',
                        }
                    }}
                >
                    <DialogTitle sx={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, pt: 4 }}>
                        כניסה למערכת
                    </DialogTitle>
                    <DialogContent sx={{ px: 4 }}>
                        <DialogContentText sx={{ textAlign: 'center', mb: 3 }}>
                            אנא הזינו את פרטיכם האישיים כדי להתחבר או להירשם למערכת
                        </DialogContentText>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <FormControl variant="standard" fullWidth required>
                                <InputLabel htmlFor="standard-adornment-id">תעודת זהות</InputLabel>
                                <Input
                                    onChange={x => setPerson({ ...person, id: x.target.value })}
                                    id="standard-adornment-id"
                                    type={showId ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={showId ? 'הסתר תעודת זהות' : 'הצג תעודת זהות'}
                                                onClick={handleClickShowId}
                                            >
                                                {showId ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <TextField
                                required
                                id="firstName"
                                label="שם פרטי"
                                variant="standard"
                                fullWidth
                                onChange={x => setPerson({ ...person, firstName: x.target.value })}
                            />
                            <TextField
                                required
                                id="lastName"
                                label="שם משפחה"
                                variant="standard"
                                fullWidth
                                onChange={x => setPerson({ ...person, lastName: x.target.value })}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions sx={{ px: 4, pb: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <Button
                            variant="outlined"
                            onClick={() => setOpen(false)}
                            sx={{ borderRadius: 2, px: 3 }}
                        >
                            ביטול
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => isExist()}
                            sx={{
                                borderRadius: 2,
                                px: 3,
                                backgroundColor: '#3f51b5',
                                '&:hover': {
                                    backgroundColor: '#303f9f',
                                }
                            }}
                        >
                            כניסה
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Container>
    );
};
