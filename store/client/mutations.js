export default {
    LOGIN_BEGIN(state) {
        state.isLoading = true
        state.error = null
    },
    LOGIN_SUCCESS(state, {id, username, email, roleID, company, isLogin}) {
        state.isLoading = false
        state.error = null
        state.user.id = id
        state.user.username = username
        state.user.roleID = roleID
        state.user.company = company
        state.user.email = email 
        state.user.isLogin = isLogin
    },
    LOGIN_FAILURE(state, {error}) {
        state.isLoading = false
        state.error = e
    },
    REGISTER_BEGIN(state) {
        state.isLoading = true
        state.error = null
    },
    REGISTER_SUCCESS(state, {data}) {
        state.isLoading = false
        state.error = null,
        state.user = data
    },
    REGISTER_FAILURE( state , {error}) {
        state.isLoading = false
        state.error = e
    }
}