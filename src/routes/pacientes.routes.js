import { Router } from 'express';
import pacienteCtrl from '../controllers/pacientes.controllers';

const router = Router();

router
	.route('/pacientes')
	.get(pacienteCtrl.getPacientes)
	.post(pacienteCtrl.postPaciente);

router
	.route('/pacientes/:id')
	.get(pacienteCtrl.getPaciente)
	.put(pacienteCtrl.putPaciente)
	.delete(pacienteCtrl.deletePaciente);

export default router;
