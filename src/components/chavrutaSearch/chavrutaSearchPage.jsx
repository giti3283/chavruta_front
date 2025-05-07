// בס"ד
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {ChavrutaCards} from "../chavruta/chavruta";
import { Container, Typography, Box, Paper } from '@mui/material';

export const ChavrutaSearchPage = () => {
    const { requestCode } = useParams(); // אם אתה משתמש בניתוב עם פרמטר של קוד בקשה
    
    return (
        <Container maxWidth="xl">
            <Box sx={{ py: 4 }}>
                <Paper elevation={0} sx={{ p: 3, mb: 3, borderRadius: 2, bgcolor: '#f8f9fa' }}>
                    <Typography variant="h4" component="h1" align="center" gutterBottom>
                        מערכת חיפוש חברותא
                    </Typography>
                    <Typography variant="body1" align="center" color="text.secondary">
                        כאן תוכלו למצוא חברותות מתאימות לפי תחומי עניין, ספרים וזמנים שנוחים לכם
                    </Typography>
                </Paper>
                
                <ChavrutaCards requestCode={requestCode} />
            </Box>
        </Container>
    );
};

// export default ChavrutaSearchPage;
