import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, ParseIntPipe, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Controller('/api/board')
@UseGuards(AuthGuard())
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

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
  updateBoard(@Param('idx', ParseIntPipe) idx: number, @Body() updateBoardDto: UpdateBoardDto): Promise<Board> {
    return this.boardService.updateBoard(idx, updateBoardDto);
  }

  @Get("/getAllBoards")
  getAllBoards(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }

  @Get("/getBoardsById")
  getBoardsById(@Req() req): Promise<Board[]> {
    return this.boardService.getBoardsbyId(req.user);
  }


  @Get("/:idx")
  getBoardByIdx(@Param("idx") idx: number): Promise<Board> {
    return this.boardService.getBoardByIdx(idx);
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