const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/relationshipDB')
    .then(() => console.log('DB Connected'));

const userSchema = new mongoose.Schema({
    name: String,
    age:Number,
    addresses: [
        {
            _id: { id: false },
            lane: String,
            city: String,
            state: String,
            country: String
        }
    ],
  
});


const User = mongoose.model('User', userSchema);

const makeUser = async()=> {
    
    const user = new User({ name: 'Vivek', age: 21 });
    await user.save();
    console.log('User Created')
    console.log(user);
  
}

// makeUser();


async function addAddress(id) {
    
    const user = await User.findById(id);

    user.addresses.push({
        lane: 'Mall Road',
        city: 'Shimla',
        state: 'Himachal Pradesh',
        country: 'India'
    });

    await user.save();
    console.log(user);

}

addAddress('618d2913e5b970608075a9b4');