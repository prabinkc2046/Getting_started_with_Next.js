




import { StateAndLifeCycle } from "@/components/StateAndLifeCycle";
const DynamicConceptPage = ({params}: {
    params: {
        slug: string[],
    }
}) => {

    switch(params.slug[0]){
        case 'hello-world':
            return <h1>Hello world</h1>;
            break;
        case 'rendering-elements':
            return <h1> Rendering Elements</h1>;
            break;
        case 'state-and-life-cycle':
            return <StateAndLifeCycle />;
            break;
        default:
            return <h1>Page not found</h1>;
    }

};

export default DynamicConceptPage;