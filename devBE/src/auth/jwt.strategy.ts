import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersRepository } from "./users.repository";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "./entities/users.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository
    ) {
        super({
            secretOrKey: "secretnumber",// should be modified
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload) {
        const { identifier } = payload;
        const user: User = await this.usersRepository.findOneBy({ identifier });

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}