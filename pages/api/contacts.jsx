const createNewContact = (req, res) => {
  switch (method) {
    case 'PUT':
      const { firstName, lastName } = req.body;
      console.log(firstName);
      console.log(lastName);
      res.status(200);
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default createNewContact;
