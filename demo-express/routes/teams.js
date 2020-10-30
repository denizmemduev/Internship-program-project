const express = require('express');
const router = express.Router();

const admin = require('firebase-admin');
const db = admin.firestore();



router.post('/', (req, res) => {
    (async () => {
        try {
          await db.collection('teams').doc()
              .create({
                  teamname: req.body.teamname
                  
                });
              
          return res.status(200).send();
        } catch (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      })();
  });


//------------------------------------------------------------------------------

router.get('/', (req, res) => {
    (async () => {
        try {
            let query = db.collection('teams');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                const selectedItem = {
                    id: doc.id,
                  data: doc.data()

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

module.exports = router;