export default {
    Query: {
        sayHello:() async() => {
            console.log(await prisma)
            return "Hello";
        }
    }
}