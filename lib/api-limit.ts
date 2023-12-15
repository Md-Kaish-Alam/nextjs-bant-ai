import { auth } from "@clerk/nextjs";

import db from "@/lib/prisma-db";
import { MAX_FREE_COUNT } from "@/constants";

export const increaseAPiLimit = async () => {
  const { userId } = auth();

  if (!userId) return;

  const userApiLimit = await db.userApiLimit.findUnique({
    where: { userId },
  });

  if (userApiLimit) {
    await db.userApiLimit.update({
      where: { userId },
      data: {
        count: userApiLimit.count + 1,
      },
    });
  } else {
    await db.userApiLimit.create({
      data: {
        userId,
        count: 1,
      },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return false;

  const userApiLimit = await db.userApiLimit.findUnique({
    where: { userId },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNT) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) return 0;

  const userApiLimit = await db.userApiLimit.findUnique({
    where: { userId },
  });

  if (!userApiLimit) return 0;

  return userApiLimit.count;
};
