const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createUser(name, email, password) {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  console.log(`Created user: ${user.name}`);

  return user;
}

async function createCourse(name) {
  const course = await prisma.course.create({
    data: {
      name,
    },
  });

  console.log(`Created course: ${course.name}`);

  return course;
}

async function createGrade(score, courseId, userId) {
  const grade = await prisma.grade.create({
    data: {
      score,
      course: {
        connect: {
          id: courseId,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  console.log(`Created grade: ${grade.score}`);

  return grade;
}

async function deleteUser(id) {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  console.log(`Deleted user: ${user.name}`);

  return user;
}

async function deleteCourse(id) {
  const course = await prisma.course.delete({
    where: {
      id,
    },
  });

  console.log(`Deleted course: ${course.name}`);

  return course;
}

async function deleteGrade(id) {
  const grade = await prisma.grade.delete({
    where: {
      id,
    },
  });

  console.log(`Deleted grade: ${grade.score}`);

  return grade;
}

