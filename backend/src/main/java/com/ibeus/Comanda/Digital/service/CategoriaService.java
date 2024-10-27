package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.Categoria;
import com.ibeus.Comanda.Digital.repository.CategoriaRepository;
import jakarta.persistence.EntityNotFoundException; // Importação correta
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public Categoria findById(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("O ID da categoria não pode ser nulo."); // Verifica se o ID é nulo
        }

        return categoriaRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Categoria não encontrada com ID: " + id)); // Lança exceção se não encontrado
    }

    // Método para verificar se a categoria existe
    public boolean existsById(Long id) {
        return id != null && categoriaRepository.existsById(id);
    }
}
