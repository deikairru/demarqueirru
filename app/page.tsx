import { Box, Flex, Text, Button, Container } from '@radix-ui/themes';

export default function Home() {
  return (
    <main>
      <Box>
        <Container>
          <Flex direction="column" gap="2" className='justify-center'>
            <Text>Hello Deika</Text>
            <Button>Let's go</Button>
          </Flex>
        </Container>
      </Box>
    </main>
  );
}
