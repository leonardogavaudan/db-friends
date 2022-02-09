const Contact = require('../../lib/models/contact');

const createNewContact = (req, res) => {
  const method = req.method;

  switch (method) {
    case 'GET':
      Contact.findAll().then((response) => res.json(response));
      break;

    case 'POST':
      const { firstName, lastName } = req.body;
      console.log(firstName);
      console.log(lastName);

      let newContact = new Contact({ firstName, lastName });
      newContact.save();
      console.log(`just saved ${firstName} ${lastName}`);

      res.status(200);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default createNewContact;
