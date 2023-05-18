package joao.jpaLearn.controllers;

import joao.jpaLearn.entity.Cliente;
import joao.jpaLearn.records.ClienteDados;
import joao.jpaLearn.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("rec")
public class CrudControllerRec {

    @Autowired
    public ClienteRepository clienteRepository;

    @PostMapping
    public List<Cliente> salvarCliente(@RequestBody ClienteDados clienteDados){
        Cliente cliente = new Cliente(clienteDados);
        this.clienteRepository.save(cliente);
        return this.clienteRepository.findAll();
    }
}
