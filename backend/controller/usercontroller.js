import User from "../model/usermodel.js";

export const create = async(req, res)=>{
    try{
        const userData = new User(req.body);

        if (!userData){
            return res.status(404).json({msg: "User data not found"} );
        }

        const savedData = await userData.save();
        res.status(200).json(savedData);

    } catch(error){
        res.status(500).json({error:error});
    }
}

export const getAll = async(req, res) =>{
    try{
       const userData = await User.find();
       if(!userData){
          return res.status(404).json({msg: "User data not found"} );
       }
       res.status(200).json(userData);
    } catch (error){
        res.status(500).json({error:error});
    }

}

export const getOne = async(req, res) =>{
    try{
       const id = req.params.id;
       const userExist = await User.findById(id);
       if(!userExist){
        return res.status(404).json({msg: "User not found"} );
       }
       res.status(200).json(userExist);
    } catch (error){
        res.status(500).json({error:error});
    }

}

export const update = async(req , res) =>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
           return res.status(404).json({msg: "User not found"} );
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "User updated successfully"});
     } catch (error){
         res.status(500).json({error:error});
     }
}

export const deleteUser = async(req, res) =>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
           return res.status(404).json({msg: "User not found"} );
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg: "user info deleted successfully"});
     } catch (error){
         res.status(500).json({error:error});
     }
}

// export const sendEmail = async () => {
//     try {
//         const selectedUserData = users.filter((user) =>
//             selectedUsers.includes(user._id)
//         );
//         const emailBody = selectedUserData.map((user) => `
//     Name: ${user.fname} ${user.lname}
//     Phone Number: ${user.PhoneNumber}
//     Email: ${user.email}
//     Hobbies: ${user.Hobbies}
//   `).join('\n\n');

// await axios.post('/api/sendEmail', {
//     to: 'info@redpositive.in',
//     subject: 'Selected User Data',
//     text: emailBody,
// })

// console.log('Email sent successfully');
// }
// catch (error) {
//         console.error(error);
//     }
// }