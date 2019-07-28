package com.bandit.account.controller;

import com.bandit.account.domain.Account;
import com.bandit.account.domain.User;
import com.bandit.account.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class AccountController {

    private AccountService accountService;

    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping(path = "/")
    public Account createNewAccount(@Valid @RequestBody User user) {
        return accountService.create(user);
    }
}