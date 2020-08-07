import express from 'express';
import routes from '../routes';
import Meet from '../models/Meet';
import Member from '../models/Member';

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
export const meetDetail = async (req, res) => {
    const {
        params: { id },
    } = req;
    console.log(typeof id);
    try {
        const meet = await Meet.findById(id);
        let nameArray = new Array(meet.members.length);
        // meet 내부에 있는 member Array로 name을 출력하기
        const name = await Member.findById(meet.members[0].toString());
        console.log(name);
        res.render('meetDetail', { pageTitle: `${meet.title}`, meet });
    } catch (error) {
        res.redirect(routes.home);
    }
};
export const editMeet = async (req, res) => {
    //Meet 수정 방안 생각.
    const {
        params: { id },
    } = req;
    try {
        res.render('editMeet', { pageTitle: 'editMeet' });
    } catch (error) {
        res.redirect(routes.home);
    }
};
export const getPlusMember = async (req, res) => {
    const {
        params: { id },
        body: { title },
    } = req;
    try {
        const meet = await Meet.findById(id);
        res.render('plusMember', { pagetitle: `Plus ${meet.title}`, meet });
    } catch (error) {
        res.redirect(routes.home);
    }
};
export const postPlusMember = async (req, res) => {
    const {
        params: { id },
        body: { name },
    } = req;
    console.log(req.body.name);
    console.log(id);
    try {
        const meet = await Meet.findById(id);
        const newMember = await Member.create({
            name,
            money: 0,
        });
        meet.members.push(newMember.id);
        meet.save();
        res.redirect(routes.meetDetail(meet.id));
    } catch (error) {
        console.log(error);
        res.status(400);
    }
};

export const deleteMeet = (req, res) => {
    res.render('deleteMeet', { pageTitle: 'deletMeet' });
};
