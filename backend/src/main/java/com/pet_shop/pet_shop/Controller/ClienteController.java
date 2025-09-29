package com.pet_shop.pet_shop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pet_shop.pet_shop.DTO.ClienteRequestDTO;
import com.pet_shop.pet_shop.DTO.ClienteResponseDTO;
import com.pet_shop.pet_shop.Service.ClienteService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping
    public ResponseEntity<ClienteResponseDTO> createCliente(@RequestBody ClienteRequestDTO clienteDTO) {
        ClienteResponseDTO novoCliente = clienteService.createCliente(clienteDTO);
        return ResponseEntity.ok(novoCliente);
    }

    @GetMapping
    public ResponseEntity<List<ClienteResponseDTO>> getAllClientes() {
        return ResponseEntity.ok(clienteService.getAllClientes());
    }
    
    @GetMapping("/{cpf}")
    public ResponseEntity<ClienteResponseDTO> getClienteByCpf(@PathVariable String cpf) {
        ClienteResponseDTO cliente = clienteService.getClienteByCpf(cpf);
        if (cliente != null) {
            return ResponseEntity.ok(cliente);
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{cpf}")
    public ResponseEntity<ClienteResponseDTO> updateCliente(@PathVariable String cpf, @RequestBody ClienteRequestDTO clienteDTO) {
        ClienteResponseDTO clienteAtualizado = clienteService.updateCliente(cpf, clienteDTO);
         if (clienteAtualizado != null) {
            return ResponseEntity.ok(clienteAtualizado);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{cpf}")
    public ResponseEntity<Void> deleteCliente(@PathVariable String cpf) {
        clienteService.deleteCliente(cpf);
        return ResponseEntity.noContent().build();
    }
}

