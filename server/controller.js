// const Todomodel = require("./database/databaseSchema");
const excel = require("exceljs");
const path = require("path");
const workbook = new excel.Workbook();
const customerSheet = workbook.addWorksheet("customerData", {
  properties: { tabColor: { argb: "FFC0000" } },
});
customerSheet.addRow(["name", "email", "number", "message"]);

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

exports.handleForm = async function (req, res) {
  if (Object.keys(req.body) !== 0) {
    try {
      const { name, email, number, message } = req.body;
      customerSheet.addRow([name, email, number, message]);
      const excelPath = path.join(__dirname, "customerData.xlsx");
      workbook.xlsx
        .writeFile(excelPath)
        .then(() => {
          setTimeout(()=>{
            res.sendStatus(200);
          },2000)
        })
        .catch(() => {
          res.sendStatus(500);
        });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.sendStatus(400);
  }
};
