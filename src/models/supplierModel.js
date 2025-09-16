import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const create = async (supplier) => {
    return await prisma.supplier.create({
        data: supplier
    })
}

export const update = async (id, supplier) => {
    return await prisma.supplier.update({
        data: supplier,
        where: { id }
    })
}

export const list = async () => {
    return await prisma.supplier.findMany()
}

export const getById = async (id) => {
    return await prisma.supplier.findUnique({
        where: { id }
    })
}

export const remove = async (id) => {
    return await prisma.supplier.delete({
        where: { id }
    })
}