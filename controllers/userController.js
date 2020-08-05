import express from 'express';
import routes from '../routes';

export const users = (req, res) => {
    res.render('users', { pageTitle: 'users' });
};

export const userDetail = (req, res) => {
    res.render('userDetail', { pageTitle: 'userDeatil' });
};
export const editProfile = (req, res) => {
    res.render('editProfile', { pageTitle: 'editProfile' });
};
export const changePassword = (req, res) => {
    res.render('changePassword', { pageTitle: 'changePassword' });
};

export const join = (req, res) => {
    res.render('join', { pageTitle: 'join' });
};

export const login = (req, res) => {
    res.render('login', { pageTitle: 'login' });
};

export const home = (req, res) => {
    res.render('home', { pageTitle: 'home' });
};

export const logout = (req, res) => {
    res.render('logout', { pageTitle: 'logout' });
};
