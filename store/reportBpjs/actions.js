export default {
    async addReportBpjs({commit}, form) {
        commit('ADD_REPORT_BPJS_BEGIN')
        try {
            const { data } = await this.$axios.post('/addReport', form)
            commit('ADD_REPORT_BPJS_SUCCESS', {
                reportBpjs: data.data })
        } catch (e) {
            commit('ADD_REPORT_BPJS_FAILURE', {
                error: e
            })
        }
    }
}