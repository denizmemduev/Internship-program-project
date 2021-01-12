const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();
const admin = require("firebase-admin");
const db = admin.firestore();

//-------------------CREATE new Intern-----------------------------------------
router.post("/", (req, res) => {
  (async () => {
    try {
      await db.collection("interns").add(req.body);
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

//-----------------READ-ALL-----------------------------------------------------
router.get("/", (req, res) => {
  (async () => {
    try {
      let query = db.collection("interns");
      let response = [];
      await query.get().then((querySnapshot) => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
          const selectedItem = {
            id: doc.id,
            firstname: doc.data().firstname,
            lastname: doc.data().lastname,
            university: doc.data().university,
          };
          response.push(selectedItem);
        }
      });
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});
//------------DELETE INTERN----------------------------------------------

router.delete("/", (req, res) => {
  (async () => {
    try {
      const document = db.collection("interns").doc(req.body.id);
      await document.delete();
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

//----------------------------------------------------------------------------

module.exports = router;
