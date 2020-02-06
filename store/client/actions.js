export default {
    async login({commit}, form) {
        commit('LOGIN_BEGIN')
        try {
            const { data } = await this.$axios.post('/login', form)
            commit('Login_SUCCESS', data)
        } catch (e) {
            commit('LOGIN_FAILURE', e)
        }
    },
    async create({commit}, form) {
        commit('REGISTER_BEGIN')
        try {
            const {data} = await this.$axios.post('/register', form)
            commit('REGISTER_SUCCESS', data)
        } catch (e) {
            commit('REGISTER_FAILURE', e)
        }
    }
}