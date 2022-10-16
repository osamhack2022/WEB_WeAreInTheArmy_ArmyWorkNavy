import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardRepository } from './board.repository';
import { Board } from './entities/board.entity';
import { User } from 'src/auth/entities/users.entity';

@Injectable()
export class BoardService {

  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository
  ) { }

  async createBoard(createBoardDto: CreateBoardDto, user:User): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  async deleteBoard(idx: number, user: User): Promise<void> {
    this.boardRepository.deleteBoard(idx, user);
  }

  async updateBoard(idx: number, updateBoardDto: UpdateBoardDto): Promise<Board> {
    return this.boardRepository.updateBoard(idx, updateBoardDto);
  }

  async getBoardByIdx(idx: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({ idx });
    if (!found) {
      throw new NotFoundException(`Can't find board with index: ${idx}`);
    }
    return found;
  }

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async getBoardsbyId(user: User): Promise<Board[]> {
    return this.boardRepository.getBoardsById(user);
  }



  /*
  create(createBoardDto: CreateBoardDto) {
    return 'This action adds a new board';
  }

  findAll() {
    return `This action returns all board`;
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
  */
}
