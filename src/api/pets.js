import instance from ".";

const getAllPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};

const getPetById = async (id) => {
  const res = await instance.get(`/pets/${id}`);
  return res.data;
};

const addPets = async (name, type, image, adopted) => {
  const res = await instance.post("/pets/", {
    name,
    type,
    image,
    adopted,
  });
  return res.data;
};

const updatePets = async (name, type, image, adopted) => {
  const res = await instance.put(`/pets/${id}`, {
    name,
    type,
    image,
    adopted: 1,
  });
  return res.data;
};

const deletPetById = async (id) => {
  const res = await instance.get(`/pets/${id}`);
  return res.data;
};

export { getAllPets, getPetById, addPets };
