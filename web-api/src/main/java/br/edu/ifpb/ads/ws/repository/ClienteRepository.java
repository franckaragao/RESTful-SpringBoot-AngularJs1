package br.edu.ifpb.ads.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifpb.ads.ws.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{

}
