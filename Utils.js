"use strict";
var UsersUtils;
(function (UsersUtils) {
    class parent {
        setName(name) {
            return this.name = name;
        }
    }
    UsersUtils.parent = parent;
})(UsersUtils || (UsersUtils = {}));
