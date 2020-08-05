import express from 'express';
import routes from '../routes';
import meetings from '../db';

export const meet = (req, res) => {
    res.render('meet', { pageTitle: 'meet', meetings });
};

export const getUpload = (req, res) => {
    res.render('upload', { pageTitle: 'upload' });
};
export const postUpload = (req, res) => {
    const {
        body: { title },
    } = req;
    // To Do:Upload and save meet
    res.redirect(routes.meetDetail(231535));
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
