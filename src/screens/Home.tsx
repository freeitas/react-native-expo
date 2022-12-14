import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, VStack, HStack, Heading, Text } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';

import { ExerciseCard } from '@components/ExerciseCard';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export function Home() {
  const [exercises, setExercises] = useState(['Front Pull', 'Bent Row', 'One-sided row', 'Deadlift']);
  const [groups, setGroups] = useState(['Back', 'Biceps', 'Triceps', 'Shoulder'])
  const [groupSelected, setGroupSelected] = useState('Back')

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise');
  }

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
          <Heading color="gray.200" fontSize="md" fontFamily="heading">
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
            <ExerciseCard name={item} onPress={handleOpenExerciseDetails}/>
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