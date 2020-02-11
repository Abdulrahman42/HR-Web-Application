export default {
    ADD_REPORT_BPJS_BEGIN(state) {
        state.isLoading = true
        state.error = null
    },
    ADD_REPORT_BPJS_SUCCESS(state, {reportBpjs}) {
        state.isLoading = false
        state.reportBpjs = reportBpjs
    },
    ADD_REPORT_BPJS_FAILURE(state, { error }) {
        state.isLoading = false
        state.error = error
    }
}