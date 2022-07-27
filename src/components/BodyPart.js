import React from 'react';

import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div>
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
          borderTop: bodyPart === item ? '4px solid #ff2625' : '',
          backgroundColor: '#fff',
          cursor: 'pointer',
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          gap: '47px',
        }}
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behaviour: 'smooth' });
        }}
      >
        <img
          src={Icon}
          alt="dumbbell"
          style={{ width: '40px', height: '40px' }}
        />
        <Typography
          fontSize="24px"
          fontWeight="bold"
          color="#3a1212"
          textTransform="capitalize"
        >
          {item}
        </Typography>
      </Stack>
    </div>
  );
};

export default BodyPart;
