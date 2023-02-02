const { handleHttpError } = require('../utils/handleError');

const checkRole = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const rolesByUser = user.role;
        const checkValueRole = roles.some((roleSingle) => rolesByUser.includes(roleSingle));
        if (!checkValueRole) {
            handleHttpError(res, 'USER_NOT_PERMISSIONS', 403);
            return;
        }
        next();
    }
    catch (error) {
        handleHttpError(res, 'ERROR_PERMISSIONS', 403);
    }
};

module.exports = { checkRole };