package br.edu.ifpb.ads.ws.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.ads.ws.model.User;

/**
 * 
 * @author franck
 *
 */

@RestController
@RequestMapping(LoginController.BASE_URI)
public class LoginController {
	
	public static final String BASE_URI = "/login";
	
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void login(@RequestBody User user){
		
	}

}
