import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    let routes = [
        {
            url: 'https://localhost:3000',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://localhost:3000/blog',
            lastModified: new Date(),
            priority: 1,
        },

    ];

    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records', { cache: 'no-store' })
    // equivalent to server side rendered - getServerSideProps in Next 12

    const json = await res.json()
    const blogs: [] = json['items'];

    blogs.forEach((e) => routes.push(
        {
            url: 'https://localhost:3000/blog/' + e['slug'],
            lastModified: new Date(),
            priority: 1,
        }
    ))

    return routes;
}