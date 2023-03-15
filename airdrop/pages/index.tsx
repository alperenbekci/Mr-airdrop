import { Text, Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Airdrop from "../source/components/Airdrop";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mr Airdrop</title>
      </Head>

      <main className={styles.main}>
        <VStack mb={10}>
          <Heading as="h1" size={"2xl"}>
            <span className={styles.head}>Mr Airdrop</span>
          </Heading>
          <Text color={"white"} fontSize="2xl">
            Beginner Friendly Faucet
          </Text>
          <Text color={"white"} fontSize="xl">
            Use faucet for airdrop
          </Text>
          <Text color={"greenyellow"} className={styles.a} fontSize="x1">
            <a href="https://explorer.solana.com/">
              View the transaction on solana explorer
            </a>
          </Text>
        </VStack>
        <Airdrop />
        <footer>
          <Text className={styles.a} color={"greenyellow"} fontSize="xl">
            <a href="https://github.com/alperenbekci/mr-airdrop">
              🦑see on github
            </a>
          </Text>
        </footer>
      </main>
    </div>
  );
};

export default Home;
