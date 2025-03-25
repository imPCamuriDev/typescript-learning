interface IPerson {
    id: number;
    sayMyName(): string;
}

class Person implements IPerson {
    readonly id: number;
    protected name: string; // Só pode ser acessada/alterada na sua classe ou subclasse
    private age: number; // Só pode ser acessada nessa classe

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName():string {
        return this.name;
    }
    
}

class Employee extends Person {
    constructor(id: number, name: string, age: number {
        super(id, name, age)
    }

    
}

const pedro = new Person(1, "Pedro", 16);

