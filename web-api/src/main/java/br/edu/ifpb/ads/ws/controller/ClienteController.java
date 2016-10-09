package br.edu.ifpb.ads.ws.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.ads.ws.model.Cliente;
import br.edu.ifpb.ads.ws.service.ClienteService;

/**
 * 
 * @author franck
 *
 */
@RestController
public class ClienteController {
	
	@Autowired
	ClienteService clienteService;

	@RequestMapping(method = RequestMethod.POST, value = "/clientes", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Cliente> saveCliente(@RequestBody Cliente cliente){
			
		clienteService.save(cliente);
		
		return new ResponseEntity<Cliente>(HttpStatus.CREATED);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/clientes", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Cliente>> getAll(){
		
		List<Cliente> listClientes = clienteService.getAll();
		
		return new ResponseEntity<>(listClientes, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/clientes/{id}")
	public ResponseEntity<Cliente> deleteCliente(@PathVariable Long id){
			
		Cliente cliente = clienteService.getById(id);
		clienteService.delete(cliente);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/clientes", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Cliente> updateCliente(@RequestBody Cliente cliente){
			
		Cliente clienteUpdated = clienteService.update(cliente);
		
		return new ResponseEntity<>(clienteUpdated, HttpStatus.OK);
	}
}
