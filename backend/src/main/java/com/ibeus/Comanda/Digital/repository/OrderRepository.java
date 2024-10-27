package com.ibeus.Comanda.Digital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ibeus.Comanda.Digital.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}