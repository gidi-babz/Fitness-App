import React, { useEffect, useState } from 'react';

import { Box, TextField, Button, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/FetchData';

const url = 'https://exercisedb.p.rapidapi.com/exercises';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        `${url}/bodyPartList`,
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
    console.log(bodyParts);
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(url, exerciseOptions);

      const searchedExercises = exerciseData.filter(
        exercise =>
          exercise.name.toLowercase().includes(search) ||
          exercise.bodyPart.toLowercase().includes(search) ||
          exercise.equipment.toLowercase().includes(search) ||
          exercise.target.toLowercase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '600',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={e => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
