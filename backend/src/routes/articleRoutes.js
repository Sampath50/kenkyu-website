import express from "express";

const router =
express.Router();

let articles = [

{
title:
"AI Research",

author:
"Admin",

category:
"Technology"
}

];

router.get(
"/",
(req,res)=>{

res.json(
articles
);

}
);

router.post(
"/",
(req,res)=>{

articles.push({

...req.body,

category:
"Submitted"

});

res.json({

message:
"Success"

});

}
);

export default router;