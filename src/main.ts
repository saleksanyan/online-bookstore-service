import { getRepository } from 'typeorm';
import { User } from './modules/user/entities/user.entity';

// Find all users

(async function name() {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    console.log(users);
})();

