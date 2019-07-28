package com.bandit.auth.service;

import com.bandit.auth.domain.User;
import com.bandit.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void create(User user) {
        Optional<User> userById = userRepository.findById(user.getUsername());
        userById.ifPresent(it -> {
            throw new IllegalArgumentException("User with username" + it.getUsername() + " already exists.");
        });

        user.setPassword(encoder.encode(user.getPassword()));
        userRepository.save(user);
    }
}
