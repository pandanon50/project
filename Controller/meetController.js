import express from 'express';
import routes from '../routes';

export const meet = (req, res) => {
    res.send('meet');
};

export const upload = (req, res) => {
    res.send('upload');
};
export const meetDetail = (req, res) => {
    res.send('meetDetail');
};
export const editMeet = (req, res) => {
    res.send('editMeet');
};
export const deleteMeet = (req, res) => {
    res.send('deleteMeet');
};
