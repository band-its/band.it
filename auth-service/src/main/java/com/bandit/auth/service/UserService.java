package com.bandit.auth.service;

import com.bandit.auth.domain.User;
import com.bandit.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

public class UserService {

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    private UserRepository userRepository;

    public void create(User user) {
        Optional<User> existing = userRepository.findById(user.getUsername());
        existing.ifPresent(it -> {
            throw new IllegalArgumentException("user already exists: " + it.getUsername());
        });

        user.setPassword(encoder.encode(user.getPassword()));
        userRepository.save(user);
    }
}
