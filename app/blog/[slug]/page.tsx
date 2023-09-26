import MarkdownClassMap from "@/lib/MarkdownClassmap";
import markdownToHTML from "@/lib/MarkdownToHtml";
import { notFound } from "next/navigation";

const BlogDetail = async ({ params: { slug } }: { params: { slug: string } }) => {
    const blogFetch = await fetch(`http://127.0.0.1:8090/api/collections/posts/records`, { next: { revalidate: 300 } });
    const json = await blogFetch.json();
    const blogs = await json['items'];
    const blog: any = blogs.filter((e: any) => e.slug === slug)[0]
    const content = await markdownToHTML(blog.content, MarkdownClassMap)


    return (
        <>
            <section>
                <div className=''>
                    <div>
                        <h1 className='mb-4 mt-2 text-2xl lg:text-4xl text-black font-bold font-heading text-center'>{blog.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                </div>
                <ul className='list-disc list-inside hidden ml-4 list-decimal'></ul>

            </section>
        </>
    )
}

export const generateMetadata = async ({ params: { slug } }: { params: { slug: string } }) => {
    const blogFetch = await fetch(`http://127.0.0.1:8090/api/collections/posts/records`, { next: { revalidate: 300 } });
    const json = await blogFetch.json();
    const blogs = await json['items'];
    const blog: any = blogs.filter((e: any) => e.slug === slug)[0]

    if (blog == null) notFound();

    return {
        title: blog.title, // 55-65 characters
        description: blogs.description, // max of 155 characters
        openGraph: {
            title: blog.title,
            description: blog.description,
        }
    }
}

export const dynamicParams = false; // if route not generated in generateStaticParams - return 404
export async function generateStaticParams() {
    const blogFetch: Response = await fetch('http://127.0.0.1:8090/api/collections/posts/records');
    const json = await blogFetch.json();
    const blogs: any[] = json['items'];

    return blogs.map((post: any) => (
        { slug: post.slug }
    ))

}

export default BlogDetail;