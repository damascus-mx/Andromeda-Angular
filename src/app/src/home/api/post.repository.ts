import { Repository } from 'src/app/common/interfaces/repository';

export interface Content {
    url: string;
    type: number;
    show: boolean;
}
export interface Post {
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
    show: boolean;
}

export class PostRepository implements Repository {
    // Data
    posts: Post[] = [
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
            reacted_by_user: true, show: false, user_verified: true
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
            message: 'Dios bendiga al reggaeton #jbalvin #bitches #fuckyeah', reacted_by_user: false, show: false, user_verified: true
        },
        {
            user: 'The Film Enthusiast', iat: '8 min. ago', username: 'filmenthusiast',
            user_pic: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/28bcf60122d2533dcffdff38320ff357/5DCF07D0/t51.2885-19/s150x150/60760279_442245146561471_7971197295486042112_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
            content: [
                // Video
                {
                    url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/2d31c8e816e3f27479da13c2d9748665/5D345D5A/t50.2886-16/67657447_508302069913936_6626636448623702362_n.mp4?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
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
            reacted_by_user: false, show: false, user_verified: false,
        }
    ];

    constructor() {}

    GetAll(): any[] {
        console.log(this.posts);
        return this.posts;
    }
    GetById(id: any) {
        return this.posts[id];
    }
    Create(model: any): void {
        throw new Error("Method not implemented.");
    }
    Update(id: any): void {
        throw new Error("Method not implemented.");
    }
    Delete(id: any): void {
        throw new Error("Method not implemented.");
    }

}
