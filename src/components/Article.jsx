import React from 'react';
import { Typography, Box, Link, Grid } from '@mui/material';

const Article = ({ title, author, date, summary, url, imageUrl }) => {
  return (
    <Grid container spacing={4} alignItems="flex-start" sx={{ my: 2 }}>
      <Grid item xs={imageUrl ? 8 : 12}>
        <Box>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: "'Times New Roman', serif" }}>
            <Link href={url} target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
              {title}
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'Times New Roman', serif" }}>
            {summary}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 1, fontFamily: "'Times New Roman', serif" }}>
            {date} | {author}
          </Typography>
        </Box>
      </Grid>
      {imageUrl && (
        <Grid item xs={4}>
          <Box
            component="img"
            sx={{
              width: '100%',
              borderRadius: '8px',
              objectFit: 'cover'
            }}
            alt={title}
            src={imageUrl}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Article;
