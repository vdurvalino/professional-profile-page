import {unified} from 'unified';
import remarkParse from 'remark-parse';

export interface HeadingNode {
    level: number;
    text: string;
    children: HeadingNode[];
}


export function extractHeadings( markdownText: string ) {
    const tree = unified().use(remarkParse).parse(markdownText);

    const headings = tree.children.filter(node => node.type === 'heading');

    const nestedHeadings: HeadingNode[] = [];
    const path: HeadingNode[] = [];

    headings.forEach(node => {
        const level = node.depth;
        const text = node.children
            .filter(child => child.type === 'text')
            .map(child => child.value)
            .join('');

        const headingNode = {level, text, children: []};

        let parent = null;
        for (let i = level - 2; i >= 0; i--) {
            if (path[i]) {
                parent = path[i];
                break;
            }
        }

        if (parent) {
            parent.children.push(headingNode);
        } else {
            nestedHeadings.push(headingNode);
        }

        path[level - 1] = headingNode;
        path.length = level;
    });

    return nestedHeadings;
}
