import axios from 'axios'
import { createRefresh } from 'react-auth-kit'

const refreshApi = createRefresh({
    interval: 30,
    refreshApiCallback: async ({
        authToken,
        refreshToken }) => {
        try {
            const response = await axios.post("/auth/jwt/refresh/", { 'refresh': refreshToken }, {
                headers: { 'Authorization': `Bearer ${authToken}` }
            }
            )
            return new Promise(() => ({
                isSuccess: true,
                newAuthToken: response.data.access,
                newAuthTokenExpireIn: response.data.refresh,
                newRefreshTokenExpiresIn: 30
            }));
        }
        catch (error) {
            console.error(error)
            return new Promise(() => ({
                isSuccess: false
            }));
        }
    }
})

export default refreshApi;