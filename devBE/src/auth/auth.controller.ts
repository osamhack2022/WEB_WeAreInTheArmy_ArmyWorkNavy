import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	ValidationPipe,
	Req,
	UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-user.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('api/auth/')
@ApiTags('Users and Authentication API')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('/signup')
	@ApiOperation({ summary: 'createUser API' })
	signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<void> {
		return this.authService.signUp(createUserDto);
	}

	@Post('/signin')
	@ApiOperation({ summary: 'authenticateCredentials API' })
	signIn(
		@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
	): Promise<{ accessToken: string }> {
		return this.authService.signIn(authCredentialsDto);
	}

	@Post('/test')
	@UseGuards(AuthGuard())
	@ApiOperation({ summary: 'get user object from authenticated client API' })
	test(@Req() req) {
		console.log('req', req.user);
	}

	@Get('/hello')
	hello() {
		return 'hello'
	}

	/*
  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
  */
}
