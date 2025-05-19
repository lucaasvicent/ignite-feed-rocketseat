import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucaasvicent.png',
      name: 'Lucas Vicente',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, evento da Rocketseat.' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
      { type: 'hashtag', content: '#novoprojeto #ignite' },
    ],
    publishedAt: new Date('2025-04-24 13:32:22'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Allan Kayque',
      role: 'T.I Analyst'
    },
    content: [
      { type: 'paragraph', content: 'Fala Tropinha 👋' },
      { type: 'paragraph', content: 'Não sei dirigi' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
      { type: 'hashtag', content: '#novoprojeto #ignite' },
    ],
    publishedAt: new Date('2025-04-12 18:21:02'),
  }
]

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            console.log(post)
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App