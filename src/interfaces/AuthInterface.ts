import {User} from '@/entities/User';

export default interface AuthInterface {

    user: User,
    access_token: string,

}
