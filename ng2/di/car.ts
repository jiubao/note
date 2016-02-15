//tsc --experimentalDecorators --emitDecoratorMetadata 1.ts
function Injectable(): ClassDecorator {
  return (target) => target;
}

@Injectable()
class Engine {}

@Injectable()
class Car {
  constructor(public engine: Engine) {}
}
