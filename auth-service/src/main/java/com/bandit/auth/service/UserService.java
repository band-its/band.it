package com.bandit.auth.service;

import com.bandit.auth.domain.User;
import com.bandit.auth.exception.UserAlreadyExistException;
import com.bandit.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private PasswordEncoder passwordEncoder;
    private UserRepository userRepository;

    @Autowired
    public UserService(PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    public void create(User user) {
        Optional<User> userById = userRepository.findById(user.getUsername());
        userById.ifPresent(it -> {
            throw new UserAlreadyExistException("User with username" + it.getUsername() + " already exists.");
        });

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }
}
