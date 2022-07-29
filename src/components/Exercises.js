import React, { useEffect, useState } from 'react';

import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

import { exerciseOptions, fetchData } from '../utils/FetchData';
import { url } from './SearchExercises';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const exercisePerPage = 9;

  const indexOfLastExercise = currentPage * exercisePerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;

  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const Paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: '1800', behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(url, exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `${url}/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box
      id="exercises"
      mt="50px"
      sx={{
        mt: { lg: '110px' },
        p: '20px',
      }}
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: { lg: '110px', xs: '50px' },
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={Paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
