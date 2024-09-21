interface DataHeader {
    title: string;
}

export interface DataComment {
    image: string;
    name: string;
    title: string;
    comment: string;
}

const dataheader:DataHeader[] = [
    {"title": 'Rated 5 Stars in Reviews'},
    {"title": 'Rated 5 Stars in Report Guru'},
    {"title": 'Rated 5 Stars in BestTech'}
]

const datacomment:DataComment[] = [
    {
        image: './assets/images/image-colton.jpg',
        name: '    Colton Smith ',
        title: '    Verified Buyer',
        comment: `"We needed the same printed design as the one we had ordered a week prior.     Not only did they find the original order, but we also received it in time.     Excellent!"`
    },
    {
        image: './assets/images/image-irene.jpg',
        name:   'Irene Roberts ',
        title:  'Verified Buyer',
        comment: `"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."`
    },
    {
        image: './assets/images/image-anne.jpg',
        name:  'Anne Wallace ',
        title: 'Verified Buyer',
        comment: `"Put an order with this company and can only praise them for the very highstandard. Will definitely use them again and recommend them to everyone!"`
    },
]

export {
    datacomment,
    dataheader
}