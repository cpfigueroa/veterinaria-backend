import { Router } from 'express';
import turnoCtrl from '../controllers/turnos.controllers';

const routeTurno = Router();

routeTurno.route('/turnos').get(turnoCtrl.getTurnos).post(turnoCtrl.postTurno);

routeTurno
	.route('/turnos/:id')
	.get(turnoCtrl.getTurno)
	.put(turnoCtrl.putTurno)
	.delete(turnoCtrl.deleteTurno);

export default routeTurno;
