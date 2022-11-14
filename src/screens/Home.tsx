import { useState } from 'react';
import { FlatList, VStack, HStack, Heading, Text } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';

import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {
  const [exercises, setExercises] = useState(['Front Pull', 'Bent Row', 'One-sided row', 'Deadlift']);
  const [groups, setGroups] = useState(['Back', 'Biceps', 'Triceps', 'Shoulder'])
  const [groupSelected, setGroupSelected] = useState('Back')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group 
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={10}
        maxH={10}
      />

      <VStack px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercises
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard name={item} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 20
          }}
        />
      </VStack>
    </VStack>
  );
}