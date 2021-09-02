import * as fs from 'fs';
import { Command, flags } from '@oclif/command';
import { handle } from '@oclif/errors';

import { standupApp } from '../main';
import { INestApplication } from '@nestjs/common';

class NestJSCommand extends Command {
  private readonly app: INestApplication;

  static flags = {
    version: flags.version(),
    help: flags.help(),
    // run with --dir= or -d=
    dir: flags.string({
      char: 'd',
      default: process.cwd(),
    }),
  };

  async run(): Promise<void> {
    const { flags } = this.parse(NestJSCommand);
    const app = await standupApp();

    this.log(`This is where the work would happen! Folder=${flags.dir}`);

    return process.exit(0);
  }
}

NestJSCommand.run().then(null, (err) => handle(err));
