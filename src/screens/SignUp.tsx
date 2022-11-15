import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useForm, Controller } from 'react-hook-form';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp({ name, email, password, password_confirm }: FormDataProps) {
    console.log()
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <VStack flex={1} px={10} pb={16}>
        <Image 
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Train your mind and your body
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Create your account
          </Heading>

          <Controller 
            control={control}
            name="name"
            rules={{
              required: 'Insert your name.'
            }}
            render={({ field: { onChange, value } }) => (
              <Input 
                placeholder="Name"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Text color="white">{errors.name?.message}</Text>

          <Controller 
            control={control}
            name="email"
            rules={{
              required: 'Insert your E-mail.',
              pattern: {
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid E-mail'
              }
            }}
            render={({ field: { onChange, value } }) => (
              <Input 
                placeholder="E-mail" 
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Text color="white">{errors.email?.message}</Text>

          <Controller 
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input 
                placeholder="Password" 
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller 
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input 
                placeholder="Confirm password" 
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
              />
            )}
          />

          <Button title="Create and access" 
            onPress={handleSubmit(handleSignUp)}
          />
        </Center>

        <Button 
          title="Back to Login" 
          variant="outline" 
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}