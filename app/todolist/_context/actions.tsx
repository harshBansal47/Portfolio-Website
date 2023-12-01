"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createTask = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const dueDate = formData.get("dueDate") as string;
  const parsedDate = new Date(dueDate);
  try {
    const newTask = await prisma.task.create({
      data: {
        name,
        description,
        dueDate: parsedDate,
      },
    });
    console.log("New task created:", newTask);
  } catch (error) {
    console.error(error);
  }
};

export const getOngoingTasks = async () => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        status: "ONGOING",
      },
      select: {
        id: true,
        name: true,
        description: true,
        dueDate: true,
        status:true
      },
    });
    return tasks
  } catch (error) {
    console.error(error);
  }
};

export const getCompletedTasks = async () => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        status: "COMPLETED",
      },
      select: {
        id: true,
        name: true,
        description: true,
        updatedAt: true,
        status:true
      },
    });
      return tasks
    
  } catch (error) {
    console.error(error);
  }
};

export const deleteSelectedTask = async (id: string) => {
  try {
    const deletedTask = await prisma.task.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const completeTask = async (id: string) => {
  try {
    const completeTask = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        status: "COMPLETED",
      },
    });
  } catch (error) {
    console.error(error);
  }
};