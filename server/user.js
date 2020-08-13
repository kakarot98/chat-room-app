const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => {
    user.name === name && user.room === room;
  });

  if (!name || !room) return { error: "Username and room not mentioned" };

  if (existingUser) {
    return { error: "Cannot sign in. User and room already exists" };
  }

  const user = { id, name, room };
  users.push(user)
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.find((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
