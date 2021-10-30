import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>29 de outubro de 2021</time>
            <strong>Desenvolvendo estrutura React</strong>
            <p>
              Nesse post será explicado como é o desenvolvimento de uma
              estrutura React
            </p>
          </a>
          <a href="#">
            <time>29 de outubro de 2021</time>
            <strong>Desenvolvendo estrutura React</strong>
            <p>
              Nesse post será explicado como é o desenvolvimento de uma
              estrutura React
            </p>
          </a>
          <a href="#">
            <time>29 de outubro de 2021</time>
            <strong>Desenvolvendo estrutura React</strong>
            <p>
              Nesse post será explicado como é o desenvolvimento de uma
              estrutura React
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
