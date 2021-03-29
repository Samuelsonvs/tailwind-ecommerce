import bcrypt from 'bcryptjs';

const fakedata = {
    topList: [
        {   name:'Jako',
            image:'/images/imgTopList/card3.jpg',
            category:'Jako',
            description:'birds',
        },
        {   name:'Muhabbet Kuşu',
            image:'/images/imgTopList/card4.png',
            category:'Muhabbet Kuşu',
            description:'birds',
        },
        {   name:'Monk',
            image:'/images/imgTopList/card5.jpg',
            category:'Monk',
            description:'birds',
        },
        {   name:'Muhabbet Kuşu',
            image:'/images/imgTopList/card6.jpg',
            category:'Muhabbet Kuşu',
            description:'birds',
        },
        {   name:'Jako',
            image:'/images/imgTopList/card7.jpg',
            category:'Jako',
            description:'birds',
        },
        {   name:'Sultan',
            image:'/images/imgTopList/card8.jpg',
            category:'Sultan',
            description:'birds',
        },
        {   name:'Jako',
            image:'/images/imgTopList/card9.jpg',
            category:'Jako',
            description:'birds',
        },
        {   name:'Muhabbet Kuşu',
            image:'/images/imgTopList/card10.jpg',
            category:'Muhabbet Kuşu',
            description:'birds',
        },
    ],
    
    lastEntered: [
        {   name:'Jako',
            image:'/images/imgTopList/card3.jpg',
            category:'Jako',
            description:'birds',
        },
        {   name:'Muhabbet Kuşu',
            image:'/images/imgTopList/card4.png',
            category:'Muhabbet Kuşu',
            description:'birds',
        },
        {   name:'Monk',
            image:'/images/imgTopList/card5.jpg',
            category:'Mong',
            description:'birds',
        },
        {   name:'Muhabbet Kuşu',
            image:'/images/imgTopList/card6.jpg',
            category:'Muhabbet Kuşu',
            description:'birds',
        },
    ]

};

export const users = [ 
    {
        name: 'Samuel',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234567', 8),
        isAdmin: true,
    },
    {
        name: 'John',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234567', 8),
        isAdmin: false,
    },
];


export default fakedata;