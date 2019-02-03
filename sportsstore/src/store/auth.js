import Axios from "axios"

const baseUrl = process.env.VUE_APP_BACK_END_BASE_URL

const loginUrl = `${baseUrl}/login`

export default{
	state: {
		authenticated: false,
		jwt: null
	},
	getters:{
		authenticatedAxios(state){
			return Axios.create({
				headers:{
					"Authorization": `Bearer<${state.jwt}>`
				}
			})
		}
	},
	mutations:{
		setAuthenticated(state, header){
			state.jwt = header
			state.authenticated = true
		},
		clearAuthentication(state){
			state.authenticated = false
			state.jwt = null
		}
	},
	actions:{
		async authenticate(context, credentials){
			let response = await Axios.post(loginUrl, credentials)
			if(response.data.success == true){
				context.commit("setAuthenticated", response.data.token)
			}
		}
	}
}