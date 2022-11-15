import { TouchableOpacity } from 'react-native';
import { Heading, HStack, Text, VStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { UserPhoto } from './UserPhoto';

import userDefault from '@assets/userPhotoDefault.png';


export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto 
        source={userDefault}
        size={16}
        alt="User image"
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.200" fontSize="md">
          Hello,
        </Text>

        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          User
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  );
}