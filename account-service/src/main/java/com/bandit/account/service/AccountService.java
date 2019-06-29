package com.bandit.account.service;

import com.bandit.account.client.AuthServiceClient;
import com.bandit.account.domain.Account;
import com.bandit.account.domain.User;
import com.bandit.account.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private AuthServiceClient authClient;

    public Account create(User user) {
        Assert.isNull(accountRepository.findByName(user.getUsername()), "account already exists: " + user.getUsername());

        authClient.createUser(user);
        Account account = new Account(user.getUsername());

        accountRepository.save(account);
        return account;
    }

}
