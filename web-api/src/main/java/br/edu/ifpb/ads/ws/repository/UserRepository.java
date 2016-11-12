package br.edu.ifpb.ads.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ifpb.ads.ws.model.User;

/**
 * 
 * @author franck
 *
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
	public User findByUserNome(String userNome);

}
