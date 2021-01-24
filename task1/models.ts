export class Member {
    name: string
    age: number
    plays: Array<string>
}

export class Members {
    current: Array<Member>
    past: Array<Member>
}

export class Band {
    members: Members
}

export class ExtendedMembers extends Members{
    all: Array<string>
}
export class Expected {
    members: ExtendedMembers
    plays: Object
}
