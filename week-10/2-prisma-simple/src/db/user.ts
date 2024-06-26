import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();


/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    return prisma.user.create({
        data: {
            username,
            password,
            name
        }
    });
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    });
}
