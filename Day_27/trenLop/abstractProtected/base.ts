interface BaseI {
    getId: () => number;
    getName: () => string;
    setName: (name: string) => void;
    toString: () => string;
}

abstract class  Base implements BaseI {
    private id: number;
    protected name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    // toString -> Chưa trả về gì -> Chỉ khai báo nhưng không dùng -> abstract
    // Nếu method là abstract -> thì class: abstract class
    abstract toString()
}

export {BaseI, Base};

// base là 1 instance
// Base là 1 class


// private -> chỉ class này gọi được
// protect -> class này và các class kế thừa gọi được
// public -> tất cả