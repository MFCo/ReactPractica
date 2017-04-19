import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
       <h1>{props.movie.Title}</h1>
       <p>{props.movie.Plot}</p>
       <img src={props.movie.Poster}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://www.omdbapi.com/?i=${id}`)
  const movie = await res.json()

  console.log(`Fetched movie: ${movie.Title}`)

  return { movie }
}

export default Post
