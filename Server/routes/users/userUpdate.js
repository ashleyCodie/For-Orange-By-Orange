import UserModel from "../../schemas/userModel.js"


const userUpdate = async (req, res) => {
    let {id} = req.params
    console.log(req.body)
    let {firstName, lastName, email, username, password, role, avatar, contactNumber, company, aboutMe, complex, city, state, releaseDate, friends} = req.body
    console.log(firstName, lastName, email, username, password, role, avatar, contactNumber, company, aboutMe, complex, city, state, releaseDate, friends)

    
    if (
        
        (!firstName) ||
        (!lastName) ||
        (!email) || 
        (!username) 

    ) {
        console.log("Error: Post parameters are not valid.")
        res.status(500).send("Error: Post parameters are not valid.")
    }
    else {
        try {
            const user = await UserModel.findByIdAndUpdate({ "_id": id }, {
                firstName, lastName, email, username, password, role, avatar, contactNumber, company, aboutMe, complex, city, state, releaseDate, friends
            })
            console.log("user", user)
            res.status(200).json({ "message": "User has been Updated.", user: user, success: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
          }
    }
}

export default userUpdate