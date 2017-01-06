package br.edu.ifpb.ads.ws.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.ads.ws.model.Usuario;
import br.edu.ifpb.ads.ws.repository.UserRepository;

/**
 * 
 * @author franck
 *
 */
@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	/**
	 * 
	 * @param user
	 * @return
	 */
	public Usuario save(Usuario user) {
		return userRepository.save(user);
	}
	
	/**
	 * 
	 * @param user
	 */
	public void remove(Usuario user) {
		userRepository.delete(user);
	}
	
	/**
	 * 
	 * @return
	 */
	public List<Usuario> findAll(){
		return userRepository.findAll();
	}
	
	/**
	 * 
	 * @param id
	 * @return
	 */
	public Usuario findById(Long id) {
		return userRepository.getOne(id);
	}
	
	/**
	 * 
	 * @param userName
	 * @return
	 */
	public Optional<Usuario> findByName(String userName) {
		return userRepository.findByUserNome(userName);
	}

}
