
const { faker } = require('@faker-js/faker');
const fs = require('fs');

interface User {
    id: number
    img: string
    name: string
    lastName: string
    country: string
    city: string
    email: string
    jobTitle: string
    dateOfBirth: string
    password: string
}

interface Messages {
    id: number
    messages: Array<Object>
}

interface Posts {
    id: number
    posts: Array<Object>
}

interface Friends {
    id: number
    friends: Array<Object>
}

interface Data {
    users: User[]
    messages: Messages[]
    posts: Posts[]
    friends: Friends[]
}

let data = (): Data => ({
    users: [...Array(25)].map((_, index) => ({
        id: index + 1,
        img: `https://image.freepik.com/free-photo/_176420-${Math.floor(Math.random() * 10000)}.jpg?size=150`,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        country: faker.address.country(),
        city: faker.address.city(),
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        dateOfBirth: faker.date.between('1975-01-01', '2000-01-01').toLocaleDateString(),
        password: faker.internet.password()
    })),
    messages: [...Array(25)].map((_, index) => ({
        id: index + 1,
        messages: [],
    })),
    posts: [...Array(25)].map((_, index) => ({
        id: index + 1,
        posts: [],
    })),
    friends: [...Array(25)].map((_, index) => ({
        id: index + 1,
        friends: [],
    })),
})

fs.writeFileSync("./db.json", JSON.stringify(data()))

