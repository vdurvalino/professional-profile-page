import Image from "next/image";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {BLOCKS} from "@contentful/rich-text-types";

interface Asset {
    sys: {
        id: string;
    };
    url: string;
    description: string;
}

interface AssetLink {
    block: Asset[];
}

interface Content {
    content: Document;
    links: {
        assets: AssetLink;
    };
}

function RichTextAsset( {
                            id,
                            assets,
                        }: {
    id: string;
    assets: Asset[] | undefined;
} ) {
    const asset = assets?.find(( asset ) => asset.sys.id === id);

    if (asset?.url) {
        return <Image src={asset.url} layout="fill" alt={asset.description}/>;
    }

    return null;
}

export function RichTextContent( {content}: { content: Content } ) {
    return (
        <div className="content">
            {
                // @ts-expect-error - ignorando tipagem do contentful aqui
                documentToReactComponents(content, {
                    renderNode: {
                        [BLOCKS.EMBEDDED_ASSET]: ( node ) => (
                            <RichTextAsset
                                id={node.data.target.sys.id}
                                assets={content.links.assets.block}
                            />
                        ),
                    },
                })
            }
        </div>
    )
}
