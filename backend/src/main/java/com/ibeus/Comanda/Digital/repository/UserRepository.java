package com.ibeus.Comanda.Digital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ibeus.Comanda.Digital.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}