import apiClientWithToken from "./clientTokenAuth";

const endpointCheckout='/api/create-checkout-session'

export const postTransaction = async (token, data)=>{
    const response = await apiClientWithToken(token).post(endpointCheckout, data);
    return window.location.href=response.data.url
}
