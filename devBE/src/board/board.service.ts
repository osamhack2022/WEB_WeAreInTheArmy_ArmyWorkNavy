import { Injectable, NotFoundException, UploadedFiles } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardRepository } from './board.repository';
import { Board } from './entities/board.entity';
import { User } from 'src/auth/entities/users.entity';
import { createImageURL } from 'src/configs/multer.config';
import { unlink } from 'fs';
import { basename } from 'path';

@Injectable()
export class BoardService {

  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository
  ) { }

  async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  async deleteBoard(idx: number, user: User): Promise<void> {
    this.boardRepository.deleteBoard(idx, user);
  }

  async updateBoard(idx: number, updateBoardDto: UpdateBoardDto, user: User): Promise<Board> {
    return this.boardRepository.updateBoard(idx, updateBoardDto, user);
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

  uploadImages(files: File[]): object {
    const uploadedFiles: string[] = [];

    for (const file of files) {
      uploadedFiles.push(createImageURL(file));
    }

    const unfixed = setTimeout(() => { this.autoRemoveImages(uploadedFiles) }, 3000);

    // clearTimeout(unfixed);

    console.log(unfixed);

    return {
      status: 200,
      message: "File was successfully uploaded",
      data: {
        files: uploadedFiles,
      }
    }
  }

  async autoRemoveImages(uploadedFiles: string[]) {
    for (const filePath of uploadedFiles) {
      unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`${basename(filePath)} was deleted`);
      });
    }
  }

  // fixImages() {

  // }


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
