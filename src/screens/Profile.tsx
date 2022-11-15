import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, ScrollView, VStack, Skeleton, Text, Heading, useToast } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';


import userDefault from '@assets/userPhotoDefault.png';
const PHOTO_SIZE = 33;

export function Profile() {
  const [userPhoto, setUserPhoto] = useState(userDefault);
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  const toast = useToast();

  async function handleUserPhotoSelected(){
    setPhotoIsLoading(true);

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if(photoSelected.cancelled) {
        return;
      }

      if(photoSelected.uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.uri);

        if(photoInfo.size && (photoInfo.size  / 1024 / 1024 ) > 5){
          return toast.show({
            title: 'This image its too big. Must be less than 5MB.',
            placement: 'top',
            bgColor: 'red.500'
          }) 
        }

        setUserPhoto(photoSelected.uri);
      }
    } catch (error) {
      console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title='Profile' />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
        {
            photoIsLoading ?
              <Skeleton 
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded="full"
                startColor="gray.500"
                endColor="gray.400"
              />
            :
              <UserPhoto 
                source={{ uri: userPhoto} }
                alt="User photo"
                size={PHOTO_SIZE}
              />
          }

          <TouchableOpacity onPress={handleUserPhotoSelected}>
            <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Change photo
            </Text>
          </TouchableOpacity>

          <Input 
            bg="gray.600" 
            placeholder='Name' 
          />

          <Input 
            bg="gray.600" 
            placeholder="E-mail"
            isDisabled
          />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2} alignSelf="flex-start" mt={12} fontFamily="heading">
            Change password
          </Heading>

          <Input 
            bg="gray.600"
            placeholder="Old password"
            secureTextEntry
          />

          <Input 
            bg="gray.600"
            placeholder="New password"
            secureTextEntry
          />

          <Input 
            bg="gray.600"
            placeholder="Confirm new password"
            secureTextEntry
          />

          <Button title="Update" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}