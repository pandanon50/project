// Global
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';

// Users

const USERS = '/users';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';

// Meet(모임)

const MEET = '/meet';
const UPLOAD = '/upload';
const MEET_DETAIL = '/:id';
const EDIT_MEET = '/:id/edit';
const PLUS_MEMBER = '/:id/plus-member';
const DELETE_MEET = '/:id/delete';

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    meet: MEET,
    upload: UPLOAD,
    plusMember: (id) => {
        if (id) {
            return `/meet/${id}/plus-member`;
        } else return PLUS_MEMBER;
    },
    meetDetail: (id) => {
        if (id) {
            return `/meet/${id}`;
        } else return MEET_DETAIL;
    },
    editMeet: (id) => {
        if (id) {
            return `/meet/${id}`;
        } else return EDIT_MEET;
    },
    deleteMeet: DELETE_MEET,
};

export default routes;
