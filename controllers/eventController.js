const groupEvent = require("../models/groupEvent");
const SoloEvent = require("../models/soloEvent");
const NewSoloEvent = require("../models/soloEventNew");
const NewGroupEvent = require("../models/groupEventNew");

var usernames = ["admin1", "admin2", "admin3", "admin4", "admin5", "admin6", "admin7", "admin8", "admin9", "admin10"];
var password = "enthusia@23";

exports.getLogin = (req, res) => {
  res.render("login", { error: "" });
};

exports.postLogin = (req, res) => {
  const data = req.body;
  if (usernames.includes(req.body.username) && req.body.password === password) {
    req.session.userid = req.body.username;
    res.render(data.type === "solo" ? "soloregister" : "groupregister", {
      event: data,
      error: "",
      success: "",
    });
  } else {
    res.render("login", {
      error: "Invalid Credentials",
    });
  }
};

exports.postParticipant = async (req, res) => {
  const event = req.body;
  console.log("Event", event);
  //   const val = await SoloEvent.find({});
  if (event.type === "solo") {
    try {
      const e = await SoloEvent.findOne({
        rid: event.rid,
        eventName: event.event,
      });
      console.log(e);

      if (e) {
        res.render("soloEventDisplay", {
          event: e,
        });
      } else {
        res.render("soloregister", {
          event,
          error: "Participant not found - Enter New Participant",
          success: "",
        });
      }
    } catch (ex) {
      console.log(ex);
      res.send(ex);
    }
  } else if (event.type === "group") {
    try {
      const e = await groupEvent.findOne({
        rid: event.rid,
        eventName: event.event,
      });
      console.log(e);

      if (e) {
        res.render("groupEventDisplay", {
          event: e,
        });
      } else {
        res.render("groupregister", {
          event,
          error: "Participant not found",
          success: "",
        });
      }
    } catch (ex) {
      console.log(ex);
      res.send(ex);
    }
  } else {
    res.send("No Event Type");
  }
};

exports.postEventAdd = async (req, res) => {
  const event = req.body;

  if (event.rid == "") {
    // res.render("groupregister", {
    //   event: event,
    //   error: "Please enter Registration ID",
    // });
    res.send("No Registration ID");
  }

  if (event.type === "solo") {
    console.log("Hello");
    try {
      const e = await NewSoloEvent.findOne({ rid: event.rid });
      if (e) {
        res.render("soloregister", {
          event,
          error: "Registration ID already exists",
          success: "",
        });
      } else {
        await NewSoloEvent.create(event);
        res.render("soloregister", {
          event: { type: "solo", event: event.eventName, rid: "" },
          success: "Participant Added Successfully",
          error: "",
        });
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  } else if (event.type === "group") {
    try {
      const e = await NewGroupEvent.findOne({ rid: event.rid });
      if (e) {
        res.render("groupregister", {
          event,
          error: "Registration ID already exists",
          success: "",
        });
      } else {
        await NewGroupEvent.create(event);
        res.render("groupregister", {
          event: { type: "group", event: event.eventName, rid: "" },
          success: "Participant Added Successfully",
          error: "",
        });
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  } else {
    res.send("No Event Type");
  }
};

exports.postEventDisplay = async (req, res) => {
  const name = req.query.name;
  const type = req.query.type;
  console.log("Post Event Display", name, type);
  if (type === "solo") {
    const e = await NewSoloEvent.find({ eventName: name });
    console.log(e);
    res.render("soloEventParticipants", {
      participants: e,
    });
  } else if (type === "group") {
    const e = await NewGroupEvent.find({ eventName: name });
    console.log(e);
    res.render("groupEventParticipants", {
      participants: e,
    });
  } else {
    res.send("No Event Type");
  }
};

exports.getLogout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
