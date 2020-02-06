export default {
    LOGIN_BEGIN(state) {
        state.isLoading = true,
        state.error = null
    },
    LOGIN_SUCCESS(state, {data}) {
        state.isLoading = false,
        state.error = null,
        state.user = data
    },
    LOGIN_FAILURE(state, {e}) {
        state.isLoading = false,
        state.error = e
    },
    REGISTER_BEGIN(state) {
        state.isLoading = true,
        state.error = null
    },
    REGISTER_SUCCESS(state, {data}) {
        state.isLoading = false,
        state.error = null,
        state.user = data
    },
    REGISTER_FAILURE( state , {e}) {
        state.isLoading = false,
        state.error = e
    }
}