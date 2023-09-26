import Link from 'next/link';

const Blog = async () => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records', { next: { revalidate: 300 } })
    const json = await res.json();
    const posts: [] = json['items'];
    // will revalidate at most every 5 mins
    // force-cache would also work if revalidation isnt needed
    // similar to getStaticProps

    return (
        <main>
            <h1 className='text-5xl text-center mb-8'>The Blog</h1>
            {posts.map((e: any) => <Link key={e.id} className='border rounded p-2 block w-96 mx-auto mb-2' href={"/blog/" + e.slug}>{e.title}</Link>)}
        </main>
    )
}

export default Blog;