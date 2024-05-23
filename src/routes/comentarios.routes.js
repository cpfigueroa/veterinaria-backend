import { Router } from 'express';
import comentarioCtrl from '../controllers/comentarios.controllers';

const routeComentario = Router();

routeComentario
	.route('/comentarios')
	.get(comentarioCtrl.getComentarios)
	.post(comentarioCtrl.postComentario);

routeComentario.route('/comentarios/:id').delete(comentarioCtrl.deleteComentario);

export default routeComentario;
