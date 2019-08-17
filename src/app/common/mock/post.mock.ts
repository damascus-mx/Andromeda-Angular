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
        image: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/d15e96067143bbcbaae4ceefc5766723/5DB494FF/t51.2885-19/s150x150/41677722_309612136484816_4022476815346958336_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
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
                url: 'https://scontent.cdninstagram.com/vp/6bbbea12c8e2cbe36d2b89a55a3c8bb3/5D42A05A/t50.2886-16/65063499_344337012858583_6582257566913396736_n.mp4?_nc_ht=scontent.cdninstagram.com',
                type: ContentType.video,
                poster: 'https://scontent-lax3-1.cdninstagram.com/vp/566c964f75c2e9026ba60ff517d4f34b/5D41CD48/t51.2885-15/e35/64911448_338576153480737_4031371555550485882_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
            }
        ],
        reactions: 1032941, total_comments: 368485, comments: null, place: false,
        message: 'Kings. 👑👑👑👑 @maluma @steveaoki #wildlife #malumababy #steveaoki',
        reacted_by_user: true, show: false, user_verified: true, comment_by_user: false, user_comment: null,
        tags: [
            {type: TagType.user, tagged: 'maluma'}, { type: TagType.user, tagged: 'steveaoki' },
            {type: TagType.hash, tagged: 'wildlife'}, {type: TagType.hash, tagged: 'malumababy'}
        ],
        likes: [
            {
                user: 'National Geographic', username: 'natgeo',
                image: 'https://scontent-lax3-1.cdninstagram.com/vp/ab59482805436e5fa09a5006d9e8178b/5DE9B4E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com'
            },
            {
                user: 'National Geographic', username: 'natgeo',
                image: 'https://scontent-lax3-1.cdninstagram.com/vp/ab59482805436e5fa09a5006d9e8178b/5DE9B4E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com'
            },
            {
                user: 'National Geographic', username: 'natgeo',
                image: 'https://scontent-lax3-1.cdninstagram.com/vp/ab59482805436e5fa09a5006d9e8178b/5DE9B4E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com'
            },
            {
                user: 'National Geographic', username: 'natgeo',
                image: 'https://scontent-lax3-1.cdninstagram.com/vp/ab59482805436e5fa09a5006d9e8178b/5DE9B4E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com'
            },
            {
                user: 'JBalvin', username: 'jbalvin',
                image: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/5f1a2aa20cc7f2f598c74988f27ce707/5DC81F40/t51.2885-19/s150x150/50949721_1502579463208225_2518030465403715584_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net'
            },
            {
                user: 'Hiram Vega', username: 'hiramunozl',
                image: 'https://scontent-lax3-1.cdninstagram.com/vp/3c71640e03a6e75b7e97921a084ae304/5DEB0112/t51.2885-19/s320x320/65807850_333791757565999_6726542801334435840_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com'
            }
        ]
    },
    {
        id: 1, user: 'Marquee Las Vegas', iat: '13 days ago', username: 'marqueelv',
        image: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/8f74504d19f8ddba6cfdcf599f7cbb12/5DE3551F/t51.2885-19/s150x150/58831730_1110356885814453_4785412111201206272_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
        content: [
            {
                url: 'https://scontent.cdninstagram.com/vp/1a1c5f985db91d931f2668d943a54ec0/5D4F431F/t50.2886-16/67216523_131607451409577_724955764653738059_n.mp4?_nc_ht=scontent.cdninstagram.com',
                type: ContentType.video,
                poster: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/6e8f32b8a5e6f9e0e39fbda18a9afcf2/5D4F3B48/t51.2885-15/e35/66374497_148304512919779_1044866921734854037_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net'
            },
            {
                url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/e8074c162fc5008e5e37710c15bfba70/5DC88CD0/t51.2885-15/e35/p1080x1080/65961906_491275825022299_8648252356819426426_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
                type: ContentType.image,
                poster: null
            },
            {
                url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/ec896b1bf5c8faea8d1671a7fb15304f/5DDE83EE/t51.2885-15/e35/p1080x1080/66260432_447284649451683_3377670158591451131_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
                type: ContentType.image,
                poster: null
            }
        ],
        reactions: 331, total_comments: 78, comments: null, place: true,
        message: 'ATTENTION ALL CAMPERS! Marquee University Summer Camp is back in session Thursday, August 15th with @DEORRO!',
        reacted_by_user: false, show: false, user_verified: true, comment_by_user: false, user_comment: null,
        tags: [{type: TagType.user, tagged: 'deorro'}, {type: TagType.hash, tagged: 'MarqueeLV'}],
        likes: []
    },
    {
        id: 2, user: 'Bruno Arevalo', iat: '10 min. ago', username: 'br1arevalo',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        content: [
            {
                url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                type: ContentType.image,
                poster: null
            }
        ],
        reactions: 29, total_comments: 3, comments: null, place: false,
        message: 'Oliendo a unas perras #UltraMacho #JustDogLife', reacted_by_user: false, show: false, user_verified: false,
        comment_by_user: false, user_comment: null,
        tags: [{type: TagType.hash, tagged: 'UltraMacho'}, {type: TagType.hash, tagged: 'JustDogLife'}],
        likes: []
    },
    {
        id: 3, user: 'J Balvin', iat: '1 hr. ago', username: 'jbalvin',
        image: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/5f1a2aa20cc7f2f598c74988f27ce707/5DC81F40/t51.2885-19/s150x150/50949721_1502579463208225_2518030465403715584_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
        content: [
            {
                url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/9ad39c541665ce930b19da692bb2b2f5/5DA92CE5/t51.2885-15/e35/p1080x1080/65047793_2295897530524755_8071433904541774619_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
                type: ContentType.image,
                poster: null
            }
        ],
        reactions: 4000578, total_comments: 368485, comments: null, place: false,
        message: 'Dios bendiga al reggaeton #jbalvin #bitches #fuckyeah', reacted_by_user: false, show: false, user_verified: true,
        comment_by_user: false, user_comment: null,
        tags: [{type: TagType.hash, tagged: 'jbalvin'}, {type: TagType.hash, tagged: 'bitches'}, {type: TagType.hash, tagged: 'fuckyeah'}],
        likes: []
    },
    {
        id: 4, user: 'Hiram Vega', iat: '1 week ago.', username: 'hiramuzl', place: false,
        image: 'https://scontent-lax3-1.cdninstagram.com/vp/3c71640e03a6e75b7e97921a084ae304/5DEB0112/t51.2885-19/s320x320/65807850_333791757565999_6726542801334435840_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
        content: [
            {
                url: 'https://scontent-lax3-1.cdninstagram.com/vp/5e5d93b734cc475f738398508a904904/5DE90A4B/t51.2885-15/e35/p1080x1080/67417418_1646923982110784_1597810393399550430_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
                type: ContentType.image,
                poster: null
            },
        ],
        reactions: 2, total_comments: 0, comments: null,
        message: 'Mirando al universo #HiramHawkings #SoyHermoso', reacted_by_user: false, show: false, user_verified: true,
        comment_by_user: false, user_comment: null,
        tags: [{type: TagType.hash, tagged: 'HiramHawkings'}, {type: TagType.hash, tagged: 'SoyHermoso'}],
        likes: []
    }
];

