package br.edu.ifpb.ads.ws.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 
 * @author franck
 *
 */
@RestController
public class ClientController {
	
	@RequestMapping(method = RequestMethod.GET, value = "/clientes")
	public void find(){
		System.out.println("Chamou----------------");
		
	}
	
}
