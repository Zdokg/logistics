import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import {
  Box,
  Typography,
  Button,
  Paper,
} from '@mui/material';
import './404.css';

const NotFound = () => {
  const location = useLocation();

  return (
    <Box className="notfound-wrapper">
      <Paper elevation={3} className="notfound-card">
        <Box className="notfound-badge-container">
          <Box className="notfound-badge">
            <Typography variant="h3" className="notfound-404">404</Typography>
          </Box>
          <Box className="notfound-badge-blur" />
        </Box>

        <Typography variant="h4" className="notfound-title">Page Not Found</Typography>

        <Typography variant="body1" color="text.secondary" className="notfound-subtext">
          We couldn't find the page you were looking for. The page might have been moved, deleted, or never existed.
        </Typography>

        <Box className="notfound-buttons">
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="warning"
            fullWidth
            startIcon={<Home size={18} />}
          >
            Back to Home
          </Button>

          <Button
            variant="outlined"
            fullWidth
            onClick={() => window.history.back()}
            startIcon={<ArrowLeft size={18} />}
          >
            Go Back
          </Button>
        </Box>

        <Typography variant="body2" color="text.secondary" className="notfound-support">
          If you believe this page should exist, please{' '}
          <Link to="/contact" className="notfound-link">contact our support team</Link>.
        </Typography>
      </Paper>
    </Box>
  );
};

export default NotFound;
