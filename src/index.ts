interface IFoo {
  text: string;
}

class Demo {
  foo(opts: IFoo) {
    console.log(opts.text);
  }
}

export { Demo }
export type { IFoo }