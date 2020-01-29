import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Nilemar Barcelos',
    email: 'nilemarbarcelos@gmail.com',
    password_hash: '2123123',
  });

  res.json(user);
});

export default routes;
