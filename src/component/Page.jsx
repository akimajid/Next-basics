import Head from "next/head";

const Page = ({ children, title, description, url, type, image }) => {
    return (
        <>
            <Head>
                <tittle>{tittle || "Default Tittle"}</tittle>
                <meta
                    name = "desciption"
                    content = { description || "Default description" }
                />

                <meta property="og:url" content={url || "http://localhost:300"} /> 
                <meta property="og:type" content={type || "website"} />
                <meta property="og:title" content={title || "Default title"} />
                <meta property="og:description" content={description || "Deafult description"} />
                <meta property="og.image" content={image || "image url default"} />
            </Head>
            {children}
        </>
    )
}

export default Page