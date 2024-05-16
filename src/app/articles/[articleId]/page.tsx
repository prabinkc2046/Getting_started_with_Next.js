import { Metadata } from "next";

interface DynamicRouteArticle {
    articleId: string;
}
interface ParamsProp {
    params: DynamicRouteArticle;
}


export const generateMetadata = ({params}: ParamsProp): Metadata => {
    const { articleId } = params;
    return {
        title: `article ${articleId}`,
        description: `article description from ${articleId}`
    }
};

const DynamicArticlePage = ({params}: ParamsProp) => {
    const {articleId} = params;

    return (
        <div>
            <h1>Title: {articleId}</h1>
            <p>Description: {articleId}</p>
        </div>
    );
}

export default DynamicArticlePage;