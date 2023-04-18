// Web service setup
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Add support for CORS
app.use(cors());

// Data model and persistent store setup
const manager = require("./manager.js");
const m = manager();

// User API setup
const userAPI = require('./userAPI');
app.use('/userAPI', userAPI);

// Deliver the app's home page to browser clients
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Resources available in this web API
app.get("/api", (req, res) => {
  // Here are the resources that are available for users of this web API...
  // YOU MUST EDIT THIS COLLECTION
  const links = [];
  // This app's resources...
  links.push({ "rel": "collection", "href": "/api/english/units", "methods": "GET,POST,PUT" });
  links.push({ "rel": "collection", "href": "/api/english/equips", "methods": "GET,POST,PUT" });
  links.push({ "rel": "collection", "href": "/api/english/teams", "methods": "GET,POST,PUT" });
  links.push({ "rel": "collection", "href": "/api/english/dungeons", "methods": "GET,POST,PUT" });
  links.push({ "rel": "collection", "href": "/api/english/comments", "methods": "GET,POST,PUT" });
  links.push({ "rel": "collection", "href": "/api/english/banner", "methods": "GET,POST,PUT" });
  links.push({ "rel": "collection", "href": "/api/english/board", "methods": "GET,POST,PUT" });
  // Example resources...
  //links.push({ "rel": "collection", "href": "/api/customers", "methods": "GET,POST" });
  //links.push({ "rel": "collection", "href": "/api/employees", "methods": "GET,POST" });
  const linkObject = { 
    "apiName": "Web API example version 7",
    "apiDescription": "(add a brief description here)",
    "apiVersion": "1.0", 
    "apiAuthor": "Ian Heeralal",
    "links": links
  };
  res.json(linkObject);
});

// Request handlers for data entities (listeners)
// Get all - Units
app.get("/api/english/units", (req, res) => {
  m.getUnitList()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Get one - Units - name
app.get("/api/english/units/:name", (req, res) => {
  m.getUnitDetail(req.params.name)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Get one - Units - id
app.get("/api/english/units/id/:id", (req, res) => {
  m.getUnitDetailId(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Add new - Units
app.post("/api/english/units/add", (req, res) => {
  m.addUnit(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Edit existing - Units
app.put("/api/english/units/edit/:name", (req, res) => {
  m.editUnit(req.params.name, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Delete item - Units
app.delete("/api/english/units/delete/:name", (req, res) => {
  m.deleteUnit(req.params.name)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

//--------------------------------------------------------------------------------------------------------------------

// Get all - Equipments
app.get("/api/english/equips", (req, res) => {
  m.getEquipList()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Get one - Equipments - name
app.get("/api/english/equips/:name", (req, res) => {
  m.getEquipDetail(req.params.name)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Get one - Equipments - id
app.get("/api/english/equips/id/:id", (req, res) => {
  m.getEquipDetailId(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Add new - Equipments
app.post("/api/english/equips/add", (req, res) => {
  m.addEquip(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Edit existing - Equipments
app.put("/api/english/equips/edit/:name", (req, res) => {
  m.editEquip(req.params.name, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Delete item - Equipments
app.delete("/api/english/equips/delete/:name", (req, res) => {
  m.deleteEquip(req.params.name)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

//--------------------------------------------------------------------------------------------------------------------

// Get all - team
app.get("/api/english/teams", (req, res) => {
  m.getTeamList()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Get one - team - name
app.get("/api/english/teams/:name", (req, res) => {
  m.getTeamDetail(req.params.name)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Get one - team - id
app.get("/api/english/teams/id/:id", (req, res) => {
  m.getTeamDetailId(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Add new - teams
app.post("/api/english/teams/add", (req, res) => {
  m.addTeam(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Edit existing - teams
app.put("/api/english/teams/edit/:name", (req, res) => {
  m.editTeam(req.params.name, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Delete item - teams
app.delete("/api/english/teams/delete/:name", (req, res) => {
  m.deleteTeam(req.params.name)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

//--------------------------------------------------------------------------------------------------------------------

// Get all - dungeons
app.get("/api/english/dungeons", (req, res) => {
  m.getDungeonList()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Get one - dungeons - name
app.get("/api/english/dungeons/:name", (req, res) => {
  m.getDungeonDetail(req.params.name)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Get one - dungeons - id
app.get("/api/english/dungeons/id/:id", (req, res) => {
  m.getDungeonDetailId(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Add new - dungeons
app.post("/api/english/dungeons/add", (req, res) => {
  m.addDungeon(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Edit existing - dungeons
app.put("/api/english/dungeons/edit/:name", (req, res) => {
  m.editDungeon(req.params.name, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Delete item - dungeons
app.delete("/api/english/dungeons/delete/:name", (req, res) => {
  m.deleteDungeon(req.params.name)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

//--------------------------------------------------------------------------------------------------------------------

// Get all - comments
app.get("/api/english/comments", (req, res) => {
  m.getCommentList()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Get one - comments 
app.get("/api/english/comments/:id", (req, res) => {
  m.getCommentDetail(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Add new - comments
app.post("/api/english/comments/add", (req, res) => {
  m.addComment(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Edit existing - comments
app.put("/api/english/comments/edit/:id", (req, res) => {
  m.editComment(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Delete item - comments
app.delete("/api/english/comments/delete/:id", (req, res) => {
  m.deleteComment(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

//--------------------------------------------------------------------------------------------------------------------

// Get all - Banner
app.get("/api/english/banner", (req, res) => {
  m.getBannerList()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Get one - Banner - name
app.get("/api/english/banner/:name", (req, res) => {
  m.getBannerDetail(req.params.name)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Get one - Banner - id
app.get("/api/english/banner/id/:id", (req, res) => {
  m.getBannerDetailId(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Add new - Banner
app.post("/api/english/banner/add", (req, res) => {
  m.addBanner(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Edit existing - Banner
app.put("/api/english/banner/edit/:name", (req, res) => {
  m.editBanner(req.params.name, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Delete item - Banner
app.delete("/api/english/banner/delete/:name", (req, res) => {
  m.deleteBanner(req.params.name)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

//--------------------------------------------------------------------------------------------------------------------

// Get all - Board
app.get("/api/english/board", (req, res) => {
  m.getBoardList()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Get one - Board - name
app.get("/api/english/board/:name", (req, res) => {
  m.getBoardDetail(req.params.name)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Get one - Board - id
app.get("/api/english/board/id/:id", (req, res) => {
  m.getBoardDetailId(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Add new - Board
app.post("/api/english/board/add", (req, res) => {
  m.addBoard(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Edit existing - Board
app.put("/api/english/board/edit/:name", (req, res) => {
  m.editBoard(req.params.name, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Delete item - Board
app.delete("/api/english/board/delete/:name", (req, res) => {
  m.deleteBoard(req.params.name)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

//--------------------------------------------------------------------------------------------------------------------

// Resource not found (this should be at the end)
app.use((req, res) => {
  res.status(404).send("Resource not found");
});

// Attempt to connect to the database, and
// tell the app to start listening for requests
m.MongoConnect().then(() => {
  app.listen(HTTP_PORT, () => { console.log("Ready to handle requests on port " + HTTP_PORT) });
})
  .catch((err) => {
    console.log("Unable to start the server:\n" + err);
    process.exit();
  });
