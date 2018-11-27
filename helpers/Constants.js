const Constant = {    
    
    API_GET_ALL_USERS: '/get_all_users', // {key,start,limit}
    API_GET_USER_BY_ID: '/get_user', // {key,id}
    API_ADD_USER: '/add_user', // {key,name,email,password}
    API_DELETE_USER: '/delete_user', // {key,id}
    API_UPDATE_USER: '/update_user', // {key,id,name,email,password}
    
}

module.exports = Constant;