export const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: "Hong Quan",
          age: 26,
          address: "Ninh thuan",
        },
        status: 200,
      });
    }, 1500);
  });
};
