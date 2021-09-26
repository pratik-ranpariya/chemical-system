var controller = (module.exports = require("../controller/controller"));
var checksession = (module.exports = require("../controller/checksession"));

module.exports = {
  myapi: () => {
    app.get("/", controller.home);
    app.get("/s/:page", controller.shop);
    app.get("/productdetail/:id", controller.productdetail);
    app.get("/inquiry/:page", checksession.session, controller.inquirypage);
    app.post("/deleteinquiry/:_id", checksession.session, controller.deleteinquiry);
    app.get("/product/:page", checksession.session, controller.productpage);
    app.get("/addProduct", checksession.session, controller.addproduct);
    app.get("/editproduct/:_id", checksession.session, controller.editproduct_get);
    app.post("/deleteproduct/:_id", checksession.session, controller.deleteproduct);
    app.post("/tselling/:_id", checksession.session, controller.tsellingid);
    app.post("/deletebanner/:_id", checksession.session, controller.deletebanner);
    app.post("/deleteposter/:_id", checksession.session, controller.deleteposter);
    app.post("/insertproduct", checksession.session, controller.insertproducts);
    app.post("/editproductimage/:_id",checksession.session, controller.editproductimage);
    app.post("/editproduct/:_id", checksession.session, controller.editproduct_post);
    app.post("/addinquiry/:id", controller.addinquiry);
    app.get("/banner", checksession.session, controller.getbanner);
    app.post("/login", controller.login);
    app.post("/addposter",checksession.session, controller.addposter);
    app.post("/addbanner", checksession.session, controller.addbanner);
    app.get("/admin", controller.getadmin);
    app.get("/termsandconditions", controller.gettermsandconditions);
    app.get("/privacypolicy", controller.privacypolicy);
    app.get("/about-mantradiamond", controller.aboutmantradiamonds);
    app.get("/contactus", controller.contactus);
    app.get("/index", controller.index);
    app.get("/logout", controller.logout);
    app.post('/editproductpdf/:_id', checksession.session, controller.editproductpdf)
    app.get('/deleteimage/:image/:_id',  checksession.session, controller.deleteproductimage)
  
    app.use(function (req, res) {
        res.send(
          '<style>*{transition:all .6s}html{height:100%}body{font-family:Lato,sans-serif;color:#888;margin:0}#main{display:table;width:100%;height:100vh;text-align:center}.fof{display:table-cell;vertical-align:middle}.fof h1{font-size:50px;display:inline-block;padding-right:12px;animation:type .5s alternate infinite}@keyframes type{from{box-shadow:inset -3px 0 0 #888}to{box-shadow:inset -3px 0 0 transparent}}</style><div id="main"><div class="fof"><h1>Error 404, Page Not Found</h1></div></div>'
        );
      });
  },

  responseData: (file, data, res) => {
    data["BaseUrl"] = BaseUrl;
    return res.render(file, data);
  },
};
