import { VStack, Image, Text, Center, Heading } from "native-base";

import Dumbbell from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700" px={10}>
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24} >
        <Dumbbell />
        <Text color="gray.100" fontSize="sm">
          Train your mind and your body
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Login
        </Heading>
      </Center>

      <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"

        />
        <Input
          placeholder="Password"
          secureTextEntry
        />

        <Button title="Log In" />


    </VStack>
  );
}