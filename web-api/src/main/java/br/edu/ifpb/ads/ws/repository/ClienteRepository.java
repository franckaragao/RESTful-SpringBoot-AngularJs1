package br.edu.ifpb.ads.ws.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ifpb.ads.ws.model.Cliente;

/**
 * 
 * @author franck
 *
 */
@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{
	
	List<Cliente> findByNomeStartingWithIgnoreCase(String nome);

}
