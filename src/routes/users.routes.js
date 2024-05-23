import { Router } from 'express';
import userCtrl from '../controllers/user.controllers';

const routeUser = Router();

routeUser.route('/user').get(userCtrl.getUser).post(userCtrl.postUser);

export default routeUser;
