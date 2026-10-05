export const students = ['John', 'Mark', 'Stephanie', 'Martha', 'Vlad'];
export const numbers = [2, 5, 8, 10];

export type Student = {
    name: string;
    age: number;
}

export type Teacher = {
    teacherName: string;
    teacherAge: number;
    active: boolean;
    students: Student[];
}

export const teachers: Teacher[] = [
    {
        teacherName: "Jan Nowak",
        teacherAge: 36,
        active: true,
        students: [
            {
                name: "Maciej Janosz",
                age: 12
            },
            {
                name: "Wojciech Kowalski",
                age: 15
            },
            {
                name: "Wioletta Poznańska",
                age: 1000000
            }
        ]
    },
    {
        teacherName: "Mariusz Flasinski",
        teacherAge: 56,
        active: true,
        students: [
            {
                name: "Jan Kot",
                age: 12
            },
            {
                name: "Jan Ziobro",
                age: 15
            },
            {
                name: "Adam Małysz",
                age: 41
            }
        ]
    },
    {
        teacherName: "Wojciech Kuzak",
        teacherAge: 44,
        active: false,
        students: [
            {
                name: "Janina Wrońska",
                age: 22
            },
            {
                name: "John Dover",
                age: 7
            },
            {
                name: "Emil Petterson",
                age: 46
            }
        ]
    }
];
