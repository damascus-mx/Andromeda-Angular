/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Post data mocker
 */
import { Post } from 'src/app/domain/models/post.model';
import { ContentType } from 'src/app/enums/content.enum';
import { TagType } from 'src/app/enums/tag.enum';


export const POSTS: Post[] = [
    {
        id: 0, user: 'Dan Bilzerian', iat: 'Just Now', username: 'danbilzerian',
        user_pic: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/d15e96067143bbcbaae4ceefc5766723/5DB494FF/t51.2885-19/s150x150/41677722_309612136484816_4022476815346958336_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
        content: [
            {
                url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/0fc176568eba9d5e36cb74d690788c0d/5DCD0AAF/t51.2885-15/e35/43913555_126298765017616_1011547909646441890_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
                type: ContentType.image,
                poster: null
            },
            {
                url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/32f3be07973e42b49ed327bd9d5debe4/5DCFC78A/t51.2885-15/e35/43985365_936100413254322_1562691206546706091_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
                type: ContentType.image,
                poster: null
            },
            {
                url: 'https://scontent.cdninstagram.com/vp/d82905d12abc5c6bca7ca8546ebf82e8/5D3CB19A/t50.2886-16/65063499_344337012858583_6582257566913396736_n.mp4?_nc_ht=scontent.cdninstagram.com',
                type: ContentType.video,
                poster: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/b89ff68e8f194a20cea920410adc0159/5D3C8748/t51.2885-15/e35/64911448_338576153480737_4031371555550485882_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
            }
        ],
        reactions: 1032941, total_comments: 368485, comments: null,
        message: 'Kings. 👑👑👑👑 @maluma @steveaoki #wildlife #malumababy #steveaoki',
        reacted_by_user: true, show: false, user_verified: true, comment_by_user: false, user_comment: null,
        tags: [
            {type: TagType.user, tagged: 'maluma'}, { type: TagType.user, tagged: 'steveaoki' },
            {type: TagType.hash, tagged: 'wildlife'}
        ],
        likes: [
            {
                user: 'National Geographic', username: 'natgeo',
                user_pic: 'https://scontent-lax3-1.cdninstagram.com/vp/ab59482805436e5fa09a5006d9e8178b/5DE9B4E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com'
            },
            {
                user: 'National Geographic', username: 'natgeo',
                user_pic: 'https://scontent-lax3-1.cdninstagram.com/vp/ab59482805436e5fa09a5006d9e8178b/5DE9B4E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com'
            },
            {
                user: 'National Geographic', username: 'natgeo',
                user_pic: 'https://scontent-lax3-1.cdninstagram.com/vp/ab59482805436e5fa09a5006d9e8178b/5DE9B4E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com'
            },
            {
                user: 'National Geographic', username: 'natgeo',
                user_pic: 'https://scontent-lax3-1.cdninstagram.com/vp/ab59482805436e5fa09a5006d9e8178b/5DE9B4E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com'
            },
            {
                user: 'JBalvin', username: 'jbalvin',
                user_pic: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/5f1a2aa20cc7f2f598c74988f27ce707/5DC81F40/t51.2885-19/s150x150/50949721_1502579463208225_2518030465403715584_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net'
            },
            {
                user: 'Hiram Vega', username: 'hiramunozl',
                user_pic: 'https://scontent-lax3-1.cdninstagram.com/vp/3c71640e03a6e75b7e97921a084ae304/5DEB0112/t51.2885-19/s320x320/65807850_333791757565999_6726542801334435840_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com'
            }
        ]
    },
    {
        id: 1, user: 'National Geographic', iat: '10 days ago', username: 'natgeo',
        user_pic: 'https://scontent-lax3-1.cdninstagram.com/vp/ab59482805436e5fa09a5006d9e8178b/5DE9B4E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
        content: [
            {
                url: 'https://scontent-lax3-1.cdninstagram.com/vp/c6bcc0eca4c4ebeec6514e09b0a5c67c/5DB002DC/t51.2885-15/e35/s1080x1080/66067424_711562099287206_4971644151218203888_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
                type: ContentType.image,
                poster: null
            },
            {
                url: 'https://scontent-lax3-1.cdninstagram.com/vp/f2618d458614bd2861e3514c4d2d06c6/5DEEAC56/t51.2885-15/e35/s1080x1080/67087114_3130326846992316_7552604814536304182_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
                type: ContentType.image,
                poster: null
            },
            {
                url: 'https://scontent-lax3-1.cdninstagram.com/vp/e6f3f9d7c38bf40d780cccdef9b8bf5e/5DE54691/t51.2885-15/e35/s1080x1080/67193120_156107055510324_4128112282628904754_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
                type: ContentType.image,
                poster: null
            }
        ],
        reactions: 3899, total_comments: 450, comments: null,
        message: 'Photo by Stephen Wilkes @stephenwilkes',
        reacted_by_user: false, show: false, user_verified: true, comment_by_user: false, user_comment: null,
        tags: [{type: TagType.user, tagged: 'stephenwilkes'}],
        likes: []
    },
    {
        id: 2, user: 'Bruno Arevalo', iat: '10 min. ago', username: 'br1arevalo',
        user_pic: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        content: [
            {
                url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                type: ContentType.image,
                poster: null
            }
        ],
        reactions: 29, total_comments: 3, comments: null,
        message: 'Oliendo a unas perras #UltraMacho #JustDogLife', reacted_by_user: false, show: false, user_verified: false,
        comment_by_user: false, user_comment: null,
        tags: [{type: TagType.hash, tagged: 'UltraMacho'}, {type: TagType.hash, tagged: 'JustDogLife'}],
        likes: []
    },
    {
        id: 3, user: 'J Balvin', iat: '1 hr. ago', username: 'jbalvin',
        user_pic: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/5f1a2aa20cc7f2f598c74988f27ce707/5DC81F40/t51.2885-19/s150x150/50949721_1502579463208225_2518030465403715584_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
        content: [
            {
                url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/9ad39c541665ce930b19da692bb2b2f5/5DA92CE5/t51.2885-15/e35/p1080x1080/65047793_2295897530524755_8071433904541774619_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
                type: ContentType.image,
                poster: null
            }
        ],
        reactions: 4000578, total_comments: 368485, comments: null,
        message: 'Dios bendiga al reggaeton #jbalvin #bitches #fuckyeah', reacted_by_user: false, show: false, user_verified: true,
        comment_by_user: false, user_comment: null,
        tags: [{type: TagType.hash, tagged: 'jbalvin'}, {type: TagType.hash, tagged: 'bitches'}, {type: TagType.hash, tagged: 'fuckyeah'}],
        likes: []
    },
    {
        id: 4, user: 'Hiram Vega', iat: '1 week ago.', username: 'hiramunozl',
        user_pic: 'https://scontent-lax3-1.cdninstagram.com/vp/3c71640e03a6e75b7e97921a084ae304/5DEB0112/t51.2885-19/s320x320/65807850_333791757565999_6726542801334435840_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
        content: [
            {
                url: 'https://scontent-lax3-1.cdninstagram.com/vp/5e5d93b734cc475f738398508a904904/5DE90A4B/t51.2885-15/e35/p1080x1080/67417418_1646923982110784_1597810393399550430_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
                type: ContentType.image,
                poster: null
            }
        ],
        reactions: 2, total_comments: 0, comments: null,
        message: 'Mirando al universo #HiramHawkings #SoyHermoso', reacted_by_user: false, show: false, user_verified: true,
        comment_by_user: false, user_comment: null,
        tags: [{type: TagType.hash, tagged: 'HiramHawkings'}, {type: TagType.hash, tagged: 'SoyHermoso'}],
        likes: []
    }
    /*
    {
        user: 'The Film Enthusiast', iat: '8 min. ago', username: 'filmenthusiast',
        user_pic: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/28bcf60122d2533dcffdff38320ff357/5DCF07D0/t51.2885-19/s150x150/60760279_442245146561471_7971197295486042112_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
        content: [
            // Video
            {
                url: 'https://scontent.cdninstagram.com/vp/27d312cafde3bfc3f7c481ec7d5ffe87/5D37A91A/t50.2886-16/67657447_508302069913936_6626636448623702362_n.mp4?_nc_ht=scontent.cdninstagram.com',
                type: ContentType.video,
                show: false
            },
            {
                url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/a754f3f39cec88005aaa46d1dd004d55/5D33F863/t51.2885-15/e35/67137280_935794703427310_6630961622201072724_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
                type: ContentType.video,
                show: false
            }
        ],
        reactions: 8579, total_comments: 54, comments: null,
        message: '#StrangerThings Season 4 set to begin shooting in October this year, according to a new listing from Production Weekly. This means that the new season of the hit series could premiere in 2020! 💥[via @filmthusiastnews]',
        reacted_by_user: false, show: false, user_verified: false, comment_by_user: false, user_comment: null,
        tags: [{type: TagType.hash, tagged: 'StrangerThings'}, {type: TagType.user, tagged: 'filmthusiastnews'}]
    }*/
];

