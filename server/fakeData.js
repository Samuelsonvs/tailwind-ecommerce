import bcrypt from 'bcryptjs';

const fakedata = {
    allProduct : [
        {   
            city:'İstanbul',
            name:'Amazon yellow crowned',
            owner: 'Samuel Johnson',
            phone:'555 55 55',
            image:  [
                '/images/default/amazon1/mid1.jpg',
                '/images/default/amazon1/mid2.jpg',
                '/images/default/amazon1/thumb1.jpg',
                '/images/default/amazon1/thumb2.jpg',
                '/images/default/amazon1/zoom1.jpg',
                '/images/default/amazon1/zoom2.jpg'
            ],
            category:'Amazon',
            gender: 'male',
            age: '1-2 year',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'Producer',
            options: {
                hypeList: false,
                topList: false,
                latestList: false,
            }
        },
        {   
            city:'İstanbul',
            name:'Lovely lovebirds',
            owner: 'Lance Wolfe',
            phone:'555 55 55',
            image:  [
                '/images/default/lovebird1/mid1.jpg',
                '/images/default/lovebird1/mid2.jpg',
                '/images/default/lovebird1/mid3.jpg',
                '/images/default/lovebird1/thumb1.jpg',
                '/images/default/lovebird1/thumb2.jpg',
                '/images/default/lovebird1/thumb3.jpg',
                '/images/default/lovebird1/zoom1.jpg',
                '/images/default/lovebird1/zoom2.jpg',
                '/images/default/lovebird1/zoom3.jpg',
            ],
            category:'Lovebird',
            gender: 'male',
            age: '0-5 month',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'By owner',
            options: {
                hypeList: false,
                topList: false,
                latestList: false,
            }
        },
        {   
            city:'Kocaeli',
            name:'Forpus bird 6 month old',
            owner: 'Grover Hurlbutt',
            phone:'555 55 55',
            image:  [
                '/images/default/forpus1/mid1.jpg',
                '/images/default/forpus1/mid2.jpg',
                '/images/default/forpus1/mid3.jpg',
                '/images/default/forpus1/thumb1.jpg',
                '/images/default/forpus1/thumb2.jpg',
                '/images/default/forpus1/thumb3.jpg',
                '/images/default/forpus1/zoom1.jpg',
                '/images/default/forpus1/zoom2.jpg',
                '/images/default/forpus1/zoom3.jpg',
            ],
            category:'Forpus',
            gender: 'female',
            age: '0-5 month',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'By owner',
            options: {
                hypeList: false,
                topList: false,
                latestList: true,
            }
        },
        {   
            city:'İstanbul',
            name:'Baby finchs',
            owner: 'Conrad Walker',
            phone:'555 55 55',
            image:  [
                '/images/default/finch1/mid1.jpg',
                '/images/default/finch1/mid2.jpg',
                '/images/default/finch1/thumb1.jpg',
                '/images/default/finch1/thumb2.jpg',
                '/images/default/finch1/zoom1.jpg',
                '/images/default/finch1/zoom2.jpg'
            ],
            category:'Finch',
            gender: 'mixed',
            age: '0-5 month',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'Producer',
            options: {
                hypeList: false,
                topList: false,
                latestList: true,
            }
        },
        {   
            city:'İzmir',
            name:'African Grey male',
            owner: 'Hunter Corbyn',
            phone:'555 55 55',
            image:  [
                '/images/default/africangrey1/mid1.jpg',
                '/images/default/africangrey1/mid2.jpg',
                '/images/default/africangrey1/thumb1.jpg',
                '/images/default/africangrey1/thumb2.jpg',
                '/images/default/africangrey1/zoom1.jpg',
                '/images/default/africangrey1/zoom2.jpg'
            ],
            category:'Africangrey',
            gender: 'male',
            age: '2+ year',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'By owner',
            options: {
                hypeList: true,
                topList: false,
                latestList: true,
            }
        },
        {   
            city:'İzmir',
            name:'African Grey',
            owner: 'Gene Cress',
            phone:'555 55 55',
            image:  [
                '/images/default/africangrey2/mid1.jpg',
                '/images/default/africangrey2/mid2.jpg',
                '/images/default/africangrey2/thumb1.jpg',
                '/images/default/africangrey2/thumb2.jpg',
                '/images/default/africangrey2/zoom1.jpg',
                '/images/default/africangrey2/zoom2.jpg'
            ],
            category:'Africangrey',
            gender: 'female',
            age: '2+ year',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'By owner',
            options: {
                hypeList: true,
                topList: false,
                latestList: true,
            }
        },
        {   
            city:'Ankara',
            name:'Alexandrine parrot',
            owner: 'Elmer Young',
            phone:'555 55 55',
            image:  [
                '/images/default/alexandrine1/mid1.jpg',
                '/images/default/alexandrine1/mid2.jpg',
                '/images/default/alexandrine1/thumb1.jpg',
                '/images/default/alexandrine1/thumb2.jpg',
                '/images/default/alexandrine1/zoom1.jpg',
                '/images/default/alexandrine1/zoom2.jpg'
            ],
            category:'Alexandrine',
            gender: 'male',
            age: '2+ year',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'Producer',
            options: {
                hypeList: true,
                topList: true,
                latestList: false,
            }
        },
        {   
            city:'Kocaeli',
            name:'Adult budgies',
            owner: 'Christopher Paul',
            phone:'555 55 55',
            image:  [
                '/images/default/budgie1/mid1.jpg',
                '/images/default/budgie1/mid2.jpg',
                '/images/default/budgie1/thumb1.jpg',
                '/images/default/budgie1/thumb2.jpg',
                '/images/default/budgie1/zoom1.jpg',
                '/images/default/budgie1/zoom2.jpg'
            ],
            category:'Budgie',
            gender: 'mixed',
            age: '1-2 year',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'Producer',
            options: {
                hypeList: true,
                topList: false,
                latestList: false,
            }
        },
        {   
            city:'Kocaeli',
            name:'Baby budgies',
            owner: 'Norman Smart',
            phone:'555 55 55',
            image:  [
                '/images/default/budgie2/mid1.jpg',
                '/images/default/budgie2/mid2.jpg',
                '/images/default/budgie2/mid3.jpg',
                '/images/default/budgie2/thumb1.jpg',
                '/images/default/budgie2/thumb2.jpg',
                '/images/default/budgie2/thumb3.jpg',
                '/images/default/budgie2/zoom1.jpg',
                '/images/default/budgie2/zoom2.jpg',
                '/images/default/budgie2/zoom3.jpg',
            ],
            category:'Budgie',
            gender: 'mixed',
            age: '0-5 month',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'By owner',
            options: {
                hypeList: false,
                topList: true,
                latestList: false,
            }
        },
        {   
            city:'Ankara',
            name:'Roseringed bird',
            owner: 'Norris Cunningham',
            phone:'555 55 55',
            image:  [
                '/images/default/roseringed1/mid1.jpg',
                '/images/default/roseringed1/mid2.jpg',
                '/images/default/roseringed1/thumb1.jpg',
                '/images/default/roseringed1/thumb2.jpg',
                '/images/default/roseringed1/zoom1.jpg',
                '/images/default/roseringed1/zoom2.jpg'
            ],
            category:'Roseringed',
            gender: 'male',
            age: '2+ year',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'By owner',
            options: {
                hypeList: false,
                topList: true,
                latestList: false,
            }
        },
        {   
            city:'İstanbul',
            name:'Male budgie',
            owner: 'Barnaby Beck',
            phone:'555 55 55',
            image:  [
                '/images/default/budgie3/mid1.jpg',
                '/images/default/budgie3/mid2.jpg',
                '/images/default/budgie3/thumb1.jpg',
                '/images/default/budgie3/thumb2.jpg',
                '/images/default/budgie3/zoom1.jpg',
                '/images/default/budgie3/zoom2.jpg'
            ],
            category:'Budgie',
            gender: 'male',
            age: '1-2 year',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'By owner',
            options: {
                hypeList: false,
                topList: true,
                latestList: false,
            }
        },
        {   
            city:'İstanbul',
            name:'Budgies',
            owner: 'Samuel Johnson',
            phone:'555 55 55',
            image:  [
                '/images/default/budgie4/mid1.jpg',
                '/images/default/budgie4/mid2.jpg',
                '/images/default/budgie4/mid3.jpg',
                '/images/default/budgie4/thumb1.jpg',
                '/images/default/budgie4/thumb2.jpg',
                '/images/default/budgie4/thumb3.jpg',
                '/images/default/budgie4/zoom1.jpg',
                '/images/default/budgie4/zoom2.jpg',
                '/images/default/budgie4/zoom3.jpg',
            ],
            category:'Budgie',
            gender: 'male',
            age: '0-5 month',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'By owner',
            options: {
                hypeList: false,
                topList: true,
                latestList: false,
            }
        },
        {   
            city:'İstanbul',
            name:'Canary',
            owner: 'Barnaby Beck',
            phone:'555 55 55',
            image:  [
                '/images/default/canary1/mid1.jpg',
                '/images/default/canary1/mid2.jpg',
                '/images/default/canary1/thumb1.jpg',
                '/images/default/canary1/thumb2.jpg',
                '/images/default/canary1/zoom1.jpg',
                '/images/default/canary1/zoom2.jpg'
            ],
            category:'Canary',
            gender: 'male',
            age: '1-2 year',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'Producer',
            options: {
                hypeList: false,
                topList: true,
                latestList: false,
            }
        },
        {   
            city:'İzmir',
            name:'Baby cockatiels',
            owner: 'Mortimer Wood',
            phone:'555 55 55',
            image:  [
                '/images/default/cockatiel1/mid1.jpg',
                '/images/default/cockatiel1/mid2.jpg',
                '/images/default/cockatiel1/mid3.jpg',
                '/images/default/cockatiel1/mid4.jpg',
                '/images/default/cockatiel1/mid5.jpg',
                '/images/default/cockatiel1/thumb1.jpg',
                '/images/default/cockatiel1/thumb2.jpg',
                '/images/default/cockatiel1/thumb3.jpg',
                '/images/default/cockatiel1/thumb4.jpg',
                '/images/default/cockatiel1/thumb5.jpg',
                '/images/default/cockatiel1/zoom1.jpg',
                '/images/default/cockatiel1/zoom2.jpg',
                '/images/default/cockatiel1/zoom3.jpg',
                '/images/default/cockatiel1/zoom4.jpg',
                '/images/default/cockatiel1/zoom5.jpg',

            ],
            category:'Cockatiel',
            gender: 'mixed',
            age: '0-5 month',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'Producer',
            options: {
                hypeList: false,
                topList: false,
                latestList: false,
            }
        },
        {   
            city:'İzmir',
            name:'Cockatiel male',
            owner: 'Ernest Carr',
            phone:'555 55 55',
            image:  [
                '/images/default/cockatiel2/mid1.jpg',
                '/images/default/cockatiel2/mid2.jpg',
                '/images/default/cockatiel2/mid3.jpg',
                '/images/default/cockatiel2/thumb1.jpg',
                '/images/default/cockatiel2/thumb2.jpg',
                '/images/default/cockatiel2/thumb3.jpg',
                '/images/default/cockatiel2/zoom1.jpg',
                '/images/default/cockatiel2/zoom2.jpg',
                '/images/default/cockatiel2/zoom3.jpg',
            ],
            category:'Cockatiel',
            gender: 'male',
            age: '1-2 year',
            description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
            seller: 'By owner',
            options: {
                hypeList: false,
                topList: false,
                latestList: false,
            }
        },
    ],
};

export const fakeReqData = [
    {   
        name:'Cockatiel male',
        city:'Izmir',
        owner: 'Ernest Carr',
        phone:'555 55 55',
        image: 'zp6pqldmdn1619689736837',
        category:'Cockatiel',
        gender: 'male',
        age: '1-2 year',
        description:'Duis facilisis malesuada justo sodales tempus. Suspendisse et auctor leo. Nulla facilisi. Proin eu molestie mauris. Mauris sollicitudin quam eget orci ultrices fringilla. Nullam tempus hendrerit velit at sagittis. Sed ut lorem ut diam porta efficitur. Morbi hendrerit suscipit turpis, id blandit nunc.',
        seller: 'By owner',
        options: {
            hypeList: false,
            topList: false,
            latestList: false,
        }
    }
]
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