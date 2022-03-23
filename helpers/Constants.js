const Constant = {    
    
    API_GET_ALL_USERS: '/get_all_users', // {kstart,limit}
    API_GET_ALL_USERS_SEQUELIZE: '/get_all_users_sequelize', // {start,limit}
    API_GET_USER_BY_ID: '/get_user', // {id}
    API_GET_USER_BY_ID_SEQUELIZE: '/get_user_sequelize', // {id}
    API_ADD_USER: '/add_user', // {name,email,password}
    API_ADD_USER_SEQUELIZE: '/add_user_sequelize', // {name,email,password}
    API_DELETE_USER: '/delete_user', // {id}
    API_DELETE_USER_SEQUELIZE: '/delete_user_sequelize', // {id}
    API_UPDATE_USER: '/update_user', // {id,name,email,password}
    API_UPDATE_USER_SEQUELIZE: '/update_user_sequelize', // {id,name,email,password}

}

module.exports = Constant;