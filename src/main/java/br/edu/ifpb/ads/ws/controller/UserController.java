package br.edu.ifpb.ads.ws.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.ads.ws.model.Usuario;
import br.edu.ifpb.ads.ws.service.UserService;

/**
 * 
 * @author franck
 *
 */
@RestController
@RequestMapping(UserController.BASE_URI)
public class UserController {
	
	public static final String BASE_URI = "/users";

	
	@Autowired
	private UserService userService;
	
	/**
	 * 
	 * @param user
	 * @return
	 */
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Usuario> save(@RequestBody Usuario user){
		
		Usuario userSaved = userService.save(user);
		
		return new ResponseEntity<Usuario>(userSaved, HttpStatus.CREATED);
	}
}
