// autobind decorator
namespace App {
  export function autobind(
    // underscore because we are telling typescript that we are aware of these variables and we need to accept it but we will not use it
    _: any,
    _2: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }
}
