const router = require("express").Router();

const Time = require("../db").import("../models/time");

// GET
router.get("/", (req, res) => {
  Time.findAll({
    where: {},
  })
    .then((times) =>
      res.status(200).json({
        times: times,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

router.post("/", (req, res) => {
  const timeFromRequest = {
    nameOfPark: req.body.nameOfPark,
    route: req.body.route,
    length: req.body.length,
    time: req.body.time,
    owner_id: req.user.id,
  };
  Time.create(timeFromRequest)
    .then((time) =>
      res.status(200).json({
        time: time,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

// UPDATE BY ID
router.put("/:id", (req, res) => {
  Time.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((time) =>
      res.status(200).json({
        time: time,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

router.delete("/:id", (req, res) => {
  Time.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((trail) =>
      res.status(200).json({
        time: time,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

module.exports = router;
