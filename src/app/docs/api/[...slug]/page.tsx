




const ConceptPage = ({params}: {
    params: {
        slug: string[],
    }
}) => {
    const feature = params.slug[0];
    const concept = params.slug[1];
    const url_path = feature + "_" + concept;
    switch(url_path) {
        case 'feature1_concept1':
            return <h1>Feature1 Concept 1</h1>;
            break;
        case 'feature1_concept2':
            return <h1>{feature} {concept}</h1>;
            break;
        case 'feature2_concept1':
            return <h1>{feature} {concept}</h1>;
            break;
        case 'feature2_concept2':
            return <h1>{feature} {concept}</h1>;
            break;
        default:
            return <h1>Feature {feature} {concept} not found</h1>;
    }
}

export default ConceptPage;