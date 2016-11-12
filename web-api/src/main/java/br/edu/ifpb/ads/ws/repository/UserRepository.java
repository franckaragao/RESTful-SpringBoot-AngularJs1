package br.edu.ifpb.ads.ws.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ifpb.ads.ws.model.Usuario;

/**
 * 
 * @author franck
 *
 */
@Repository
public interface UserRepository extends JpaRepository<Usuario, Long>{
	
	public Optional<Usuario> findByUserNome(String userNome);

}
