import { WebpackRequireContext } from 'webpack-env';

declare interface NodeRequire {
  context: WebpackRequireContext;
}

declare module '*.ts' {
  const value: any;
  export default value;
}

declare module '*.tsx' {
  const content: React.ComponentType<any>;
  export default content;
}

declare interface NodeRequire {
  context: any;
}

declare global {
  interface NodeRequire {
    context: any;
  }
}

declare module NodeJS {
  interface Global {
    __non_webpack_require__: NodeRequire;
  }
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module NodeRequire {
  function resolve(path: string): string;
  function ensure(
    paths: string[],
    callback: (require: <T>(path: string) => T) => void,
    chunkName?: string
  ): void;
  const context: (
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ) => {
    keys(): string[];
    <T>(id: string): T;
  };
}