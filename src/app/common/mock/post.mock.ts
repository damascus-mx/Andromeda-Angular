/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Post data mocker
 */
interface Content {
    url: string;
    type: number;
    show: boolean;
}
interface Tag {
    type: number;
    tagged: string;
}
interface Post {
    user: string;
    username: string;
    user_verified: boolean;
    iat: string;
    user_pic: string;
    content: Content[];
    message: string;
    reactions: number;
    total_comments: number;
    comments: string[];
    reacted_by_user: boolean;
    comment_by_user: boolean;
    user_comment: string;
    tags: Tag[];
    show: boolean;
}

export const POSTS: Post[] = [
    {
        user: 'Dan Bilzerian', iat: 'Just Now', username: 'danbilzerian',
        user_pic: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/d15e96067143bbcbaae4ceefc5766723/5DB494FF/t51.2885-19/s150x150/41677722_309612136484816_4022476815346958336_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
        content: [
            {
                url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/0fc176568eba9d5e36cb74d690788c0d/5DCD0AAF/t51.2885-15/e35/43913555_126298765017616_1011547909646441890_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
                type: 0,
                show: false
            },
            {
                url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/32f3be07973e42b49ed327bd9d5debe4/5DCFC78A/t51.2885-15/e35/43985365_936100413254322_1562691206546706091_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
                type: 0,
                show: false
            },
            {
                url: 'https://scontent.cdninstagram.com/vp/11213a3584349b8faa1847bbac2a2ef1/5D36C329/t50.2886-16/58438150_270086777232076_2915253887323602944_n.mp4?_nc_ht=scontent.cdninstagram.com',
                type: 1,
                show: false
            }
        ],
        reactions: 1032941, total_comments: 368485, comments: null,
        message: 'Kings. 👑👑👑👑 @maluma @steveaoki #wildlife #malumababy #steveaoki',
        reacted_by_user: true, show: false, user_verified: true, comment_by_user: false, user_comment: null,
        tags: [{type: 0, tagged: 'maluma'}, { type: 0, tagged: 'steveaoki' }, {type: 1, tagged: 'wildlife'}]
    },
    {
        user: 'National Geographic', iat: '10 days ago', username: 'natgeo',
        user_pic: 'https://scontent-lax3-1.cdninstagram.com/vp/ab59482805436e5fa09a5006d9e8178b/5DE9B4E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
        content: [
            {
                url: 'https://scontent-lax3-1.cdninstagram.com/vp/c6bcc0eca4c4ebeec6514e09b0a5c67c/5DB002DC/t51.2885-15/e35/s1080x1080/66067424_711562099287206_4971644151218203888_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
                type: 0,
                show: false
            },
            {
                url: 'https://scontent-lax3-1.cdninstagram.com/vp/f2618d458614bd2861e3514c4d2d06c6/5DEEAC56/t51.2885-15/e35/s1080x1080/67087114_3130326846992316_7552604814536304182_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
                type: 0,
                show: false
            },
            {
                url: 'https://scontent-lax3-1.cdninstagram.com/vp/e6f3f9d7c38bf40d780cccdef9b8bf5e/5DE54691/t51.2885-15/e35/s1080x1080/67193120_156107055510324_4128112282628904754_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
                type: 0,
                show: false
            }
        ],
        reactions: 3899, total_comments: 450, comments: null,
        message: 'Photo by Stephen Wilkes @stephenwilkes',
        reacted_by_user: false, show: false, user_verified: true, comment_by_user: false, user_comment: null,
        tags: [{type: 0, tagged: 'stephenwilkes'}]
    },
    {
        user: 'Bruno Arevalo', iat: '10 min. ago', username: 'br1arevalo',
        user_pic: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        content: [
            {
                url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                type: 0 ,
                show: false
            }
        ],
        reactions: 29, total_comments: 3, comments: null,
        message: 'Oliendo a unas perras #UltraMacho #JustDogLife', reacted_by_user: false, show: false, user_verified: false,
        comment_by_user: false, user_comment: null,
        tags: [{type: 1, tagged: 'UltraMacho'}, {type: 1, tagged: 'JustDogLife'}]
    },
    {
        user: 'J Balvin', iat: '1 hr. ago', username: 'jbalvin',
        user_pic: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/5f1a2aa20cc7f2f598c74988f27ce707/5DC81F40/t51.2885-19/s150x150/50949721_1502579463208225_2518030465403715584_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
        content: [
            {
                url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/9ad39c541665ce930b19da692bb2b2f5/5DA92CE5/t51.2885-15/e35/p1080x1080/65047793_2295897530524755_8071433904541774619_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
                type: 0,
                show: false
            }
        ],
        reactions: 4000578, total_comments: 368485, comments: null,
        message: 'Dios bendiga al reggaeton #jbalvin #bitches #fuckyeah', reacted_by_user: false, show: false, user_verified: true,
        comment_by_user: false, user_comment: null,
        tags: [{type: 1, tagged: 'jbalvin'}, {type: 1, tagged: 'bitches'}, {type: 1, tagged: 'fuckyeah'}]
    },
    {
        user: 'The Film Enthusiast', iat: '8 min. ago', username: 'filmenthusiast',
        user_pic: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/28bcf60122d2533dcffdff38320ff357/5DCF07D0/t51.2885-19/s150x150/60760279_442245146561471_7971197295486042112_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
        content: [
            // Video
            {
                url: 'https://scontent.cdninstagram.com/vp/27d312cafde3bfc3f7c481ec7d5ffe87/5D37A91A/t50.2886-16/67657447_508302069913936_6626636448623702362_n.mp4?_nc_ht=scontent.cdninstagram.com',
                type: 1,
                show: false
            }
            /*
            {
                url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/a754f3f39cec88005aaa46d1dd004d55/5D33F863/t51.2885-15/e35/67137280_935794703427310_6630961622201072724_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
                type: 2,
                show: false
            }*/
        ],
        reactions: 8579, total_comments: 54, comments: null,
        message: '#StrangerThings Season 4 set to begin shooting in October this year, according to a new listing from Production Weekly. This means that the new season of the hit series could premiere in 2020! 💥[via @filmthusiastnews]',
        reacted_by_user: false, show: false, user_verified: false, comment_by_user: false, user_comment: null,
        tags: [{type: 1, tagged: 'StrangerThings'}, {type: 0, tagged: 'filmthusiastnews'}]
    }
];

