package br.edu.ifpb.ads.ws.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.ads.ws.model.Cliente;
import br.edu.ifpb.ads.ws.repository.ClienteRepository;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	public void save(Cliente cliente){
		clienteRepository.save(cliente);
	}
	
	public List<Cliente> getAll(){
		return clienteRepository.findAll();
	}
	
	public Cliente getById(Long id){
		return clienteRepository.findOne(id);
	}
	
	public void delete(Cliente cliente){
		clienteRepository.delete(cliente);
	}
	
	public Cliente update(Cliente cliente){
		return clienteRepository.save(cliente);
	}
}
