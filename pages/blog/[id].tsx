// This function gets called at build time
export async function getStaticPaths() {
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths: [
            { params: { id: 'abc' } },
            { params: { id: 'def' } },
        ], fallback: false
    }
}

export async function getStaticProps({ params }: any) {

    // Pass post data to the page via props
    return { props: { name: params.id } }
}

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