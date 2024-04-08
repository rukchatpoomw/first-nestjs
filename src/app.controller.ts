import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}

  // Tested
  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  // Tested
  @Get('feed')
  async getPublishedPosts(): Promise<PostModel[]> {
    return this.postService.posts({
      where: { published: true },
    });
  }

  // Tested
  @Get('filtered-posts/:searchString')
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<PostModel[]> {
    return this.postService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  // Tested
  @Post('post')
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<PostModel> {
    const { title, content, authorEmail } = postData;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }
  // Tested
  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
  // Tested
  @Get('user/:id')
  async getUser(@Param('id') id: string) {
    return this.userService.getUser(+id);
  }
  // Tested
  @Get('user')
  async getAllUser() {
    return this.userService.getAllUsers();
  }
  // Tested
  @Patch('publish/:id')
  async publishPost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.updateOrPublishPost({
      where: { id: +id },
      data: { published: true },
    });
  }

  // Tested
  @Put('post/:id')
  async updatePost(
    @Param('id') id: string,
    @Body() postData: Partial<PostModel>,
  ): Promise<PostModel> {
    // Delete id on postData variable
    // For prevent payload with id
    // To make it change id on database
    delete postData.id;

    return this.postService.updateOrPublishPost({
      where: { id: +id },
      data: postData,
    });
  }

  // Tested
  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
