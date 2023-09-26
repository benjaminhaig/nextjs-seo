import { remark } from "remark";
import html from 'remark-html'

export default async function markdownToHTML(markdown: string, classMap: Record<string, string>) {

    const htmlString = markdown.toString();

    // Add classNames to specified HTML tags based on classMap
    const modifiedHTMLString = htmlString.replace(
        /<(\/?)(\w+)/g,
        (match, isClosingTag, tagName) => {
            const className = classMap[tagName] || '';
            return `<${isClosingTag}${tagName} class="${className}"`;
        }
    );

    return modifiedHTMLString;
}