const { Router } = require("express");
const User = require ("../../Shema/modelo")
const route = Router();

route.get("/usuario", async (_req: any, _res: any) => {
    
    _res.send( await User.find())

})

route.post("/postUser", async (_req: any, _res: any)=> {
    
const {name, correo, descripcion} = _req.body;
console.log(_req.body)
try {
    let user = await User.create({name,correo,descripcion});
    await user.save();
    _res.json({ error: null, user });
}catch(err: any){
    _res.status(400).json({ error: err.message });
}
})

module.exports = route;