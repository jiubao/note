//tsc --experimentalDecorators --emitDecoratorMetadata 1.ts

function Injectable(): ClassDecorator & PropertyDecorator {
	return (target) => target;
}

class Engine {}

@Injectable()
class Car {
	constructor(public engine: Engine) {}
}

