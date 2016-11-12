package br.edu.ifpb.ads.ws.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import br.edu.ifpb.ads.ws.model.User;
import br.edu.ifpb.ads.ws.repository.UserRepository;

/**
 * 
 * @author franck
 *
 */
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	/**
	 * 
	 * @param user
	 * @return
	 */
	public User save(User user) {
		return userRepository.save(user);
	}
	
	/**
	 * 
	 * @param user
	 */
	public void remove(User user) {
		userRepository.delete(user);
	}
	
	/**
	 * 
	 * @return
	 */
	public List<User> findAll(){
		return userRepository.findAll();
	}
	
	/**
	 * 
	 * @param id
	 * @return
	 */
	public User findById(Long id) {
		return userRepository.getOne(id);
	}

}
