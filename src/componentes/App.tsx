import { Post, PostType } from './Post.js';
import './global.css';
import { Header } from './Header.js';
import styles from './App.module.css';
import { Sidebar } from './Sidebar.js';


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Maykbrito',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-03-08 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      name: 'Diego Fernandes',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-09-08 20:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header />
       
       <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
               <Post
                 key={post.id}
                 post={post}
               />
            )
          })}
        </main>
       </div>
    </div>
  )
}
