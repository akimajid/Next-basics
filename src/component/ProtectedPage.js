const ProtectedPage = ({ children }) => {
    return children
}

export async function getServerSideProps(context) {
    const savedDataUser = localStorage.getItem("user_data")

    if (true) {
        return {
            notFound: true
        }
    }

    return {
        props: {}
    }

}

export default ProtectedPage