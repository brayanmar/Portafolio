const { Router } = require("express");
const User = require ("../../Shema/modelo")
const route = Router();

route.get("/usuario", async (_req: any, _res: any) => {
    _res.send( await User.find())
   // console.log()
})

route.post("/postUser", async (_req: any, _res: any)=> {
    
const {name, correo, descripcion} = _req.body;
let usuario: any = await User.find();
try {
  let a = usuario.some((a:any) => a.name === name)
  let user;
  a === true? console.log("se repitio") : 
    user = await User.create({name,correo,descripcion});
    await user.save();
  _res.json({info: "Genial, informacion enviada con exito"})
}catch(err: any){
    err = "ups! se repitio el email o nombre"
    _res.status(400).json({ info: err });
}
})

module.exports = route;