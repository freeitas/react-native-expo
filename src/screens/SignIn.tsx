import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import Dumbbell from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg="gray.700" px={10} pb={16}>
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
        </Center>

          <Center mt={24}>
            <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
              Don't have access?
            </Text>
          </Center>

          <Button title="Create Account" variant="outline" />
      </VStack>
    </ScrollView>
  );
}