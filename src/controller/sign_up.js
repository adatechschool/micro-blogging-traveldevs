// import { PrismaClient } from "@prisma/client/extension";
// import { hashSync } from "bcrypt";
// import { prisma } from "../../server";

// app.post('/signup', async (req, res) => {
//     const {username, email, password} = req.body;

//     let user = await prisma.user.findFirst({where: {email}})
//     if (user){
//         throw Error ('L\'utilisateur existe déja')
//     }
//     user = await prisma.user.create({
//         data:{
//             username,
//             email,
//             password:hashSync(password,10)
//         }
//     })
//     res.json(user)
// })

// app.post('/signup', async (req, res) => {
//         const newUser = await prisma.users.create({
//             data: {
//                 username: req.body.username,
//                 email: req.body.email,
//                 password: hashed
//             },
//         })
//         return res.json({
//             message: `${req.body.username} account has been created`
//         })
//     }
// )