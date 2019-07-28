package com.bandit.account.service;

import com.bandit.account.client.AuthServiceClient;
import com.bandit.account.domain.Account;
import com.bandit.account.domain.User;
import com.bandit.account.exception.AccountAlreadyExistException;
import com.bandit.account.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.Optional;

@Service
public class AccountService {

    private AccountRepository accountRepository;

    private AuthServiceClient authClient;

    @Autowired
    public AccountService(AccountRepository accountRepository, AuthServiceClient authClient) {
        this.accountRepository = accountRepository;
        this.authClient = authClient;
    }

    public Optional<Account> findByName(String accountName) {
        Assert.hasLength(accountName, "Name must not be empty.");
        return accountRepository.findByName(accountName);
    }

    public Account create(User user) {
        Optional<Account> accountByName = accountRepository.findByName(user.getUsername());
        if (accountByName.isPresent())
            throw new AccountAlreadyExistException("Account with name " + user.getUsername() + " already exists.");

        authClient.createUser(user);
        Account account = new Account(user.getUsername());

        accountRepository.save(account);
        return account;
    }

}
