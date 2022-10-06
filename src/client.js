import SanityClient from "@sanity/client"

export default SanityClient({
    projectId:'your_id',
    dataset:'production',
    apiVersion:'2021-10-21',
    token:'your_token',
    useCdn:true,
})