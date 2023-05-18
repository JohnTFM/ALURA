package br.com.alura.rh.service.promocao;

import br.com.alura.rh.ValidacaoException;
import br.com.alura.rh.model.Cargo;
import br.com.alura.rh.model.Funcionario;
//SOLID
/*
 * S: Single responsibility
 * O: Open - close principle
 * L: Liskov substituition principle: um pato de borracha não é um pato. Se parece, mmas não é. Não use as heranças erroneamente
 * I: Interface segregation principle Esse princípio diz que às vezes nós vamos ser obrigados a implementar uma interface que não faz sentido para nós.
 * D: Dependency inversion principle: dependa mais de INTERFACES, e não de implementações	
 * 
 * 
 * 
 */

public class PromocaoService {
	
	public void promover(Funcionario funcionario, boolean metaBatida) {

		Cargo cargoAtual = funcionario.getCargo();
		if (Cargo.GERENTE == cargoAtual) {
			throw new ValidacaoException("Gerentes nao podem ser promovidos!");
		}
		
		if (metaBatida) {
			Cargo novoCargo = cargoAtual.getProximoCargo();
			funcionario.promover(novoCargo);
		} else {
			throw new ValidacaoException("Funcionario nao bateu a meta!");
		}
	}

}
