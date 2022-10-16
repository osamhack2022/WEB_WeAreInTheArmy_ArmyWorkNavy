import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, ParseIntPipe, UseGuards, Req, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { multerConfigs } from 'src/configs/multer.config';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Controller('/api/board')
@ApiTags("Boards API")
@UseGuards(AuthGuard())
export class BoardController {
  constructor(private readonly boardService: BoardService) { }

  @Post("/createBoard")
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto,
    @Req() req): Promise<Board> {
    return this.boardService.createBoard(createBoardDto, req.user);
  }

  @Delete("/deleteBoard/:idx")
  deleteBoard(@Param("idx", ParseIntPipe) idx: number, @Req() req): Promise<void> {
    return this.boardService.deleteBoard(idx, req.user);
  }

  @Patch("/updateBoard/:idx")
  @UsePipes(ValidationPipe)
  updateBoard(
    @Param('idx', ParseIntPipe) idx: number,
    @Body() updateBoardDto: UpdateBoardDto,
    @Req() req
  ): Promise<Board> {
    return this.boardService.updateBoard(idx, updateBoardDto, req.user);
  }

  @Get("/getAllBoards")
  getAllBoards(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }

  @Get("/getBoardsByAuth")
  getBoardsById(@Req() req): Promise<Board[]> {
    return this.boardService.getBoardsbyId(req.user);
  }

  @Get("/getBoardByIndex/:idx")
  getBoardByIdx(@Param("idx") idx: number): Promise<Board> {
    return this.boardService.getBoardByIdx(idx);
  }

  @Post("/uploadImages")
  @UseInterceptors(FilesInterceptor("images", 10, multerConfigs))
  // FileInterceptors("Key value of the from", "limit for the number of files", "file upload configure")
  uploadImages(
    @UploadedFiles() files: File[]
  ): object {
    return this.boardService.uploadImages(files);
  }


  /*
  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+id, updateBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(+id);
  }
  */
}
