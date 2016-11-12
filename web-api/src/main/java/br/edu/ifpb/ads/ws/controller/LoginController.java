package br.edu.ifpb.ads.ws.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.ads.ws.model.User;
import br.edu.ifpb.ads.ws.service.UserService;

/**
 * 
 * @author franck
 *
 */

@RestController
@RequestMapping(LoginController.BASE_URI)
public class LoginController {
	
	public static final String BASE_URI = "/login";
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void login(@RequestBody User user){
		
	}

}
