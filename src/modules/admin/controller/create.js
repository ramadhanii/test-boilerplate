export default async (req, res, next) => {
  try {
    res.status(200).json("Create User");
  } catch (error) {
    next(error);
  }
};
