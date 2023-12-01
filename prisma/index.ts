import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()


// interface Task{
//     name: string;
//     description?: string;
//     dueDate?: Date;
//   }

// export async function createTask(obj:Task){
//     try {
//         await prisma.task.create({
//             data:obj
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function getTasks(){
//     try {
//         const tasks = await prisma.task.findMany();
//         return tasks
//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function DeleteTasks(id:string){
//     try {
//         await prisma.task.delete({
//             where:{
//                 id: id
//             }
//         })
//     } catch (error) {
        
//     }
// }