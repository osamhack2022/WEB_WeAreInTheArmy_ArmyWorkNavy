import { CustomRepository } from "src/database/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { User } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { ConflictException, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from "bcryptjs";

@CustomRepository(User)
export class UsersRepository extends Repository<User> {

    async createUser(createUserDto: CreateUserDto): Promise<void> {

        const { identifier, password, type, name, phone, organization, email, address } = createUserDto;

        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        const user = this.create({ identifier, password: hash, type, name, phone, organization, email, address });

        try {
            await this.save(user);
        } catch (error) {
            if (error.errno === 1062) {
                throw new ConflictException("The username already exists.");
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}