type MarkdownMap = {
    p: string,
    h2: string,
    h3: string,
    ul: string,
    li: string,
    ol: string,
    strong: string,
};

const MarkdownClassMap: MarkdownMap = {
    p: 'text-base text-black mb-4',
    h2: 'text-2xl text-black font-bold mb-2',
    h3: 'text-xl text-black font-bold mb-2',
    ul: 'list-disc list-outside mb-4',
    ol: 'list-decimal list-outside mb-4',
    li: 'text-black ml-4',
    strong: 'text-black',
};

export default MarkdownClassMap;