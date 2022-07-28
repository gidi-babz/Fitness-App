import React from 'react';

import { Button, Stack, Typography } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { name, bodyPart, target, gifUrl, equipment } = exerciseDetail;

  const exerciseName =
    typeof name === 'string' ? name.at(0).toUpperCase() + name.slice(1) : name;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: 'row' },
        p: '20px',
        alignItems: 'center',
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant="h3">{exerciseName}</Typography>
        <Typography variant="h6">
          Exercises keep you strong. {exerciseName} is one of the best exercises
          to target your {target}. It will help you improve your mood and gain
          energy
        </Typography>
        {extraDetail.map(item => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button>
              <img src={item.icon} alt={item.name} />
            </Button>
            <Typography variant="h5">{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;