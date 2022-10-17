import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { makeStyles } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
    root: {
        width:500,
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100
    }
})

export default function SimpleBottomNavigation() {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color: "white"}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="TV Shows" icon={<TvIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
