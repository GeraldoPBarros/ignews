/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import Head from "next/head";

import { stripe } from "../services/stripe";

import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

/**
 * * getServerSideProps: vai fazer requisições sempre que a página for chamada (tipagem GetServerSideProps)
 * * getStaticProps: chama de tempos e tempos e já retorna a página estática quando necessário (tipagem: GetStaticProps)
 */
export const getStaticProps: GetStaticProps = async () => {
  // retrive retorna apenas do produto em questão
  const price = await stripe.prices.retrieve("price_1JFzgBCZe9BA06FHic2Q95G7", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
