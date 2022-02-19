import Maintenance from "../components/Maintenance";

const Page = () => {
    return <Maintenance />
}

export async function getStaticProps() {
    return {
        props: {}, // will be passed to the page component as props
        notFound: true
    }
}

export default Page
