export default {
    namespaced: true,
    state: {
      access_token:'' ,
      login_status: false,
      auth_user: {}
    },
    getters: {

    },
    
    mutations: {
      updateaccess_token(state, data){
            state.access_token = data
        },
        updatelogin_status(state, posts){
          state.updatelogin_status = posts
        },
        updateauth_user(state){
            state.updateauth_user = null
            
        },
    },
  }