const bcrypt = require('bcrypt')

const data = {

    users: [
        {
        name:'ennsaf mabrouk',
        email:'insafmabrouk@gmail.com',
        password:bcrypt.hashSync('1234',8),
        isAdmin:true,
        isArtist:false
        },
        {
        name:'amal mabrouk',
        email:'amalmabrouk@gmail.com',
        password:bcrypt.hashSync('1234',8),
        isAdmin:false,
        isArtist:true
        },
        {
        name:'user mabrouk',
        email:'user@gmail.com',
        password:bcrypt.hashSync('1234',8),
        isAdmin:false,
        isArtist:false,
        }
],

 products:[
{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img1',
    postedBy: 'amal mabrouk'

},
{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img2',
    postedBy: 'amal mabrouk'
},
{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img3',
    postedBy: 'amal mabrouk'    
},

{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img4',
    postedBy: 'amal mabrouk'    
},


{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img5',
    postedBy: 'amal mabrouk'    
},

{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img6',
    postedBy: 'amal mabrouk'    
},

{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img7',
    postedBy: 'amal mabrouk'    
},

{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img8',
    postedBy: 'amal mabrouk'    
},

{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img9',
    postedBy: 'amal mabrouk'    
},

{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img10',
    postedBy: 'amal mabrouk'    
},

{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img11',
    postedBy: 'amal mabrouk'    
},

{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img12',
    postedBy: 'amal mabrouk'    
},

{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img13',
    postedBy: 'amal mabrouk'    
},
{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img14',
    postedBy: 'amal mabrouk'    
},
{
    title:"starry night",
    category:'oil',
    price:'115dt',
    photo:'/images/img15',
    postedBy: 'amal mabrouk'    
}
]
}
module.exports= data