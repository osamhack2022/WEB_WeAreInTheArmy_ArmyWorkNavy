import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { BoardRepository } from './board.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([BoardRepository]),
    AuthModule],
  controllers: [BoardController],
  providers: [BoardService]
})
export class BoardModule { }
