import express from 'express';
import routes from '../routes';

export const meet = (req, res) => {
    res.render('meet', { pageTitle: 'meet' });
};

export const upload = (req, res) => {
    res.render('upload', { pageTitle: 'upload' });
};
export const meetDetail = (req, res) => {
    res.render('meetDetail', { pageTitle: 'meetDetail' });
};
export const editMeet = (req, res) => {
    res.render('editMeet', { pageTitle: 'editMeet' });
};
export const deleteMeet = (req, res) => {
    res.render('deleteMeet', { pageTitle: 'deletMeet' });
};
