import routes from "../routes";
import Meet from "../models/Meet";
import Member from "../models/Member";
import moment from "moment";

export const home = async (req, res) => {
  try {
    const meets = await Meet.find({}).populate("creator");
    res.render("home", { pageTitle: "home", meets });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "home", meets: [] });
  }
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload" });
};
export const postUpload = async (req, res) => {
  const {
    body: { title },
    file: { location },
  } = req;
  console.log(req.file);
  const newMeet = await Meet.create({
    fileUrl: location,
    title,
    creator: req.user.id,
  });
  req.user.meets.push(newMeet.id);
  req.user.save();
  // To Do:Upload and save meet
  res.redirect(routes.meetDetail(newMeet.id));
};

export const meetDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const meet = await Meet.findById(id);
    // meet 내부에 있는 member Array로 name을 출력하기
    const name = [];
    const money = [];
    const total = [];
    for (const iterator of meet.members) {
      const search = await Member.findById(iterator.toString());
      total.push(search);
      name.push(search.name);
      money.push(search.money);
      console.log(search);
    }
    res.render("meetDetail", {
      pageTitle: `${meet.title}`,
      name,
      meet,
      money,
      total,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getMemberDetail = async (req, res) => {
  // 모임 내의 인원 삭제 및 돈 추가
  const {
    params: { id },
  } = req;
  try {
    const member = await Member.findById(id);
    res.render("memberDetail", { pageTitle: "memberDetail", member });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postMemberDetail = async (req, res) => {
  // 모임 내의 인원 삭제 및 돈 추가
  const {
    params: { id },
    body: { money, name, detail, date },
  } = req;
  try {
    await Member.findOneAndUpdate(
      { _id: id },
      { money, name, detail, date, moment }
    );
    const member = await Member.findById(id);
    const meet = await Meet.findById(member.meet[0]._id);
    res.redirect(routes.meetDetail(meet.id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getEditMeet = async (req, res) => {
  //Meet 수정 방안 생각.
  const {
    params: { id },
  } = req;
  try {
    const meet = await Meet.findById(id);
    res.render("editMeet", { pageTitle: "editMeet", meet });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const postEditMeet = async (req, res) => {
  //Meet 수정 방안 생각.
  const {
    params: { id },
    body: { title },
  } = req;
  try {
    await Meet.findOneAndUpdate({ _id: id }, { title });
    res.redirect(routes.meetDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const getPlusMember = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const meet = await Meet.findById(id);
    res.render("plusMember", { pagetitle: `Plus ${meet.title}`, meet });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const postPlusMember = async (req, res) => {
  const {
    params: { id },
    body: { name },
  } = req;
  try {
    const meet = await Meet.findById(id);
    const newMember = await Member.create({
      name,
      money: 0,
      meet: id,
    });
    meet.members.push(newMember.id);
    meet.save();
    res.redirect(routes.meetDetail(meet.id));
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

export const deleteMeet = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Meet.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
