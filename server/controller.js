const Customermodel = require("./database/databaseSchema");

exports.handleHome = async function (req, res) {
  res.render("pages/Home.ejs", {
    title: "Home Page",
    layout: "layouts/Layout.ejs",
    css: "./stylesheets/home.css",
  });
};

exports.handleContact = async function (req, res) {
  res.render("pages/Contact.ejs", {
    title: "Contact page",
    layout: "layouts/Layout.ejs",
    css: "../stylesheets/contact.css",
  });
};

exports.handleResume = async function (req, res) {
  res.render("pages/Resume.ejs", {
    title: "Resume Page",
    layout: "layouts/Layout.ejs",
    css: "../stylesheets/Resume.css",
  });
};
exports.handleForm = async function (req, res) {
  if (Object.keys(req.body) !== 0) {
    const { name, email, number, message } = req.body;
    const customerData = {
      name,
      email,
      number,
      message,
    };
    const CustomerData = new Customermodel({ ...customerData });
    try {
      const savedCustomer = await CustomerData.save();
      res.sendStatus(201)
    } catch (err) {
      console.log(err);
    }
  } else {
    res.sendStatus(400);
  }
};
