import faker from "faker";

import { User } from "../types/User";

function spoofUser(): User {
  return {
    id: Math.floor(Math.random() * 100000),
    name: faker.name.firstName() + " " + faker.name.lastName(),
    avatarURL: faker.image.avatar(),
  };
}

export { spoofUser };
