import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { PostModule } from './post/post.module';
@Module({
  imports: [PostModule],
  controllers: [UserController],
})
export class AppModule {}
