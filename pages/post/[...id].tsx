// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
const Blog = ({ name }: any) => {
    return (
        <div>
            Dynamic page test: {name}
        </div>
    )
}

export default Blog