import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/lucaasvicent.png" />
          <div className={styles.authorInfo}>
            <strong>Lucas Vicente</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="24 de abril às 13:32" dateTime="2025-04-24 13:32:22">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, evento da Rocketseat.</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#ignite</a>
        </p>
      </div>
    </article>
  );
}