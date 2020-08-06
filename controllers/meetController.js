import express from 'express';
import routes from '../routes';
import Meet from '../models/Meet';

export const home = async (req, res) => {
    try {
        const meets = await Meet.find({});
        res.render('home', { pageTitle: 'home', meets });
    } catch (error) {
        console.log(error);
        res.render('home', { pageTitle: 'home', meets: [] });
    }
};

export const meet = (req, res) => {
    res.render('meet', { pageTitle: 'meet', meets });
};

export const getUpload = (req, res) => {
    res.render('upload', { pageTitle: 'upload' });
};
export const postUpload = async (req, res) => {
    const {
        body: { title },
        file: { path },
    } = req;
    const newMeet = await Meet.create({
        fileUrl: path,
        title,
    });
    console.log(newMeet);
    // To Do:Upload and save meet
    res.redirect(routes.meetDetail(newMeet.id));
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
