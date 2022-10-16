import { User } from "src/auth/entities/users.entity";
import { CustomRepository } from "src/database/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { CreateBoardDto } from "./dto/create-board.dto";
import { UpdateBoardDto } from "./dto/update-board.dto";
import { Board } from "./entities/board.entity";
import { NotFoundException } from '@nestjs/common';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {

    async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
        const { type, title, description, location, admit, image } = createBoardDto;

        const board = this.create({
            type, title, description, location, admit, image, user
        });
        await this.save(board);
        return board;
    }

    async updateBoard(idx: number, updateBoardDto: UpdateBoardDto): Promise<Board> {
        const { type, title, description, location, admit, image } = updateBoardDto;

        const board = await this.findOneBy({ idx });
        board.type = type || board.type;
        board.title = title || board.title;
        board.description = description || board.description;
        board.location = location || board.location;
        board.admit = admit || board.admit;
        board.image = image || board.image;

        await this.save(board);
        return board;
    }

    async getBoardsById(user: User): Promise<Board[]> {
        const query = this.createQueryBuilder("board");

        query.where("board.identifier = :identifier", { identifier: user.identifier })

        const boards = await query.getMany();
        return boards;
    }

    async deleteBoard(idx: number, user: User): Promise<void> {
        try {
            const result = await this.createQueryBuilder()
                .delete()
                .from("board")
                .where("idx=:idx", { idx })
                .andWhere("identifier=:identifier", { identifier: user.identifier })
                .execute();
            console.log("result:", result);
        } catch {
            throw new NotFoundException(`Can't find board with idx: ${idx}`);
        }
    }
}