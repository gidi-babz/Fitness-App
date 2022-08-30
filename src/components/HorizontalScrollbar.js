import React, { useContext } from 'react';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()}
      className="right-arrow"
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollNext()}
      className="left-arrow"
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyParts }) => {
  return (
    <Box className="react-horizontal-scrolling-menu--wrapper">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.length > 0 &&
          data.map(item => (
            <Box
              key={item.id || item}
              itemId={item.id || item}
              title={item.id || item}
              m={{ lg: '0 40px', xs: '0 auto' }}
            >
              {isBodyParts ? (
                <BodyPart
                  item={item}
                  setBodyPart={setBodyPart}
                  bodyPart={bodyPart}
                />
              ) : (
                <ExerciseCard exercise={item} />
              )}
            </Box>
          ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
